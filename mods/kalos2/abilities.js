exports.BattleAbilities = {
        "honeygather": {
                desc: "If it is not already holding an item, this Pokemon may find and be holding Honey after a battle.",
                shortDesc: "No competitive use.",
                onModifyAtkPriority: 5,
                onModifyAtk: function(atk, attacker, defender, move) {
                        if (item.id === 'honey') {
                                this.debug('Honey boost');
                                return this.chainModify(1.25);
                        }
                },
                id: "honeygather",
                name: "Honey Gather",
                rating: 0,
                num: 118
        },
        "ironfist": {
                desc: "This Pokemon receives a 20% power boost for the following attacks: Bullet Punch, Comet Punch, Dizzy Punch, Drain Punch, Dynamicpunch, Fire Punch, Focus Punch, Hammer Arm, Ice Punch, Mach Punch, Mega Punch, Meteor Mash, Shadow Punch, Sky Uppercut, and Thunderpunch. Sucker Punch, which is known Ambush in Japan, is not boosted.",
                shortDesc: "This Pokemon's punch-based attacks do 1.2x damage. Sucker Punch is not boosted.",
                onBasePowerPriority: 8,
                onBasePower: function(basePower, attacker, defender, move) {
                        if (move.isPunchAttack) {
                                this.debug('Iron Fist boost');
                                return this.chainModify(1.3);
                        }
                },
                id: "ironfist",
                name: "Iron Fist",
                rating: 3,
                num: 89
        },
        "burstingjets": {
                desc: "Raises the user's Attack stat by two stages when a stat is lowered, including the Attack stat. This does not include self-induced stat drops like those from Close Combat.",
                shortDesc: "This Pokemon's Attack is boosted by 2 for each of its stats that is lowered by a foe.",
                onAfterEachBoost: function(boost, target, source) {
                        if (!source || target.side === source.side) {
                                return;
                        }
                        var statsLowered = false;
                        for (var i in boost) {
                                if (boost[i] < 0) {
                                        statsLowered = true;
                                }
                        }
                        if (statsLowered) {
                                this.boost({spe: 2});
                        }
                },
                onUpdate: function(pokemon) {
                        if (pokemon.status === 'par') {
                                pokemon.cureStatus();
                        }
                },
                onImmunity: function(type, pokemon) {
                        if (type === 'par') return false;
                },
                id: "burstingjets",
                name: "Bursting Jets",
                rating: 2,
                num: -5
        },
        "defiant": {
                desc: "Raises the user's Attack stat by two stages when a stat is lowered, including the Attack stat. This does not include self-induced stat drops like those from Close Combat.",
                shortDesc: "This Pokemon's Attack is boosted by 2 for each of its stats that is lowered by a foe.",
                onAfterEachBoost: function(boost, target, source) {
                        if (!source || target.side === source.side) {
                                return;
                        }
                        var statsLowered = false;
                        for (var i in boost) {
                                if (boost[i] < 0) {
                                        statsLowered = true;
                                }
                        }
                        if (statsLowered) {
                                this.boost({atk: 2});
                        }
                },
                onUpdate: function(pokemon) {
                        if (pokemon.status === 'brn') {
                                pokemon.cureStatus();
                        }
                },
                onImmunity: function(type, pokemon) {
                        if (type === 'brn') return false;
                },
                id: "defiant",
                name: "Defiant",
                rating: 2,
                num: 128
        },
        "magician": {
                desc: "If this Pokemon is not holding an item, it steals the held item of a target it hits with a move.",
                shortDesc: "This Pokemon steals the held item of a target it hits with a move.",
                onBasePower: function(basePower, pokemon, target) {
                        var item = target.getItem();
                        if (item.id && !item.megaStone) {
                                return this.chainModify(1.2);
                        }
                },
                onHit: function(target, source) {
                        var item = target.getItem();
                        if (item.id === 'mail') {
                                target.setItem('');
                        } else {
                                item = target.takeItem(source);
                        }
                        this.add('-item', source, yourItem, '[from] Magician');
                },
                id: "magician",
                name: "Magician",
                rating: 2,
                num: -6,
                gen: 6
        }
};

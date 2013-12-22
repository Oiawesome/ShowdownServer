exports.BattleMovedex = {
        "triattack": {
                num: 161,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 20% chance to either burn, freeze, or paralyze it.",
                shortDesc: "20% chance to paralyze or burn or freeze target.",
                id: "triattack",
                isViable: true,
                name: "Tri Attack",
                pp: 10,
                priority: 0,
                multihit: [3,3],
                secondary: {
                        chance: 20,
                        onHit: function(target, source) {
                                var result = this.random(3);
                                if (result===0) {
                                        target.trySetStatus('brn', source);
                                } else if (result===1) {
                                        target.trySetStatus('par', source);
                                } else {
                                        target.trySetStatus('frz', source);
                                }
                        }
                },
                target: "normal",
                type: "Normal"
        },
        "poisonjab": {
                num: 398,
                accuracy: 100,
                basePower: 95,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 30% chance to poison it. Makes contact.",
                shortDesc: "30% chance to poison the target.",
                id: "poisonjab",
                isViable: true,
                name: "Poison Jab",
                pp: 20,
                priority: 0,
                isContact: true,
                secondary: {
                        chance: 30,
                        status: 'psn'
                },
                target: "normal",
                type: "Poison"
        },        
        "playaround": {
                num: -6,
                gen: 6,
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                desc: "Deals damage to one adjacent target and lowers the user's Attack and Defense by 1 stage. Makes contact.",
                shortDesc: "Lowers the user's Attack and Defense by 1.",
                id: "playaround",
                isViable: true,
                name: "Play Around",
                pp: 5,
                priority: 0,
                isContact: true,
                self: {
                        boosts: {
                                atk: -1,
                                def: -1
                        }
                },
                secondary: false,
                target: "normal",
                type: "Fairy"
        },
        "naturepower": {
                num: 267,
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "This move calls another move for use depending on the battle terrain: Thunderbolt in Electric Terrain, Energy Ball in Grassy Terrain, Moonblast in Misty Terrain, and Tri Attack in plain terrain.",
                shortDesc: "Attack depends on the users attacking stats.",
                id: "naturepower",
                isViable: true,
                name: "Nature Power",
                pp: 20,
                priority: 0,
                onHit: function(target) {
                        if (target.spa <= target.atk) { // Shedinja clause
                                var moveToUse = 'earthquake';
                        },
                        else if (target.atk <= target.spa) {
                                var moveToUse = 'earthpower';
                },
                secondary: false,
                target: "self",
                type: "Normal"
        },        
        "crosschop": {
                num: 238,
                accuracy: 95,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a higher chance for a critical hit. Makes contact.",
                shortDesc: "High critical hit ratio.",
                id: "crosschop",
                isViable: true,
                name: "Cross Chop",
                pp: 10,
                priority: 0,
                isContact: true,
                secondary: {
                        chance: 15,
                        volatileStatus: 'flinch'
                },
                target: "normal",
                type: "Fighting"
        },
        "steamray": {
                num: 8000,
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's SAttack and Speed by 1 stage.",
                shortDesc: "Boosts the user's SAttack and Speed by 1.",
                id: "steamray",
                isViable: true,
                name: "Steam Ray",
                pp: 20,
                priority: 0,
                isSnatchable: true,
                boosts: {
                        spa: 1,
                        spe: 1
                },
                secondary: false,
                target: "self",
                type: "Water"
        },
        "steamcannon": {
                num: 503,
                accuracy: 100,
                basePower: 120,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 30% chance to burn it. If the user is frozen, it thaws out just before attacking.",
                shortDesc: "20% chance to burn the target. Thaws user.",
                id: "steamcannon",
                isViable: true,
                name: "Steam Cannon",
                pp: 15,
                priority: 0,
                thawsUser: true,
                secondary: {
                        chance: 20,
                        status: 'brn'
                },
                target: "normal",
                type: "Water"
        },
        "attackorder": {
                num: 454,
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a higher chance for a critical hit.",
                shortDesc: "High critical hit ratio.",
                id: "attackorder",
                isViable: true,
                name: "Attack Order",
                pp: 15,
                priority: 0,
                critRatio: 2,
                secondary: false,
                target: "normal",
                type: "Bug"
        },
        "aurasphere": {
                num: 396,
                accuracy: true,
                basePower: 90,
                category: "Special",
                desc: "Deals damage to one adjacent or non-adjacent target and does not check accuracy.",
                shortDesc: "This move does not check accuracy.",
                id: "aurasphere",
                isViable: true,
                name: "Aura Sphere",
                pp: 20,
                priority: 0,
                isPulseMove: true,
                isBullet: true,
                secondary: false,
                target: "any",
                type: "Fighting"
        },
        "iciclecrash": {
                num: 556,
                accuracy: 100,
                basePower: 90,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 30% chance to flinch it.",
                shortDesc: "30% chance to flinch the target.",
                id: "iciclecrash",
                isViable: true,
                name: "Icicle Crash",
                pp: 10,
                priority: 0,
                secondary: {
                        chance: 30,
                        volatileStatus: 'flinch'
                },
                target: "normal",
                type: "Ice"
        },
        "poweruppunch": {
                num: -6,
                gen: 6,
                accuracy: 100,
                basePower: 60,
                category: "Physical",
                desc: "Hitting a target raises the Attack stat.",
                shortDesc: "Hitting a target raises Attack by 1",
                id: "poweruppunch",
                name: "Power-Up Punch",
                pp: 30,
                priority: 0,
                isContact: true,
                secondary: {
                        chance: 100,
                        self: {
                                boosts: {
                                        atk: 1
                                }
                        }
                },
                target: "normal",
                type: "Fighting"
        },
        "shadowball": {
                num: 247,
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 20% chance to lower its Special Defense by 1 stage.",
                shortDesc: "20% chance to lower the target's Sp. Def by 1.",
                id: "shadowball",
                isViable: true,
                name: "Shadow Ball",
                pp: 15,
                priority: 0,
                isBullet: true,
                secondary: {
                        chance: 20,
                        boosts: {
                                spd: -1
                        }
                },
                target: "normal",
                type: "Ghost"
        },
        "stoneedge": {
                num: 444,
                accuracy: 95,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a higher chance for a critical hit. Makes contact.",
                shortDesc: "High critical hit ratio.",
                id: "stoneedge",
                isViable: true,
                name: "Stone Edge",
                pp: 10,
                priority: 0,
                isContact: true,
                secondary: {
                        chance: 15,
                        volatileStatus: 'flinch'
                },
                target: "normal",
                type: "Rock"
        },
        "moonblast": {
                num: -6,
                gen: 6,
                accuracy: 100,
                basePower: 100,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 30% chance to lower its Special Attack by 1 stage.",
                shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
                id: "moonblast",
                isViable: true,
                name: "Moonblast",
                pp: 15,
                priority: 0,
                secondary: {
                        chance: 30,
                        boosts: {
                                spa: -1
                        }
                },
                target: "normal",
                type: "Fairy"
        }, 
        "dazzlinggleam": {
                num: -6,
                gen: 6,
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "Deals damage to all adjacent foes.",
                shortDesc: "No additional effect. Hits adjacent foes.",
                id: "dazzlinggleam",
                isViable: true,
                name: "Dazzling Gleam",
                pp: 10,
                priority: 0,
                secondary: false,
                target: "allAdjacentFoes",
                type: "Fairy"
        },
        "hurricane": {
                num: 542,
                accuracy: 85,
                basePower: 110,
                category: "Special",
                desc: "Deals damage to one adjacent or non-adjacent target with a 30% chance to confuse it. This move can hit a target using Bounce, Fly, or Sky Drop. If the weather is Rain Dance, this move cannot miss. If the weather is Sunny Day, this move's accuracy is 50%.",
                shortDesc: "30% chance to confuse target. Can't miss in rain.",
                id: "hurricane",
                isViable: true,
                name: "Hurricane",
                pp: 10,
                priority: 0,
                onModifyMove: function(move) {
                        if (this.isWeather('raindance')) move.accuracy = true;
                        else if (this.isWeather('sunnyday')) move.accuracy = 50;
                },
                secondary: {
                        chance: 20,
                        volatileStatus: 'confusion'
                },
                target: "any",
                type: "Flying"
        }, 
        "focusblast": {
                num: 411,
                accuracy: 85,
                basePower: 110,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 10% chance to lower its Special Defense by 1 stage.",
                shortDesc: "20% chance to lower the target's Sp. Def by 1.",
                id: "focusblast",
                isViable: true,
                name: "Focus Blast",
                pp: 5,
                priority: 0,
                isBullet: true,
                secondary: {
                        chance: 20,
                        boosts: {
                                spd: -1
                        }
                },
                target: "normal",
                type: "Fighting"
        },
        "gigadrain": {
                num: 202,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to one adjacent target. The user recovers half of the HP lost by the target, rounded up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "gigadrain",
                isViable: true,
                name: "Giga Drain",
                pp: 10,
                priority: 0,
                drain: [1,2],
                secondary: false,
                target: "normal",
                type: "Grass"
        }, 
        "paraboliccharge": {
                num: -6,
                gen: 6,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to all adjacent targets. The user recovers half of the HP lost by the target, rounded up.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "paraboliccharge",
                name: "Parabolic Charge",
                pp: 20,
                priority: 0,
                isViable: true,
                drain: [1,2],
                secondary: false,
                target: "allAdjacent",
                type: "Electric"
        },
        "lightbringer": {
                num: -534,
                gen: 6,
                accuracy: 100,
                basePower: 150,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 30% chance to lower its Special Attack by 1 stage.",
                shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
                id: "lgihtbringer",
                isViable: true,
                name: "Light Bringer",
                pp: 5,
                priority: 0,
                recoil: [33,100],
                secondary: false,
                target: "normal",
                type: "Fairy"
        },
        "phantomforce": {
                num: -6,
                gen: 6,
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target and breaks through Protect and Detect for this turn, allowing other Pokemon to attack the target normally. This attack charges on the first turn and strikes on the second. On the first turn, the user avoids all attacks. The user cannot make a move between turns. If the user is holding a Power Herb, the move completes in one turn. Makes contact.",
                shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection.",
                id: "phantomforce",
                name: "Phantom Force",
                pp: 10,
                priority: 0,
                isContact: true,
                secondary: false,
                target: "normal",
                type: "Ghost"
        },
        "roaroftime": {
                num: 459,
                accuracy: 100,
                basePower: 150,
                category: "Special",
                desc: "Deals damage to one adjacent target. If this move is successful, the user must recharge on the following turn and cannot make a move.",
                shortDesc: "User cannot move next turn.",
                id: "roaroftime",
                name: "Roar of Time",
                pp: 5,
                priority: 0,
                recoil: [33,100],
                secondary: false,
                target: "normal",
                type: "Dragon"
        }
};

exports.BattleAbilities = {
        "shadowtag": {
                desc: "When this Pokemon enters the field, its non-Ghost-type opponents cannot switch or flee the battle unless they have the same ability, are holding Shed Shell, or they use the moves Baton Pass or U-Turn.",
                shortDesc: "Prevents foes from switching out normally unless they also have this Ability.",
                onFoeModifyPokemon: function(pokemon) {
                        var foeactive = pokemon.side.foe.active;
                        var totalhp = 0;
                        for (var i=0; i<foeactive.length; i++) {
                                if (!foeactive[i] || foeactive[i].fainted) continue;
                                totalhp += foeactive[i].getStat('hp', false, true);
                        }
                       if (totalhp =< foe.maxhp/2) {{ 
                         if (pokemon.ability !== 'shadowtag') {
                                pokemon.trapped = true;
                        }
                },
                onFoeMaybeTrapPokemon: function(pokemon) {
                        if (pokemon.ability !== 'shadowtag') {
                                pokemon.maybeTrapped = true;
                        }
                },
                id: "shadowtag",
                name: "Shadow Tag",
                rating: 5,
                num: 23
        },
        "searingflames": {
                desc: "All fire moves inflict burn.",
                shortDesc: "blah.",
                onModifyMove: function(move) {
                        if (move.type === 'Fire') {
                        if (!move.secondaries) {
                                move.secondaries = [];
                        }
                        move.secondaries.push({
                                chance: 100,
                                status: 'brn'
                        });
                        }
                },
                id: "searingflames",
                name: "Searing Flames",
                rating: 2,
                num: -5
        },
        "contagious": {
                desc: "Any Pokémon who is contacted by or makes contact with this Pokémon becomes badly.",
                shortDesc: "blah blah.",
                onModifyMove: function(move) {
                        if (!move || !move.isContact) return;
                        if (!move.secondaries) {
                                move.secondaries = [];
                        }
                        move.secondaries.push({
                                chance: 100,
                                status: 'psn'
                        });
                },
                onAfterDamage: function(damage, target, source, move) {
                        if (move && move.isContact) {
                        if (!move.secondaries) {
                                        source.SetStatus('psn', target, move);
                                }
                        }
                },
                id: "contagious",
                name: "Contagious",
                rating: 2,
                num: 143
        },
};

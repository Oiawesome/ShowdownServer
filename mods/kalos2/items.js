exports.BattleItems = {
	"tiebreakerorb": {
		id: "tiebreakerorb",
		name: "Tie Breaker Orb",
		spritenum: 0,
		fling: {
			basePower: 30
		},
		onModifySpe: function(speMod) {
			return this.chain(speMod, 1.1);
		},
		num: -245,
		gen: 6,
		desc: "Holder's damaging moves do 1.3x damage; loses 1/10 max HP after the attack."
	},	
	"galefeather": {
		id: "galefeather",
		name: "Gale Feather",
		spritenum: 450,
		fling: {
			basePower: 60
		},
		num: -285,
		gen: 6,
		desc: "Holder's use of Tornado lasts 8 turns instead of 5."
	},	
        "xernite": {
                id: "xernite",
                name: "Xernite",
                spritenum: 0,              
                megaStone: "Xerneas-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Xerneas."
        },
        "yvelite": {
                id: "yvelite",
                name: "Yvelite",
                spritenum: 0,              
                megaStone: "Yveltal-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Yveltal."
        },
        "latiteblue": {
                id: "latiteblue",
                name: "Latite-Blue",
                spritenum: 0,              
                megaStone: "Latios-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Yveltal."
        },
        "latitered": {
                id: "latitered",
                name: "Latite-Red",
                spritenum: 0,         
                megaStone: "Latias-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Yveltal."
        },
        "godstone": {
                id: "godstone",
                name: "God Stone",
                spritenum: 0,
                onBasePowerPriority: 6,
                onBasePower: function(basePower, user, target, move) {
                        if (user.baseTemplate.num === 493 && (move.type === 'Normal' || move.type === 'Fairy')) {
                                return this.chainModify(1.2);
                        }
                },
                onTakeItem: function(item, pokemon, source) {
                        if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
                                return false;
                        }
                },
                num: -199,
                gen: 6,
                desc: "God Stone."
        }        
};     
        
        
        

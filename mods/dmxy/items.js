exports.BattleItems = {
        "powerherb": {
                id: "powerherb",
                onChargeMove: function(pokemon, target, move) {
                        if (pokemon.useItem()) {
                                this.debug('power herb - remove charge turn for '+move.id);
                                return false; // skip charge turn
                        }
                },
                onmustrecharge: function(pokemon, target, move) {
                        if (pokemon.useItem()) {
                                pokemon.removeVolatile('mustrecharge');
                                return true; // skip charge turn
                        }
                },
                name: "Power Herb",
                spritenum: 358,
                fling: {
                        basePower: 10
                },
                num: 271,
                gen: 4,
                desc: "Holder's two-turn moves complete in one turn (except Sky Drop). Single use."
        }
};

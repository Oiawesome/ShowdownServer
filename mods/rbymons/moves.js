function clampIntRange(num, min, max) {
  num = Math.floor(num);
  if (num < min) num = min;
  if (typeof max !== 'undefined' && num > max) num = max;
  return num;
}

exports.BattleMovedex = {
  amnesia: {
    inherit: true,
    boosts: {
      spd: 2,
      spa: 2
    }
  },
  tailglow: {
    inherit: true,
    boosts: {
      spd: 3,
      spa: 3
    }
  },
  nastyplot: {
    inherit: true,
    boosts: {
      spa: 2,
      spd: 2
    }
  },
  shellsmash: {
    inherit: true,
    boosts: {
      atk: 2,
      def: -1,
      spe: 2
    }
  },
  acid: {
    inherit: true,
    secondary: {
      chance: 10,
      boosts: {
        spa: -1,
        spd: -1
      }
    }
  },
  acidspray: {
    inherit: true,
    secondary: {
      chance: 100,
      boosts: {
        spa: -2,
        spd: -2
      }
    }
  },
  bugbuzz: {
    inherit: true,
    secondary: {
      chance: 10,
      boosts: {
        spa: -1,
        spd: -1
      }
    }
  },
  captivate: {
    inherit: true,
    onTryHit: function(pokemon, source) {
      if ((pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M')) {
      return;
      }
      return false;
    },
    boosts: {
      spa: -1,
      spd: -1
    }
  },
  charge: {
    inherit: true,
    volatileStatus: 'charge',
    onHit: function(pokemon) {
      this.add('-activate', pokemon, 'move: Charge');
    },
    effect: {
      duration: 2,
      onRestart: function(pokemon) {
        this.effectData.duration = 2;
      },
      onBasePower: function(basePower, attacker, defender, move) {
        if (move.type === 'Electric') {
          this.debug('charge boost');
          return basePower * 2;
        }
      }
    },
    boosts: {
      spa: 1,
      spd: 1
    }
  },
  chargebeam: {
    inherit: true,
    secondary: {
      chance: 70,
      self: {
        boosts: {
          spa: 1,
          spd: 1
        }
      }
    }
  },
  closecombat: {
    inherit: true,
    self: {
      boosts: {
        def: -1,
        spa: -1,
        spd: -1
      }
    }
  },
  cosmicpower: {
    /**NOTE: Cosmic Power is banned due to the fact it excessively breaks things like 
    * Sigilpyh, who is unstoppable with Cosmic Power + Stored Power
    */
    inherit: true,
    pp: 10,
    boosts: {
      def: 1,
      spa: 1,
      spd: 1
    }
  },
  defendorder: {
    inherit: true,
    boosts: {
      def: 1,
      spa: 1,
      spd: 1
    }
  },
  dracometeor: {
    inherit: true,
    self: {
      boosts: {
        spa: 2,
        spd: 2
      }
    }
  },
  earthpower: {
    inherit: true,
    secondary: {
      chance: 10,
      boosts: {
        spa: -1,
        spd: -1
      }
    }
  },
  energyball: {
    	inherit: true,
    	secondary: {
  		chance: 10,
		boosts: {
        		spa: -1,
			spd: -1
		}
	}
  },
  faketears: {
    inherit: true,
    	boosts: {
      		spa: -2,
		spd: -2
	}
  },
  fierydance: {
    inherit: true,
    secondary: {
  		chance: 50,
			self: {
				boosts: {
					spa: 1,
          				spd: 1
				}
			}
		}
  },
  flashcannon: {
    inherit: true,
    secondary: {
  		chance: 10,
			boosts: {
        spa: -1,
				spd: -1
			}
		}
  },
  flatter: {
    inherit: true,
    boosts: {
  		spa: 1,
      spd: 1
		}
  },
  focusblast: {
    inherit: true,
    secondary: {
  		chance: 10,
			boosts: {
        spa: -1,
				spd: -1
			}
		}
  },
  growth: {
    inherit: true,
    onModifyMove: function(move) {
  		if (this.isWeather('sunnyday')) move.boosts = {atk: 2, spa: 2, spd: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
      spd: 1
		}
  },
  leafstorm: {
    inherit: true,
    self: {
			boosts: {
				spa: -2,
        spd: -2
			}
		}
  },
  lusterpurge: {
    inherit: true,
    secondary: {
  		chance: 50,
			boosts: {
        spa: -1,
				spd: -1
			}
		}
  },
  memento: {
    inherit: true,
    boosts: {
  		atk: -2,
			spa: -2,
      spd: -2
		}
  },
  metalsound: {
    inherit: true,
    boosts: {
      spa: -2,
  		spd: -2
		}
  },
  mistball: {
    inherit: true,
    secondary: {
  		chance: 50,
			boosts: {
				spa: -1,
        spd: -1
			}
		}
  },
  overheat: {
    inherit: true,
    self: {
  		boosts: {
				spa: -2,
        spd: -2
			}
		}
  },
  psychic: {
    inherit: true,
    secondary: {
  		chance: 10,
			boosts: {
        spa: -1,
				spd: -1
			}
		}
  },
  psychoboost: {
    inherit: true,
    self: {
  		boosts: {
				spa: -2,
        spd: -2
			}
		}
  },
  seedflare: {
    inherit: true,
    secondary: {
  		chance: 40,
			boosts: {
        spa: -2,
				spd: -2
			}
		}
  },
  shadowball: {
    inherit: true,
    secondary: {
  		chance: 20,
			boosts: {
        spa: -1,
				spd: -1
			}
		}
  },
  snarl: {
    inherit: true,
    secondary: {
			chance: 100,
			boosts: {
				spa: -1,
        spd: -1
			}
		}
  },
  stockpile: {
    inherit: true,
    volatileStatus: 'stockpile',
  	effect: {
			onStart: function(target) {
				this.effectData.layers = 1;
				this.add('-start', target, 'stockpile'+this.effectData.layers);
				this.boost({def:1, spa:1, spd:1}, target, target, this.getMove('stockpile'));
			},
			onRestart: function(target) {
				if (this.effectData.layers >= 3) return false;
				this.effectData.layers++;
				this.add('-start', target, 'stockpile'+this.effectData.layers);
				this.boost({def:1, spa:1, spd:1}, target, target, this.getMove('stockpile'));
			},
			onEnd: function(target) {
				var layers = this.effectData.layers * -1;
				this.effectData.layers = 0;
				this.boost({def:layers, spd:layers}, target, target, this.getMove('stockpile'));
				this.add('-end', target, 'Stockpile');
			}
		}
  },
  strugglebug: {
    inherit: true,
    secondary: {
			chance: 100,
			boosts: {
				spa: -1,
        spd: -1
			}
		}
  },
  vcreate: {
    inherit: true,
    self: {
			boosts: {
				def: -1,
        spa: -1,
				spd: -1,
				spe: -1
			}
		}
  },
  workup: {
    inherit: true,
    boosts: {
			atk: 1,
			spa: 1,
      spd: 1
		}
  }
};

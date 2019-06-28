"user strict";

const PlayerTypes = require('../enums/playertypes');
const Sex = require('../enums/sex');
const Attacks = require('../attacks');

const Warrior = {
    name: "Wedigh",
    type: PlayerTypes.WARRIOR,
    hp: 150,
    mp: 100,
    abilities: {
        strenght: 70,
        dexterity:20,
        intelligence: 10
    },
    attacks: [Attacks.Punch, Attacks.Slam],
    sex: Sex.Male
};
module.exports = Warrior
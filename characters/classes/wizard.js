"user strict";

const PlayerTypes = require('../enums/playertypes');
const Sex = require('../enums/sex');
const Attacks = require('../attacks');

const Wizard = {
    name: "Medigh",
    type: PlayerTypes.WIZARD,
    hp: 100,
    mp: 300,
    abilities: {
        strenght: 10,
        dexterity:20,
        intelligence: 70
    },
    attacks: [Attacks.Fire, Attacks.Ice],
    sex: Sex.Female
};
module.exports = Wizard
"user strict";

const MonsterTypes = require('./enums/monstertypes');
const Attacks = require('./attacks');

const Koelko = {
    name: "Roberto",
    type: MonsterTypes.BOSS,
    hp: 400,
    mp: 300,
    abilities: {
        strenght: 10,
        dexterity: 10,
        intelligence: 10
    },
    attacks: [Attacks.Bite, Attacks.Poison]
};

module.exports = Koelko
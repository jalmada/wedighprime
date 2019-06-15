"user strict";

import MosterTypes from './enums/monstertypes';
import Attacks from './attacks';

const Koelko = {
    name: "Roberto",
    type: MosterTypes.BOSS,
    hp: 400,
    mp: 300,
    abilities: {
        strenght: 10,
        dexterity: 10,
        intelligence: 10
    },
    attacks: [Attacks.Bite, Attacks.Poison]
};

export default Koelko
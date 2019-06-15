"user strict";

import PlayerTypes from './enums/playertypes';
import Sex from './enums/sex';
import Attacks from './attacks';

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

export default Wizard
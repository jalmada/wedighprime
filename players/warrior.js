"user strict";

import PlayerTypes from './enums/playertypes';
import Sex from './enums/sex';
import Attacks from './attacks';

const Warrior = {
    name: "Wedigh",
    type: PlayerTypes.Warrior,
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

export default Warrior
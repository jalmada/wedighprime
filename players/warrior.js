"user strict";

import PlayerTypes from './enums/playertypes';
import Sex from './enums/sex';

const Warrior = {
    name: "Wedigh",
    type: PlayerTypes.Warrior,
    abilities: {
        strenght: 70,
        dexterity:20,
        intelligence: 10
    },
    sex: Sex.Male
};

export default Warrior
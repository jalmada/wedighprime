"user strict";

import PlayerTypes from './enums/playertypes';
import Sex from './enums/sex';

const Wizard = {
    name: "Medigh",
    type: PlayerTypes.WIZARD,
    abilities: {
        strenght: 10,
        dexterity:20,
        intelligence: 70
    },
    sex: Sex.Female
};

export default Wizard
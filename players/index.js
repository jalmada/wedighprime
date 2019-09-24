'use strict';

function Player(playerClass, name, sex){

    this.properties = playerClass;

    this.name = name || playerClass.name;
    this.sex = sex || playerClass.sex;
    this.attacks = this.properties.attacks;
    this.abilities = this.properties.abilities;

    this.attack = (attackId) =>{
        let strenght = this.abilities.strenght;
        let attackPower = this.attacks[attackId].strenght;

        return strenght + attackPower;
    }

    return {
        name: this.name,
        sex: this.sex,
        attack: this.attack,
        attacks: this.attacks
    }
}
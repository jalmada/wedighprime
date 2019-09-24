"use strict";
const battleStatus = require('./enums/battleStatus');

export function BattleSystem(players, enemies){

    this.players = players;
    this.enemies = enemies;

    if(!Array.isArray(players) || !Array.isArray(enemies)){
        throw "Invalid players or enemies array";
    }


    function PlayTurn(sourceId, attackId, receiverId, sourceType){
        let source = sourceType == 1 ? this.players[sourceId] : this.enemies[sourceId];
        let receiver = sourceType == 1 ? this.players[receiverId] : this.enemies[receiverId];

        let attack = source.attacks[attackId];
        let sourceAbilities = source.abilities;
        let attackPower = attack.strenght + sourceAbilities.strenght;

        receiver.hp -= attackPower;

        if(receiver.hp <= 0 && sourceType == 1){
            return battleStatus.VICTORY;
        } else if (receiver.hp <= 0 && sourceType == 0){
            return battleStatus.DEFEAT;
        } else {
            return battleStatus.INPROGRESS;
        }
    }

    return {
        PlayTurn: PlayTurn
    }
}
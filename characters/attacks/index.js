"use strict";

const Fire = require('./fire');
const Ice = require('./ice');
const Punch = require('./punch');
const Slam = require('./slam');

const Attacks = {
    Fire: Fire,
    Ice: Ice,
    Punch: Punch,
    Slam: Slam
};

module.exports = Attacks;
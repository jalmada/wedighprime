"use strict";

const Bite = require('./bite');
const Poison = require('./poison');

const Attacks = {
    Bite: Bite,
    Poison: Poison
};

module.exports = Attacks;
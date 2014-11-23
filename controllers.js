/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('controllers'); // -> 'a thing'
 */
 
 var Controllers = function() {
     this.SpawnController = require('spawnController');
     this.createCreepController = require('creepController');
 };
 module.exports = Controllers;

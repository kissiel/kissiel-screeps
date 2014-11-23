/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawnController'); // -> 'a thing'
 */

var Utils = new require('utils')();
var logger = new Utils.Logger('spawnController');

// to enable debuggin un-comment next line
//Utils.addNamespace('spawnController');
 
 
function SpawnController(spawnName) {
    if (!Game.spawns[spawnName]) {
        console.log(spawnName + ' not found in Game!');
        return;
    }
    this.core = Game.spawns[spawnName];
}

SpawnController.prototype.trainCreep = function(type, lvl) {
    lvl = lvl || 0; // default level = 0
    var new_name = type + '-' + Math.floor(Math.random()*1000);
    var new_creep = this.core.createCreep(PROTOTYPES[type][lvl], new_name);
    switch(new_creep) {
        case new_name:
            logger.log("ok");
            break;
        case Game.ERR_BUSY:
            logger.log("busy");
            break;
        case Game.ERR_NAME_EXISTS:
            logger.log("same_name");
            break;
        case Game.ERR_NOT_ENOUGH_ENERGY:
            logger.log("OOM");
            break;
        default:
            logger.error("ERROR : "+new_creep);
            
    }
}

var PROTOTYPES = {
    "creep" : [
        [Game.MOVE]
    ],
        
    
    "harvester" : [
        [Game.CARRY, Game.WORK, Game.MOVE],
        [Game.CARRY, Game.CARRY, Game.WORK, Game.WORK, Game.MOVE]
    ],
    "fighter" : [],
    "archer" : [],
    "builder" : [],
    "maintainer": [],
};

module.exports = SpawnController;

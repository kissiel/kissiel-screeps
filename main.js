var Utils = new require('utils')();

var Controllers = new (require('controllers'))();
var mainSpawn = new Controllers.SpawnController('Spawn1');

for (var i in Game.creeps) {
    var creepController = Controllers.createCreepController(Game.creeps[i]);
    
    creepController.greet();
    creepController.do();
    
}

mainSpawn.trainCreep('harvester');

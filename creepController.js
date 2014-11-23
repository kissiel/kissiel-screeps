/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creepController'); // -> 'a thing'
 */
var Utils = new require('utils')();
var logger = new Utils.Logger('creepController');
// to enable debuggin un-comment next line
Utils.addNamespace('creepController');

var createCreepController = function(creep) {
    var indexOfDash = creep.name.indexOf('-');
    if (indexOfDash < 0) {
        logger.error("Dash (-) not found in creep's name, creep.name: " + creep.name);
        return;
    }
    var type = creep.name.substr(0,indexOfDash);
    logger.log(type);
    
    switch(type) {
        case 'harvester': return new HarvesterController(creep);
        default: logger.error("unknown type :" + type); 
    }
}

var CreepController = function(creep) {
    this.innerCreep = creep;
};
CreepController.prototype.moveToClosest = function() {
    logger.error("moveToClosest() called on abstract creep()!");
}
CreepController.prototype.do = function() {
    logger.error("do() called on abstract creep!");
}
CreepController.prototype.greet = function() {
    logger.error("hello from CreepController()");
}

var HarvesterController = function(creep) {
    CreepController.call(this);
}
HarvesterController.prototype = Object.create(CreepController.prototype);
HarvesterController.prototype.constructor = HarvesterController;

HarvesterController.prototype.greet = function() {
    logger.error("hello from HarvesterController()");
}
HarvesterController.prototype.do = function () {
    logger.error('do() in harvester');
}


module.exports = createCreepController;

/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('utils'); // -> 'a thing'
 */
 
var Utils = function () {

    this.namespaces = [];
    this.Logger = function(namespace) {
        this.namespace = namespace;
        this.log = function(msg) {
            for (var i=0; i<get_instance().namespaces.length; i++) {
                var ns = get_instance().namespaces[i];
                if (this.namespace === ns) {
                    console.log(this.namespace + ": " + msg);
                    return;
                }
            }
        }
        this.error = function(msg) {
            console.log(this.namespace + ":ERROR: " + msg);
        }
    }
    this.addNamespace = function(namespace) {
        for (var i in this.namespaces) {
            if (this.namespaces[i] === namespace)
                return; //already in the list of shown namespaces
        }
        this.namespaces.push(namespace);
    }
    
}
var instance;

var get_instance = function() {
    if (!instance) {
        instance = new Utils();
    } 
    return instance;
}

module.exports = get_instance;

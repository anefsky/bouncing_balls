var MyApp = MyApp || {};  // local namespace
var Utils = Utils || {};

MyApp.App = (function() { // Singleton
    var instance; // stores reference to Singleton
    function init() { // runs on creation
        // Private methods and variables

        var _cfgParams = {
            "max_orders_per_type": 3
        },
        _itemCounter = 0,
                _properties = {};

        var _getNextItemNum = function() {
            return _itemCounter++;
        };
        return {
            // Public methods and variables
            setProperty: function(key, value) {
                _properties[key] = value;
            },
            getProperty: function(key) {
                return _properties[key];
            },
            getCfgParam: function(key) {
                return _cfgParams[key];
            }
        };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

window.onload = function() {
    var app = MyApp.App.getInstance();
};








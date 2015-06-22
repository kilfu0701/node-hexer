/**
 * @description
 *    A simple Hex encode/decode from string.
 * 
 * @usage
 *    var hexer = require('node-hexer');
 *    var str = 'Hello World!';
 *    str.he();
 *    // '48656c6c6f20576f726c6421'
 *
 *    var myHex = '5465737420466f7220486578204465636f6465'; 
 *    myHex.hd();
 *    // 'Test For Hex Decode'
 *
 * @author
 *    kilfu0701
 *
 * @license
 *    MIT
 */

module.exports = function() {
	return new Hexer();
};

function Hexer() {
    if(typeof String.prototype.hd === 'undefined') {
        String.prototype.hd = function(param) {
            return this.toString().match(/[a-f0-9]{2}/gi).map(function(r) {
                return String.fromCharCode(parseInt(r, 16));
            }).join('');
        };
    }

    if(typeof String.prototype.he === 'undefined') {
        String.prototype.he = function(param) {
            var r = '', i;
            for(i = 0; i < this.length; i++) {
                r += this.charCodeAt(i).toString(16);
            }
            return r;
        };
    }
};

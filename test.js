var test = require('tape'),
    hexer = require('./'); 

test('basic test', function (t) {
    var data = {
        '6d': 'm'
    };

    for(var i in data) {
        t.equal(hexer.decode(i), data[i]);
    }

	t.end();
});

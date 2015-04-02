var fs = require('fs');
var path = require('path');

module.exports = {
    setTestCase: function () {
        try {
            var obj = JSON.parse(fs.readFileSync(__dirname + '/movie_list.json', 'utf8'));
            localStorage.setItem('messages', JSON.stringify(obj));
        } catch (e) {}
    }
}

// var obj;
// fs.readFile(__dirname + '/movie_list.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     console.log(obj)
// });

// module.exports = obj;
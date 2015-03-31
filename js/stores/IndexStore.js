var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var React = require('react');
var MovieList = require('../components/movie_list')
var MovieDetail = require('../components/movieDetail');

var _movie = {};

var IndexStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit('change');
        console.log("bbb")
    }
});

AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
        case "GO_MOVIE_DETAIL":
            React.render(
                <MovieDetail movieId={payload.text} url="movie_list.json"/>,
                document.getElementById('content')
            );
            break;
        case "BACK_TO_INDEX":
            React.render(
                <MovieList url="movie_list.json"/>,
                document.getElementById('content')
            );
            break;
    }
    return true;
})

module.exports = IndexStore;
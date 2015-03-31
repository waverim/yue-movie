var React = require('react');
var Header = require('./components/header');
var MovieBox = require('./components/movie_list');
var MovieDetail = require('./components/movieDetail');

React.render(
    <Header />,
    document.getElementById('header')
);

React.render(
    <MovieBox url="movie_list.json" />,
    document.getElementById('content')
);

// React.render(
//     <MovieDetail url="movie_list.json" />,
//     document.getElementById('content')
// );
var React = require('react');
var IndexActions = require('../action/IndexAction');
var AppStore = require('../stores/IndexStore');

var MovieBox = React.createClass({
    getInitialState: function() {
        return {data: AppStore.getAll() };
    },
    render: function () {
        return (
            <MovieList data={this.state.data} />
        );
    }
})

var MovieList = React.createClass({
    render: function () {
        var movieNodes = this.props.data.map(function (movie) {
            return (
                <Movie data={movie} />
            );
        });
        return (
            <ul>
                {movieNodes}
            </ul>
        );
    }
})

var Movie = React.createClass({
    handleClick: function () {
        IndexActions.getMovie(this.props.data.movie_id)
    },
    render: function () {
        var style = {
            li:  {
                backgroundColor: '#fff',
                borderBottom: '1px solid #eee',
                fontSize: '2em',
                padding: '0.5em'
            }
        };
        var movie_data = this.props.data;
        var url = "#/movie/" + movie_data.movie_id;
        return (
            <a href={url}>
            <li style={style.li} name={movie_data.movie_id} onClick={this.handleClick}>
                <h2>{movie_data.movie_title}</h2>
                <p>豆瓣评分：{movie_data.movie_score}</p>
            </li>
            </a>
        );
    }
})

module.exports = MovieBox;
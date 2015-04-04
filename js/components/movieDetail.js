var React = require('react');
var AppStore = require('../stores/IndexStore');

var movieDetail = React.createClass({
    getInitialState: function() {
        var url = window.location.href;
        var movie_id = url.match(/\d+$/g)[0];
        return {data: AppStore.getMovie(movie_id)};
    },
    render: function() {
        var movie_data = this.state.data;
        return (
            <div name={movie_data.movie_id}>
                <h2>{movie_data.movie_title}</h2>
                <p>演员：{movie_data.movie_actors}</p>
                <p>豆瓣评分：{movie_data.movie_score}</p>
                <p>简介：{movie_data.movie_summary}</p>
            </div>
        );
    }

});

module.exports = movieDetail;
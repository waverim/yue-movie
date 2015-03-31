var React = require('react');

var movieDetail = React.createClass({
    loadMovieFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                for (var i in data) {
                    if (data[i].movie_id == this.props.movieId) {
                        this.setState({data: data[i]});
                        break;
                    }
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: {}};
    },
    componentDidMount: function() {
        this.loadMovieFromServer();
        setInterval(this.loadMovieFromServer, 100000);
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
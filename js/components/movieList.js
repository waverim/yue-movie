var React = require('react');
var IndexActions = require('../action/IndexAction');
var AppStore = require('../stores/IndexStore');

// var mlist = require('../testCase');

var MovieBox = React.createClass({
    loadMovieFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadMovieFromServer();
        setInterval(this.loadMovieFromServer, 100000);
    },
    render: function () {
        // console.log(mlist);
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
        IndexActions.showItem(this.props.data.movie_id);
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
        return (
            <li style={style.li} name={movie_data.movie_id} onClick={this.handleClick}>
                <h2>{movie_data.movie_title}</h2>
                <p>豆瓣评分：{movie_data.movie_score}</p>
            </li>
        );
    }
})

// React.render(
//     <MovieBox url="movie_list.json" />,
//     document.getElementById('content')
// );

module.exports = MovieBox;
var React = require('react');
var AppAction = require('../action/AppAction');
var AppStore = require('../stores/IndexStore');

var MovieDetail = React.createClass({
    render: function() {
        var movie_data = this.props.data;
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

var WantSeeButton = React.createClass({
    handleClick: function () {
        if (!this.state.want_see) {
            AppAction.wantSee(
                this.props.data.user_id,
                this.props.data.movie_id
            );
            this.setState({want_see: true});
        }
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this.wantSeeReturn);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this.wantSeeReturn);
    },
    wantSeeReturn: function () {
        console.log( AppStore.getUserInfo(this.props.data.user_id) );
    },
    getInitialState: function () {
        return {
            want_see: AppStore.isWantSee(
                this.props.data.user_id,
                this.props.data.movie_id
            )
        }
    },
    render: function() {
        var text = this.state.want_see ? "已想看" : "想看";
        return (
            <button onClick={this.handleClick}>{text}</button>
        );
    }

});

var WantSeeList = React.createClass({
    render: function() {
        console.log(this.props.data);
        var userNodes = this.props.data.map(function (user) {
            return (
                <WantSeeListItem data={AppStore.getUserInfo(user)} />
            );
        });
        return (
            <div>
            <h3>想看列表</h3>
            <ul>
                {userNodes}
            </ul>
            </div>
        );
    }
});

var WantSeeListItem = React.createClass({
    render: function() {
        var user_data = this.props.data;
        return (
            <a>
            <li name={user_data.id}>
                <p>{user_data.username}</p>
            </li>
            </a>
        );
    }
});

var MovieDetailBox = React.createClass({
    getInitialState: function() {
        var url = window.location.href,
            movie_id = url.match(/\d+$/g)[0];

        var user_id = AppStore.getUserId();
        console.log(AppStore.getWantSeeList(movie_id))
        return {
            movie_data: AppStore.getMovie(movie_id),
            want_see: {user_id: user_id, movie_id: movie_id},
            want_see_list: AppStore.getWantSeeList(movie_id)
        };
    },
    render: function() {
        return (
            <div>
                <MovieDetail data={this.state.movie_data} />
                <WantSeeButton data={this.state.want_see} />
                <WantSeeList data={this.state.want_see_list} />
            </div>
        );
    }
});

module.exports = MovieDetailBox;
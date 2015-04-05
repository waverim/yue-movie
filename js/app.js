var React = require('react');
var Header = require('./components/header');
var MovieBox = require('./components/movieList');
var MovieDetail = require('./components/movieDetail');
var Login = require('./components/login');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
            <Header />
            <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route path="movie/:movieId" handler={MovieDetail}/>
        <Route path="login" handler={Login}/>
        <DefaultRoute handler={MovieBox} />
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
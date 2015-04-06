var React = require('react');
var AppAction = require('../action/AppAction');
var AppStore = require('../stores/IndexStore');

var Header = React.createClass({
    render: function () {
        var style = {
            header:  {
                fontSize: '2em'
            }
        };
        return (
            <div style={style.header}>
                <Back />
                <Title />
                <Menu />
            </div>
        );
    }
});

var Back = React.createClass({
    render: function () {
        return (<a href="#/">返回</a>);
    }
});

var Title = React.createClass({
    render: function () {
        var style = {
            title:  {
                display: 'inline-block'
            }
        };
        return (<h1 style={style.title}>正在上映</h1>);
    }
});

var Menu = React.createClass({
    render: function () {
        return (<a href="#/login">个人中心</a>);
    }
});

module.exports = Header;
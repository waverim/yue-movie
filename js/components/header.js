var React = require('react');
var IndexActions = require('../action/IndexAction');
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
    handleClick: function () {
        IndexActions.backToIndex();
    },
    render: function () {
        return (<a onClick={this.handleClick}>返回</a>);
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
        return (<a>个人中心</a>);
    }
});

// React.render(
//     <Header />,
//     document.getElementById('header')
// );

module.exports = Header;
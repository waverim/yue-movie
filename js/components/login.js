var React = require('react');
var AppAction = require('../action/AppAction');
var IndexStore = require('../stores/IndexStore');

var LoginBox = React.createClass({
    handleClick: function () {
        AppAction.login (
            this.state.username, 
            this.state.password
        );
    },
    getInitialState: function() {
        return {
            username: '',
            password: '' 
        };
    },
    onChange: function () {
        var target = event.target,
            id = target.id,
            value = target.value;

        if (id == "username")
            this.state.username = value;
        else if (id == "password")
            this.state.password = value;
    },

    componentDidMount: function() {
        IndexStore.addChangeListener(this.loginReturn);
    },
    componentWillUnmount: function() {
        IndexStore.removeChangeListener(this.loginReturn);
    },
    loginReturn: function () {
        var user_id = IndexStore.getUserId();
        console.log(user_id)
        if (user_id > 0) {
            window.location.href = "/#/"; 
        }
    },

    render: function() {
        return (
            <div>
            <p><span>用户名</span><input type="text" id="username" defaultValue={this.state.username} onChange={this.onChange} /></p>
            <p><span>密码</span><input type="password" id="password" defaultValue={this.state.password} onChange={this.onChange} /></p>
            <button onClick={this.handleClick}>登录</button>
            </div>
        );
    }

});

module.exports = LoginBox;
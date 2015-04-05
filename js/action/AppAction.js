var AppDispatcher = require('../dispatcher/AppDispatcher');

var IndexActions = {
    login: function (username, password) {
        AppDispatcher.dispatch({
            actionType: 'LOGIN',
            username: username,
            password: password
        })
    }
}

module.exports = IndexActions;
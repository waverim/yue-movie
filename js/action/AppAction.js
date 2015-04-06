var AppDispatcher = require('../dispatcher/AppDispatcher');

var IndexActions = {
    login: function (username, password) {
        AppDispatcher.dispatch({
            actionType: 'LOGIN',
            username: username,
            password: password
        })
    },

    wantSee: function (user_id, movie_id) {
        AppDispatcher.dispatch({
            actionType: 'WANT_SEE',
            user_id: user_id,
            movie_id: movie_id
        })
    }
}

module.exports = IndexActions;
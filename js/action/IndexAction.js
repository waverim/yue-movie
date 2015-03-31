var AppDispatcher = require('../dispatcher/AppDispatcher');

var IndexActions = {
    showItem: function (text) {
        // AppDispatcher.handleViewAction({
        AppDispatcher.dispatch({
            actionType: 'GO_MOVIE_DETAIL',
            text: text
        });
    },

    backToIndex: function () {
        AppDispatcher.dispatch({
            actionType: 'BACK_TO_INDEX',
        });
    }
}

module.exports = IndexActions;
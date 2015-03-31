var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

// var assign = require('object-assign');

// var AppDispatcher = assign(new Dispatcher(), {
//   handleViewAction: function(action) {
//     this.dispatch({
//       source: 'CHANGE_HEADER_TITLE',
//       action: action
//     });
//   }
// });

// module.exports = AppDispatcher;
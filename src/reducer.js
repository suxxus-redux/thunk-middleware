'use strict';

var reducer = function(state, action) {

    state = state || { name: '' };


    var actions = {
            SET_NAME: function() {
                return action.name;
            },
            DEFAULT: function() {
                return state;
            }
        },

        actionType = actions[action.type] || actions.DEFAULT;

    return actionType();
};

module.exports = reducer;



var orm = require("../config/orm.js")

var burger = {
    all: function (getcb) {
        orm.all("burgers", function (res) {
            getcb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
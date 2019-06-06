// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let event = {
    selectAll: function(cb) {
        orm.selectAll("events", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("events", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("events", objColVals, condition, function(res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (events_controller.js).
module.exports = event;
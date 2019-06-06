const express = require("express");

const router = express.Router();

// Import the model (event.js) to use its database functions.
const event = require("../models/event.js");


// Root route displaying available events
router.get("/", function(req, res) {
    event.selectAll(function(data) {
        let hbsObject = { event: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create new event 
router.post("/api/event", function(req, res) {
    event.insertOne([
        "event_name", "devoured"
    ], [
        req.body.event_name, devoured = false
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// add event
router.put("/api/event/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    event.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("task", taskSchema);


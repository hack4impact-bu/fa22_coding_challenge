const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    }
});
const task = mongoose.model("task", taskSchema);
module.exports = task;


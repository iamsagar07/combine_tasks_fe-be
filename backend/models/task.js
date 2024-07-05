const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique : false,
    },
    important: {
        type: Boolean,
        default: false,
    },
    complete: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("task", taskSchema);

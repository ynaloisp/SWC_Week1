const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please enter task."],
    },
},
{
    timestamps: true
}
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
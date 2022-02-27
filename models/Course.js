const Student = require("./Student");
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    code: { type: String, require: true, maxlength: 16 },
    title: { type: String, require: true, maxlength: 255 },
    description: { type: String, require: false, maxlength: 2048 },
    url: { type: String, require: false, maxlength: 512 },
    students: [
    { type: mongoose.Schema.Types.ObjectId, require: false, ref: "Student" },
    ],
});
const Model = mongoose.model("Course", schema);
module.exports = Model;
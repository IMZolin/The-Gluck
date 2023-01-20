const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        summary: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
            required: false,
        },
        author: {
            type: {type:Schema.Types.ObjectId, ref:'User'},
            required: true,
        },
        categories: {
            type: Array,
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
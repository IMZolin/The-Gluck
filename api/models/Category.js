const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
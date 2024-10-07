const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user_name:{
        type: String,
        required: [true, "user name is required"],
        minlength: [5, "way to short name, 5 letters required"]
    },
    password:{
        type: String,
        required: [true, "invalid password"]
    },
    role:{
        type: String,
        enum: ["soldier", "commander"],
        required: [true, "enter a role"]
    },
    area:{
        type: String,
        enum: ["center", "north", "south", "west", "east"],
        required: [true, "enter an area"]   
    },
    units:{
        type: [Number],
        required: [true, "enter an unit"]
    }
})

const UserModel = mongoose.model("user", userSchema);
module.exports = {
    UserModel,
    userSchema
}
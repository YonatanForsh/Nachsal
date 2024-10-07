const mongoose = require("mongoose")
const { userSchema } = require("./userModel");
const { reply } = require("../controllers/greenEyeController");


const populationSchema = new mongoose.Schema({
    areas: [String],
    units: [String]
})


const greenEyeSchema = new mongoose.Schema({
    created_at:{
        type: Date,
        default: Date.now()
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "commander is required!!"]
    },
    length:{
        type: Number,
        default: 3,
        required: [true, "commander is required!!"]
    },
    replies:{
        type: [mongoose.Schema.Types.ObjectId],

    },
    population:{
        type: populationSchema
    }
})



const greenEyeModel = mongoose.model("user", greenEyeSchema);
module.exports = greenEyeModel
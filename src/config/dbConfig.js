const mongoose = require("mongoose")

const connectToMongo = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Nachsal")
    } catch (err) {
        console.log(err);
        
    }
}


module.exports = {
    connectToMongo
}

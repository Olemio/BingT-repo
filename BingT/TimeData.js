import mongoose from "mongoose"

const timeDataSchema = new mongoose.Schema({
    scramble: String,
    time: Number,
    date: String
})

export default mongoose.model("TimeData", timeDataSchema)
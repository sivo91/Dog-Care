import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    isAdmit: {
       type: Boolean,
       default: false
    }

}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)
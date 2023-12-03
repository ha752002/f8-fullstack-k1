import mongoose, {model, models} from "mongoose";


const userSchema = new mongoose.Schema({
    name : {
        type : mongoose.Schema.Types.String,
        require : true
    },
    email : {
        type : mongoose.Schema.Types.String,
        require : true,
        unique: true,
        index: true,
        immutable : true
    },
    password : {
        type : mongoose.Schema.Types.String,
        require : true
    }
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;
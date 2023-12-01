import mongoose, {model, models, Schema, SchemaOptions} from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String
}, <SchemaOptions>{
    statics: {
        findByUsernameAndPassword(username: string, password: string){
            return this.find({username, password})
        }
    }
})
const User = models.User || model("User", userSchema)
export default User

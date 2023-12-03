import * as mongoose from "mongoose";

export  const connectMongoDB = async () => {
   try {
       if (mongoose.connection.readyState === 1) {
           return mongoose.connection.asPromise()
       }

       return mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING!)
   } catch (e){
       console.log(e)
   }
}
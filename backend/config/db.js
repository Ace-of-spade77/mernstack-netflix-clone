import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("Mongo Db connected:" + conn.connection.host);
        
    } catch (error) {
        console.log('error connecting the mongodb: ' + error.message);
        process.exit(1);//1 means there was an failure, and 0 means sucess
    }
};
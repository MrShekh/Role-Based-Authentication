import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://shekhasifofficial2022:gpWaLFGyNwq2ZsvZ@cluster0.zmyhu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectDB;
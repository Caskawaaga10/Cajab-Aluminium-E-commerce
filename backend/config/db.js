import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://cajab:cajab123@cluster0.vhf75xv.mongodb.net/CAJABALUMINIUM').then(()=> console.log("DB Connected"));
}
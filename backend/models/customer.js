import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  customer_id: {
    type:Number,
    required:true,
    unique:true
  },
  customer_name: {
    type:String,
    required:true
  },
  installment_date: {
    type:String,
    required:true
  },
  occupation: {
    type:String,
    required:true
  },
  phone_no: {
    type:String,
    required:true
  },
  guranter:{
    type:String,
    required:true
  },
  guranter_phone_no:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  }
})

const Customer = mongoose.model("Customer", userSchema);
export default Customer;
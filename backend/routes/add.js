import express from 'express';
import Customer from '../models/customer.js';

const router = express.Router();

router.post('/data', async(req, res) => {
  const customer_id=req.body.id
  const customer_name=req.body.name
  const installment_date=req.body.date
  const occupation=req.body.occupation
  const phone_no=req.body.phone_no
  const guranter=req.body.guranter
  const guranter_phone_no=req.body.guranter_no
  const address=req.body.address
  try{
    const newCustomer = new Customer({ customer_id,customer_name,installment_date,occupation,phone_no,guranter,guranter_phone_no,address });
    await newCustomer.save(); 
    res.json({ message: `✅ ${customer_name} data saved successfully` });
  } catch (error) {
    console.log(error)
    res.json({ message: `❌ Error in saving ${customer_name} data`});
  }
});

export default router
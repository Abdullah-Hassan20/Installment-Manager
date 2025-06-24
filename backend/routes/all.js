import express from 'express';
import Customer from '../models/customer.js';

const router = express.Router();

router.get('/mongo_data', async (req, res) => {
  try {
    const all_customers = await Customer.find();
    res.json(all_customers);
  } catch (error) {
    res.json({ message: '❌ Failed to fetch users', error });
  }
});

export default router
import express from 'express';
import Customer from '../models/customer.js';

const router = express.Router();

router.post('/search', async (req, res) => {
  try {
    const result = await Customer.findOne({ customer_id: req.body.value });
    if (result) {
      res.json(result);
    } else {
      res.json({ message: '❌ User not found' });
    }
  } catch (error) {
    res.json({ message: '❌ Server error during deletion', error });
  }
});

export default router
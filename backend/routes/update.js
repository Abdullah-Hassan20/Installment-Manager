import express from 'express';
import Customer from '../models/customer.js';

const router = express.Router();

router.put('/update/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );

    if (updatedCustomer) {
      res.json({ message: `✅ ${updatedCustomer.customer_name} data updated successfully`});
    } else {
      res.status(404).json({ message: '❌ Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: '❌ Server error during update', error });
  }
});

export default router

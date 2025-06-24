import express from 'express';
import Customer from '../models/customer.js';

const router = express.Router();

router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await Customer.findOneAndDelete(req.params.id);
    if (result) {
      res.json({ message: '✅ User deleted successfully' });
    } else {
      res.status(404).json({ message: '❌ User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: '❌ Server error during deletion', error });
  }
});

export default router
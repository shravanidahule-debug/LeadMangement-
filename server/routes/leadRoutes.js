const express = require('express');
const router = express.Router();

const Lead = require('../models/lead');

// GET all leads
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new lead
router.post('/', async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        const savedLead = await newLead.save();

        res.status(201).json(savedLead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE a lead
router.put('/:id', async (req, res) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedLead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        res.status(200).json(updatedLead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a lead
router.delete('/:id', async (req, res) => {
    try {
        const deletedLead = await Lead.findByIdAndDelete(req.params.id);

        if (!deletedLead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        res.status(200).json({ message: 'Lead deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
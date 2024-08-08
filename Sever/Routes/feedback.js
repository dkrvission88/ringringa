const express = require('express');
const router = express.Router();
const Feedback = require('../Modules/feedBackModel');

// Submit feedback
router.post('/', async (req, res) => {
    const { user, conference, comment } = req.body;
    const newFeedback = new Feedback({ user, conference, comment });
    await newFeedback.save();
    res.status(201).json(newFeedback);
});

module.exports = router;

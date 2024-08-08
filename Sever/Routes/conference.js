const express = require('express');
const router = express.Router();
const Conference = require('../Modules/conferenceModel');

// Get all conferences
router.get('/', async (req, res) => {
    const conferences = await Conference.find();
    res.json(conferences);
});

// Create a new conference
router.post('/', async (req, res) => {
    const { title, description, schedule } = req.body;
    const newConference = new Conference({ title, description, schedule });
    await newConference.save();
    res.json(newConference);
});

// Register user to a conference
router.post('/:id/register', async (req, res) => {
    const { userId } = req.body;
    const conference = await Conference.findById(req.params.id);
    conference.participants.push(userId);
    await conference.save();
    res.json(conference);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../Modules/userModel');
const bcrypt = require('bcryptjs');

// Register a new user
router.post('/register',async(req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({result:"Done",message:"Data is Saved!!!",data:newUser});
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }
    res.status(200).json(user);
});



router.get('/get', async (req, res) => {
    const conferences = await User.find();
    res.json(conferences);
});




module.exports = router;

const mongoose = require('mongoose');

const ConferenceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    schedule: { type: Date, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Conference', ConferenceSchema);

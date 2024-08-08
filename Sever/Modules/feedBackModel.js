const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    user: { type: String,  required: true },
    conference: { type: String, required: true },
    comment: { type: String, required: true}
});

module.exports = mongoose.model('Feedback', FeedbackSchema);

const express = require('express');

const cors = require('cors');
require('dotenv').config()
require('./DB/db')


const app = express();
app.use(express.json());
app.use(cors());

const conferenceR = require('./Routes/conference');
const userR = require('./Routes/users');
const feedbackR = require('./Routes/feedback');

app.use('/api/conference', conferenceR);
app.use('/api/user', userR);
app.use('/api/feedback', feedbackR);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




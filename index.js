require('dotenv').config();
require('./db/conn');
const cors = require('cors');
const express = require('express');
const path = require('path');
const port = 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./routes/userRouter');
const locationRouter = require('./routes/locationRouter');
app.use('/user', userRouter);
app.use('/location', locationRouter);

app.listen(port, () => {
    console.log('Listening ...');
});

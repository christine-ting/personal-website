require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const sendEmail = require('./sendEmail');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.post('/api/form', sendEmail)

app.listen(port, () => console.log(`personal website listening at http://localhost:${port}`));

app.use('/', express.static(path.join(__dirname, '../public')));

const express = require('express');
const app = express();
const port = 5000;
const db = require('./data-base');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.listen(port, () => console.log(`listening on port ${port}!`));

const doggySitters = require('./routes/doggySitters');

app
    .get('/api/ping', (req, res) => res.json({ message: 'pong!' }))
    .use('/api/doggySitters', doggySitters);




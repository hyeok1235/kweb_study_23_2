const express = require('express');
const router = require('./router');

const app = express(); // Creating App
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!')); // req = request, res = response

app.use('/', router);
app.use('/1', authrouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
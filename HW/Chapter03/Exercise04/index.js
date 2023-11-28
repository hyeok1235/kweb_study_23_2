const express = require('express');
const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('login.pug'));

app.post('/post', (req, res) => {
    res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req, res) => res.redirect('/factorial/'+`${req.query.number}`));

app.get('/factorial/:number', (req, res) => {
    let ret_val = 1;
    for (let i = 1; i <= req.params.number; i++) {
        ret_val *= i;
    }
    res.send(`${ret_val}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
const express = require('express');
const app = express();
const port = 3000;


const { runQuery } = require('./database'); 


const getNameAndFare = async (uid) => {
    const sql = 'SELECT `users`.`name` AS name, ' + 
        'Sum(Round(`trains`.`distance` * `types`.`fare_rate` / 1000, -2)) AS fare\n' + 
        'FROM `tickets`\n' + 
        'INNER JOIN `users` ON `users`.`id` = `tickets`.`user`\n' + 
        'INNER JOIN `trains` ON `trains`.`id` = `tickets`.`train`\n' + 
        'INNER JOIN `types` ON `types`.`id` = `trains`.`type`\n' + 
        'WHERE `users`.`id` = ?';
    const results = await runQuery(sql, [uid]); 
    return results[0];
};

const checkTrainFull = async (tid) => {
    const sql = "SELECT `types`.`max_seats` AS `max_seat`, \n" + 
    "COUNT(`tickets`.`user`) AS `cur_seat`\n" + 
    "FROM `trains`\n" + 
    "INNER JOIN `types` ON `trains`.`type` = `types`.`id`\n" + 
    "INNER JOIN `tickets` ON `trains`.`id` = `tickets`.`train`\n" + 
    "WHERE `trains`.`id` = ?"; 
    const results = await runQuery(sql, [tid]);
    return results[0];
};

app.get('/fare', async (req, res) => {
    try {
        const Name_Fare = await getNameAndFare(req.query['uid']);
        const {name, fare} = Name_Fare
        res.send(`Total fare of ${name} is ${fare} KRW`);
    } catch(err) {
        console.error(err); 
        return res.sendStatus(500);
    }
});

app.get(`/train/status`, async (req, res) => {
    try {
        const train_Max_Cur = await checkTrainFull(req.query['tid']);
        const {max_seat, cur_seat} = train_Max_Cur;
        if(max_seat == cur_seat) {
            res.send(`Train ${req.query['tid']} is sold out`);
        } else {
            res.send(`Train ${req.query['tid']} is not sold out`);
        }
    } catch(err) {
        console.error(err); 
        return res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
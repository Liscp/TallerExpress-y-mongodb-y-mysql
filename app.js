const express = require('express');
const mysql = require('mongoose');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

const BooksMysql = require('./models/bookMysql');

bookRouter.route('/booksMysql/find')
    .get((req, res) => {
        const { query } = req;
        BooksMysql.findOne({where: query}).then(people => {
            return res.json(people)
        });
    })
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Bienvenidos al Yavirac');
});

app.listen(port,() =>{
    console.log(`Runing on port ${port}`);
});

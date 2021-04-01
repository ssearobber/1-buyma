const { googleSheet } = require('./targetURLs/googleSheet');
const express = require('express');
// const app = express();
const schedule = require('node-schedule');
require('dotenv').config(); 


// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   googleSheet();
// })

// const port = process.env.PORT || 5050;
// app.listen(port , () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


schedule.scheduleJob(process.env.SCHELDULE_TIME || schelduleTime, function () {
    console.log("매크로 실행");
    googleSheet();
});
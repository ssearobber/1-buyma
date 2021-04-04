const { googleSheet } = require('./targetURLs/googleSheet');
require('dotenv').config(); 
// const express = require('express');
// const app = express();
// const schedule = require('node-schedule');

googleSheet();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   googleSheet();
// })

// const port = process.env.PORT || 5050;
// app.listen(port , () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// schedule.scheduleJob(process.env.SCHELDULE_TIME || schelduleTime, async function () {
//     console.log("매크로 실행");
//     await googleSheet();
// });
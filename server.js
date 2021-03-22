const { googleSheet } = require('./targetURLs/googleSheet');
const schedule = require('node-schedule');
require('dotenv').config(); 

googleSheet();
// schedule.scheduleJob(process.env.SCHELDULE_TIME || schelduleTime, function () {
//   googleSheet();
// });
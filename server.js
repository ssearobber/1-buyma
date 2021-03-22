const { googleSheet } = require('./targetURLs/googleSheet');
const schedule = require('node-schedule');
require('dotenv').config(); 

// 매일 아침 6시 갱신
// schedule.scheduleJob('0 0 6 * * *', function () {
//   googleSheet();
// });
// googleSheet();
schedule.scheduleJob(process.env.SCHELDULE_TIME || schelduleTime, function () {
  googleSheet();
});
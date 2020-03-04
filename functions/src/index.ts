import * as functions from 'firebase-functions';
import {openWeatherKey} from './keys';
import {IncomingMessage} from 'http';

const cors = require('cors')({origin: true});
const http = require('http'); //node http client
const get = require('simple-get');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.getFiveDayForecastByZip = functions.https.onRequest((requ, resp) => {

  cors(requ, resp, () => {
    // res.send('hello ');
    // const ipt = '136.35.223.58';
    const ipt = requ.query.ip;

    const ip = `http://ip-api.com/json/${ipt}`;

    const opts = {
      method: 'GET',
      url: ip,
      json: true,
      timeout: 2000
    };


    get.concat(opts,  (err: any, res: any, data: any)  => {
      if(err) {
        throw  err;
      }
      // ret = data;
      resp.send(data);
    });
  });


});

const https = require('https');

const darksky_url = `https://api.darksky.net/forecast`;
const darksky_token = `6c479e46ec2f1b769249061d8c409a59`;
const latitude = 40;
const longitude = -75;
const url = `${darksky_url}/${darksky_token}/${latitude},${longitude}?units=si`;

const request = https.request(url, response => {
  let data = '';

  response.on('data', chunk => data += chunk.toString());

  response.on('end', () => console.log(JSON.parse(data)));

});

request.on('error', error => console.log('An Error', error));

request.end();
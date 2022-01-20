const request = require('request');
const fs = require('fs')
const content = 'Some content!'

request('https://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

fs.writeFile('/Users/alparslanbahadirusta/lighthouse/w2/d3-net/page-fetcher/fetcher.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
});
});

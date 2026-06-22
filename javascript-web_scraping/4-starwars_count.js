#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const wedgeUrl = 'https://swapi-api.alx-tools.com/api/people/18/';
    let count = 0;
    for (const film of data.results) {
      if (film.characters.includes(wedgeUrl)) {
        count++;
      }
    }
    console.log(count);
  }
});

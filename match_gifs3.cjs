const fs = require('fs');
const https = require('https');

const queries = [
  "lever seated fly",
  "lat pulldown",
  "seated row",
  "one arm row",
  "back extension"
];

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    queries.forEach(query => {
      const match = exercises.find(e => e.name.toLowerCase().includes(query.toLowerCase()));
      if (match) {
        console.log(`${query} => https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/${match.image.replace('images/','').replace('.jpg','.gif')}`);
      } else {
        console.log(`${query} => not found`);
      }
    });
  });
});

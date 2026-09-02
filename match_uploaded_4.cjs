const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    const matches = exercises.filter(e => e.name.toLowerCase().includes('cable') && e.name.toLowerCase().includes('one arm') && (e.name.toLowerCase().includes('row') || e.name.toLowerCase().includes('pulldown')));
    matches.forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));
  });
});

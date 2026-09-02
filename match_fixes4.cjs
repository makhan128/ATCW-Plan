const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    const smith = exercises.filter(e => e.name.toLowerCase().includes('smith') && e.name.toLowerCase().includes('shoulder'));
    smith.forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));

    const press = exercises.filter(e => e.name.toLowerCase().includes('smith') && e.name.toLowerCase().includes('press') && !e.name.toLowerCase().includes('bench'));
    press.forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));
  });
});

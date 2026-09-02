const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    
    console.log('\n--- Lat Pulldown ---');
    const latMatches = exercises.filter(e => e.name.toLowerCase().includes('lat pulldown') || (e.name.toLowerCase().includes('pulldown') && e.name.toLowerCase().includes('front')));
    latMatches.forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));

    console.log('\n--- Shoulder Press Machine ---');
    const shoulderMatches = exercises.filter(e => e.name.toLowerCase().includes('press') && e.name.toLowerCase().includes('shoulder') && (e.name.toLowerCase().includes('machine') || e.name.toLowerCase().includes('lever')));
    shoulderMatches.forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));
  });
});

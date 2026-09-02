const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    const searchTerms = [
      "cable lat pulldown", "dumbbell hammer curl"
    ];
    
    searchTerms.forEach(term => {
      console.log(`\n--- Matches for "${term}" ---`);
      const matches = exercises.filter(e => e.name.toLowerCase() === term.toLowerCase() || e.name.toLowerCase().includes(term.toLowerCase()));
      matches.slice(0, 5).forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));
    });
  });
});

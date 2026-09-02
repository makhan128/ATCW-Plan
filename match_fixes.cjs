const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    const searchTerms = [
      "shoulder press", "reverse curl", "leg curl", "lat pulldown"
    ];
    
    searchTerms.forEach(term => {
      console.log(`\n--- Matches for "${term}" ---`);
      const matches = exercises.filter(e => e.name.toLowerCase().includes(term.toLowerCase()));
      matches.forEach(m => {
        if (
            (term === 'shoulder press' && m.name.toLowerCase().includes('lever') && !m.name.toLowerCase().includes('one arm')) ||
            (term === 'shoulder press' && m.name.toLowerCase().includes('machine')) ||
            (term === 'reverse curl' && m.name.toLowerCase().includes('dumbbell')) ||
            (term === 'leg curl' && m.name.toLowerCase().includes('lying')) ||
            (term === 'lat pulldown' && m.name.toLowerCase().includes('cable') && !m.name.toLowerCase().includes('standing') && !m.name.toLowerCase().includes('one arm'))
        ) {
          console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`);
        }
      });
    });
  });
});

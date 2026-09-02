const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const exercises = JSON.parse(data);
    const searchTerms = [
      "shoulder press", "lateral raise", "rear delt", "reverse fly", 
      "chest press", "bench press", "fly", "chest", "leg press", "leg extension", "leg curl",
      "pulldown", "row"
    ];
    
    searchTerms.forEach(term => {
      console.log(`\n--- Matches for "${term}" ---`);
      const matches = exercises.filter(e => e.name.toLowerCase().includes(term.toLowerCase()) && (e.name.toLowerCase().includes('machine') || e.name.toLowerCase().includes('lever') || e.name.toLowerCase().includes('smith') || e.name.toLowerCase().includes('dumbbell')));
      matches.slice(0, 10).forEach(m => console.log(`${m.name} => ${m.image.replace('images/','').replace('.jpg','.gif')}`));
    });
  });
});

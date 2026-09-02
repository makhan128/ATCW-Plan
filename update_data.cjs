const fs = require('fs');

let content = fs.readFileSync('/app/applet/src/data.ts', 'utf8');

const replacements = [
  { old: "searchQuery: 'how to do machine shoulder press perfect form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0997-peAeMR3.gif'" },
  { old: "searchQuery: 'machine lateral side raises form tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0977-sTg7iys.gif'" },
  { old: "searchQuery: 'rear delt fly machine vs rope facepulls form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0337-L2V5Nan.gif'" },
  { old: "searchQuery: 'dumbbell bicep curl proper form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/1651-1VpF8db.gif'" },
  { old: "searchQuery: 'dumbbell hammer curls tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0165-HPlPoQA.gif'" },
  { old: "searchQuery: 'cable straight bar tricep pushdown form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2406-ThKP69G.gif'" },
  { old: "searchQuery: 'single arm cable tricep extension tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0231-sYCcnon.gif'" },
  { old: "searchQuery: 'dumbbell reverse curls for forearms'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0080-xNrS20v.gif'" },
  { old: "searchQuery: 'horizontal leg press machine correct form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2287-V07qpXy.gif'" },
  { old: "searchQuery: 'machine leg extensions proper form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0585-my33uHU.gif'" },
  { old: "searchQuery: 'machine leg curls form tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/3235-zHEpuuc.gif'" },
  { old: "searchQuery: 'calf raises proper form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0999-9JprnPh.gif'" },
  { old: "searchQuery: 'machine chest press proper form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0989-c16nYGA.gif'" },
  { old: "searchQuery: 'dumbbell incline bench press correct form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0047-3TZduzM.gif'" },
  { old: "searchQuery: 'machine chest fly pec deck tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0596-v3xmPAR.gif'" },
  { old: "searchQuery: 'lat pulldown proper form tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2330-LEprlgG.gif'" },
  { old: "searchQuery: 'seated cable row correct form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0990-DKBwJrL.gif'" },
  { old: "searchQuery: 'single arm seated cable row form'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/3156-v2DfH14.gif'" },
  { old: "searchQuery: 'back extensions lower back form tutorial'", new: "gifUrl: 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/1314-qLpO4vV.gif'" }
];

replacements.forEach(r => {
  content = content.replace(r.old, r.new);
});

fs.writeFileSync('/app/applet/src/data.ts', content, 'utf8');

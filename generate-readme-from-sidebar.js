const fs = require('fs');

const sidebarPath = './docs/_sidebar.md';
const readmePath = './docs/README.md';

const sidebar = fs.readFileSync(sidebarPath, 'utf8');

let output = `# Welcome to Cluster NestJS project

# 📦 Get Started

Welcome! Explore all available modules below:

---

`;

const lines = sidebar.split('\n');

for (const line of lines) {
    if (line.startsWith('- ')) {
        output += `## ${line.replace('- ', '')}\n`;
    } else if (line.trim().startsWith('- ')) {
        output += `${line.trim()}\n`;
    }
}

fs.writeFileSync(readmePath, output.trim() + '\n');
console.log('✅ README.md updated from _sidebar.md');

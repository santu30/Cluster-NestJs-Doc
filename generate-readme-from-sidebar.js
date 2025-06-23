const fs = require('fs');

const sidebarPath = './docs/_sidebar.md';
const readmePath = './docs/README.md';

const header = `# Welcome to Cluster NestJS project

## 📦 Get Started

Welcome! Explore all available modules below:

---
`;

const sidebar = fs.readFileSync(sidebarPath, 'utf8');

fs.writeFileSync(readmePath, header + '\n' + sidebar.trim() + '\n');

console.log('✅ README.md updated with raw _sidebar.md content');

// tools/audit_codebase.js
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
const js = fs.readFileSync(path.join(rootDir, 'script.js'), 'utf-8');
const css = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf-8');

console.log('==============================================');
console.log('1. AUDITING DOM IDs BETWEEN JS AND HTML');
console.log('==============================================');

const idRegex = /getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const jsIds = new Set();
while ((match = idRegex.exec(js)) !== null) {
  jsIds.add(match[1]);
}

const missingIds = [];
jsIds.forEach((id) => {
  const pattern = new RegExp(`id=["']${id}["']`);
  if (!pattern.test(html)) {
    missingIds.push(id);
  }
});

console.log(`Total getElementById queries in JS: ${jsIds.size}`);
if (missingIds.length > 0) {
  console.error('ERROR: Missing IDs in HTML:', missingIds);
} else {
  console.log('✓ All getElementById targets exist in index.html!');
}

console.log('\n==============================================');
console.log('2. AUDITING HTML BUTTONS & INTERACTIVE ELEMENTS');
console.log('==============================================');

// Extract all button and select IDs in HTML
const htmlBtnRegex = /<(?:button|select|dialog)[^>]+id=["']([^'"]+)["']/g;
const htmlInteractive = new Set();
while ((match = htmlBtnRegex.exec(html)) !== null) {
  htmlInteractive.add(match[1]);
}

console.log(`Total interactive IDs in HTML: ${htmlInteractive.size}`);
htmlInteractive.forEach((id) => {
  const isReferenced = js.includes(id);
  if (!isReferenced) {
    console.warn(`Note: HTML element #${id} is not directly referenced in script.js by ID.`);
  }
});

console.log('\n==============================================');
console.log('3. AUDITING CSS CLASSES BETWEEN HTML AND CSS');
console.log('==============================================');

const classAttrRegex = /class=["']([^'"]+)["']/g;
const htmlClasses = new Set();
while ((match = classAttrRegex.exec(html)) !== null) {
  match[1].split(/\s+/).forEach((cls) => {
    if (cls.trim()) htmlClasses.add(cls.trim());
  });
}

const missingCss = [];
htmlClasses.forEach((cls) => {
  // Check if class exists in CSS or dynamically in JS
  if (!css.includes('.' + cls) && !js.includes(cls)) {
    missingCss.push(cls);
  }
});

console.log(`Total HTML classes: ${htmlClasses.size}`);
if (missingCss.length > 0) {
  console.log(`Classes not found in CSS (or generated in JS):`, missingCss);
} else {
  console.log('✓ All HTML classes exist in CSS or JS!');
}

console.log('\nAudit complete.');

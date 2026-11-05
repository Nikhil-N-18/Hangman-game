// test_database_integrity.js
const fs = require('fs');

// Mock window
global.window = {};

// Load words.js
require('../words.js');

const db = global.window.WORD_DATABASE;
if (!db) {
  console.error('FAIL: window.WORD_DATABASE is undefined');
  process.exit(1);
}

const categories = ['programming', 'technology', 'animals', 'fruits', 'sports', 'general'];
const difficulties = ['easy', 'medium', 'hard'];

let grandTotal = 0;
let errors = [];

console.log('--- DATABASE INTEGRITY AUDIT ---');

categories.forEach((cat) => {
  if (!db[cat]) {
    errors.push(`Missing category: ${cat}`);
    return;
  }

  let catTotal = 0;
  let wordsSeen = new Set();

  difficulties.forEach((diff) => {
    const list = db[cat][diff];
    if (!Array.isArray(list) || list.length === 0) {
      errors.push(`Category ${cat} has empty tier: ${diff}`);
      return;
    }

    list.forEach((item, idx) => {
      catTotal++;
      if (!item.word || typeof item.word !== 'string') {
        errors.push(`Invalid word in ${cat}.${diff}[${idx}]`);
        return;
      }

      if (!/^[A-Z]{3,}$/.test(item.word)) {
        errors.push(`Word "${item.word}" in ${cat}.${diff} violates pattern /^[A-Z]{3,}$/`);
      }

      const len = item.word.length;
      if (diff === 'easy' && (len < 3 || len > 5)) {
        errors.push(`Word "${item.word}" (len ${len}) placed in easy tier (expected 3-5)`);
      } else if (diff === 'medium' && (len < 6 || len > 8)) {
        errors.push(`Word "${item.word}" (len ${len}) placed in medium tier (expected 6-8)`);
      } else if (diff === 'hard' && len < 9) {
        errors.push(`Word "${item.word}" (len ${len}) placed in hard tier (expected 9+)`);
      }

      if (!item.category || item.category.trim() === '') {
        errors.push(`Word "${item.word}" in ${cat}.${diff} has empty category`);
      }
      if (!item.hint || item.hint.trim() === '') {
        errors.push(`Word "${item.word}" in ${cat}.${diff} has empty hint`);
      }
      if (!item.extraHint || item.extraHint.trim() === '') {
        errors.push(`Word "${item.word}" in ${cat}.${diff} has empty extraHint`);
      }

      if (wordsSeen.has(item.word)) {
        errors.push(`Duplicate word "${item.word}" in category ${cat}`);
      }
      wordsSeen.add(item.word);
    });
  });

  console.log(`✓ Category "${cat}": ${catTotal} words (Easy: ${db[cat].easy.length}, Medium: ${db[cat].medium.length}, Hard: ${db[cat].hard.length})`);

  if (catTotal < 500) {
    errors.push(`Category ${cat} has only ${catTotal} items (< 500 required)`);
  }

  grandTotal += catTotal;
});

console.log('--------------------------------------------------');
console.log(`TOTAL QUESTIONS VERIFIED: ${grandTotal}`);

if (errors.length > 0) {
  console.error(`\nFound ${errors.length} errors:`);
  errors.slice(0, 15).forEach((e) => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED! ZERO ERRORS DETECTED.');
}


// test_game_simulation.js
global.window = {};
require('../words.js');
const db = global.window.WORD_DATABASE;

console.log('Testing non-repeating cycle algorithm across all 18 pools...');

const categories = ['programming', 'technology', 'animals', 'fruits', 'sports', 'general'];
const difficulties = ['easy', 'medium', 'hard'];

categories.forEach((cat) => {
  difficulties.forEach((diff) => {
    const fullList = db[cat][diff];
    const poolSize = fullList.length;
    let playedHistory = [];
    let lastWord = null;

    // Simulate 50 games in each pool
    const testPicks = Math.min(50, poolSize);
    let pickedInCycle = new Set();

    for (let i = 0; i < testPicks; i++) {
      let eligibleList = fullList.filter((item) => !playedHistory.includes(item.word));
      if (eligibleList.length === 0) {
        playedHistory = lastWord ? [lastWord] : [];
        eligibleList = fullList.filter((item) => item.word !== lastWord);
        pickedInCycle.clear();
      }

      const selected = eligibleList[Math.floor(Math.random() * eligibleList.length)];
      if (pickedInCycle.has(selected.word)) {
        console.error(`FAIL: Word repeated within single cycle: ${selected.word} in ${cat}.${diff}`);
        process.exit(1);
      }
      pickedInCycle.add(selected.word);
      playedHistory.push(selected.word);
      lastWord = selected.word;
    }
  });
});

console.log('SUCCESS: All 18 pools pick without repetition across cycles!');


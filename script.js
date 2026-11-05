/**
 * Word Guessing Game - Premium 3D Glassmorphism Game Engine
 * Featuring Smart Progressive Hint System, Difficulty-Based Assistance,
 * and Comprehensive Non-Repeating Word Knowledge Bank.
 * HTML5, CSS3, Vanilla JavaScript (No Frameworks, No External APIs)
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Sound Synthesizer Engine (Web Audio API - Zero External Dependencies)
     ========================================================================== */
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = true; // Sound disabled/muted by default
      this.loadPreference();
    }

    loadPreference() {
      try {
        const saved = localStorage.getItem('wordGame_soundMuted');
        if (saved !== null) {
          this.isMuted = JSON.parse(saved);
        } else {
          this.isMuted = true;
        }
      } catch (e) {
        this.isMuted = true;
      }
    }

    savePreference() {
      try {
        localStorage.setItem('wordGame_soundMuted', JSON.stringify(this.isMuted));
      } catch (e) {
        // Fallback
      }
    }

    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.initContext();
      this.isMuted = !this.isMuted;
      this.savePreference();
      if (!this.isMuted) {
        this.playPop();
      }
      return this.isMuted;
    }

    playPop() {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    }

    playCorrect() {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [
        { freq: 523.25, time: 0 },
        { freq: 783.99, time: 0.09 }
      ].forEach((note) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.freq, now + note.time);

        gain.gain.setValueAtTime(0.2, now + note.time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.time + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + note.time);
        osc.stop(now + note.time + 0.3);
      });
    }

    playIncorrect() {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.23);
    }

    playHint() {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [659.25, 830.61, 987.77, 1318.51];
      freqs.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.18, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.26);
      });
    }

    playWin() {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const chords = [
        { freq: 523.25, time: 0, dur: 0.15 },
        { freq: 659.25, time: 0.12, dur: 0.15 },
        { freq: 783.99, time: 0.24, dur: 0.2 },
        { freq: 1046.50, time: 0.42, dur: 0.6 }
      ];

      chords.forEach((c) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(c.freq, now + c.time);

        gain.gain.setValueAtTime(0.24, now + c.time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + c.time + c.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + c.time);
        osc.stop(now + c.time + c.dur + 0.05);
      });
    }

    playLose() {
      if (this.isMuted) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [392.00, 349.23, 311.13, 261.63];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.14);

        gain.gain.setValueAtTime(0.18, now + i * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.14 + 0.26);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.14);
        osc.stop(now + i * 0.14 + 0.28);
      });
    }
  }

  /* ==========================================================================
     2. Master Word Database Reference (3,123+ Questions, Minimum 500 Per Category)
     ========================================================================== */
  const WORD_DATABASE = (typeof window !== 'undefined' && window.WORD_DATABASE) ? window.WORD_DATABASE : {
    programming: { easy: [], medium: [], hard: [] },
    technology: { easy: [], medium: [], hard: [] },
    animals: { easy: [], medium: [], hard: [] },
    fruits: { easy: [], medium: [], hard: [] },
    sports: { easy: [], medium: [], hard: [] },
    general: { easy: [], medium: [], hard: [] }
  };

  /* ==========================================================================
     3. WordGame Core Class with Non-Repeating Cycle Bag & Smart Hint Hub
     ========================================================================== */
  class WordGame {
    constructor() {
      // Audio
      this.sound = new SoundEngine();

      // Core Game State
      this.score = 0;
      this.attempts = 6;
      this.maxAttempts = 6;
      this.currentCategory = 'programming';
      this.currentDifficulty = 'medium';
      this.currentWord = '';
      this.currentCategoryName = '';
      this.currentHint = '';
      this.currentExtraHint = '';
      this.revealedIndices = new Set();
      this.guessedLetters = new Set();
      this.roundOver = false;
      this.lastWordUsed = '';

      // Exhaustive Bag History (Guarantees zero repetitions until full list is played)
      this.playedHistory = this.loadPlayedHistory();

      // Progressive Hint Tracking
      this.incorrectGuessesThisRound = 0;
      this.hintsUsedCount = 0;
      this.autoAssistTriggered = false;

      // Modal / Round transition timer
      this.endRoundTimeout = null;

      // Toast Timer
      this.toastTimeout = null;

      // Statistics
      this.stats = {
        played: 0,
        wins: 0,
        losses: 0,
        currentStreak: 0,
        bestStreak: 0,
        bestScore: 0
      };

      // Particle & Confetti Canvas
      this.particlesCanvas = null;
      this.particlesCtx = null;
      this.confettiCanvas = null;
      this.confettiCtx = null;
      this.confettiPieces = [];
      this.isConfettiActive = false;

      this.dom = {};
      this.init();
    }

    init() {
      this.cacheDom();
      if (this.dom.categorySelect && this.dom.categorySelect.value) {
        this.currentCategory = this.dom.categorySelect.value;
      }
      if (this.dom.difficultySelect && this.dom.difficultySelect.value) {
        this.currentDifficulty = this.dom.difficultySelect.value;
      }
      this.loadStats();
      this.initParticles();
      this.initConfetti();
      this.bindEvents();
      this.updateSoundIcon();
      this.startNewGame();
    }

    /* --------------------------------------------------------------------------
       Exhaustive Bag / History Persistence
       -------------------------------------------------------------------------- */
    loadPlayedHistory() {
      try {
        const saved = localStorage.getItem('wordGame_playedHistory');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        // Fallback
      }
      return {};
    }

    savePlayedHistory() {
      try {
        localStorage.setItem('wordGame_playedHistory', JSON.stringify(this.playedHistory));
      } catch (e) {
        // Fallback
      }
    }

    cacheDom() {
      // Top Controls
      this.dom.categorySelect = document.getElementById('categorySelect');
      this.dom.difficultySelect = document.getElementById('difficultySelect');
      this.dom.soundToggleBtn = document.getElementById('soundToggleBtn');
      this.dom.soundIconOn = this.dom.soundToggleBtn.querySelector('.sound-icon-on');
      this.dom.soundIconOff = this.dom.soundToggleBtn.querySelector('.sound-icon-off');
      this.dom.statsModalBtn = document.getElementById('statsModalBtn');
      this.dom.resetScoreBtn = document.getElementById('resetScoreBtn');

      // Dashboard
      this.dom.scoreDisplay = document.getElementById('scoreDisplay');
      this.dom.scoreDeltaBadge = document.getElementById('scoreDeltaBadge');
      this.dom.attemptsText = document.getElementById('attemptsText');
      this.dom.attemptsProgressBar = document.getElementById('attemptsProgressBar');

      // Hint Section
      this.dom.categoryBadge = document.getElementById('categoryBadge');
      this.dom.hintText = document.getElementById('hintText');
      this.dom.extraClueQuickBtn = document.getElementById('extraClueQuickBtn');
      this.dom.extraClueBox = document.getElementById('extraClueBox');
      this.dom.extraHintText = document.getElementById('extraHintText');

      // Word Display & Counters
      this.dom.wordContainer = document.getElementById('wordContainer');
      this.dom.hintRevealedCount = document.getElementById('hintRevealedCount');
      this.dom.hintTotalCount = document.getElementById('hintTotalCount');
      this.dom.autoAssistPill = document.getElementById('autoAssistPill');

      // Action Buttons
      this.dom.hintBtn = document.getElementById('hintBtn');
      this.dom.hintBtnBadge = document.getElementById('hintBtnBadge');
      this.dom.needHelpBtn = document.getElementById('needHelpBtn');
      this.dom.newGameBtn = document.getElementById('newGameBtn');
      this.dom.keyboardContainer = document.getElementById('keyboardContainer');

      // Smart Hint Hub Modal Elements
      this.dom.hintsModal = document.getElementById('hintsModal');
      this.dom.hintsCloseBtn = document.getElementById('hintsCloseBtn');
      this.dom.hintModalScoreVal = document.getElementById('hintModalScoreVal');
      this.dom.hintFeedbackAlert = document.getElementById('hintFeedbackAlert');
      this.dom.hintFeedbackText = document.getElementById('hintFeedbackText');
      this.dom.btnHintFreeClue = document.getElementById('btnHintFreeClue');
      this.dom.btnHintRevealOne = document.getElementById('btnHintRevealOne');
      this.dom.btnHintRevealTwo = document.getElementById('btnHintRevealTwo');
      this.dom.btnHintRevealFirst = document.getElementById('btnHintRevealFirst');

      // Toast Notification
      this.dom.hintToast = document.getElementById('hintToast');
      this.dom.toastIcon = document.getElementById('toastIcon');
      this.dom.toastTitle = document.getElementById('toastTitle');
      this.dom.toastMessage = document.getElementById('toastMessage');

      // Victory & Game Over Modals
      this.dom.victoryModal = document.getElementById('victoryModal');
      this.dom.victoryWordDisplay = document.getElementById('victoryWordDisplay');
      this.dom.victoryScoreTotal = document.getElementById('victoryScoreTotal');
      this.dom.victoryAttemptsLeft = document.getElementById('victoryAttemptsLeft');
      this.dom.victoryPlayAgainBtn = document.getElementById('victoryPlayAgainBtn');

      this.dom.gameOverModal = document.getElementById('gameOverModal');
      this.dom.gameOverWordDisplay = document.getElementById('gameOverWordDisplay');
      this.dom.gameOverTryAgainBtn = document.getElementById('gameOverTryAgainBtn');

      // Stats Modal
      this.dom.statsModal = document.getElementById('statsModal');
      this.dom.statsCloseBtn = document.getElementById('statsCloseBtn');
      this.dom.statsDismissBtn = document.getElementById('statsDismissBtn');
      this.dom.statPlayed = document.getElementById('statPlayed');
      this.dom.statWins = document.getElementById('statWins');
      this.dom.statWinPct = document.getElementById('statWinPct');
      this.dom.statCurrentStreak = document.getElementById('statCurrentStreak');
      this.dom.statBestStreak = document.getElementById('statBestStreak');
      this.dom.statHighScore = document.getElementById('statHighScore');
    }

    loadStats() {
      try {
        const saved = localStorage.getItem('wordGame_playerStats');
        if (saved) {
          this.stats = Object.assign(this.stats, JSON.parse(saved));
        }
      } catch (e) {
        // Fallback
      }
    }

    saveStats() {
      try {
        localStorage.setItem('wordGame_playerStats', JSON.stringify(this.stats));
      } catch (e) {
        // Fallback
      }
    }

    updateStatsDisplay() {
      const winPct = this.stats.played > 0
        ? Math.round((this.stats.wins / this.stats.played) * 100)
        : 0;

      this.dom.statPlayed.textContent = this.stats.played;
      this.dom.statWins.textContent = this.stats.wins;
      this.dom.statWinPct.textContent = `${winPct}%`;
      this.dom.statCurrentStreak.textContent = this.stats.currentStreak;
      this.dom.statBestStreak.textContent = this.stats.bestStreak;
      this.dom.statHighScore.textContent = this.stats.bestScore;
    }

    bindEvents() {
      // Category & Difficulty Selectors
      this.dom.categorySelect.addEventListener('change', (e) => {
        this.currentCategory = e.target.value;
        this.sound.playPop();
        this.startNewGame();
      });

      this.dom.difficultySelect.addEventListener('change', (e) => {
        this.currentDifficulty = e.target.value;
        this.sound.playPop();
        this.startNewGame();
      });

      // Sound Toggle
      this.dom.soundToggleBtn.addEventListener('click', () => {
        this.sound.toggleMute();
        this.updateSoundIcon();
      });

      // Stats Modal
      this.dom.statsModalBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.updateStatsDisplay();
        this.openModal(this.dom.statsModal);
      });

      this.dom.statsCloseBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.closeModal(this.dom.statsModal);
      });

      this.dom.statsDismissBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.closeModal(this.dom.statsModal);
      });

      // Reset Score Button
      this.dom.resetScoreBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.resetScore();
      });

      // Main Hint Button
      this.dom.hintBtn.addEventListener('click', () => {
        this.handleQuickHintClick();
      });

      // "Need Help?" Button
      this.dom.needHelpBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.openHintHub();
      });

      // Quick Extra Clue Pill in Hint Card
      this.dom.extraClueQuickBtn.addEventListener('click', () => {
        this.useFreeClue();
      });

      // Smart Hint Hub Modal Actions
      this.dom.hintsCloseBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.closeModal(this.dom.hintsModal);
      });

      this.dom.btnHintFreeClue.addEventListener('click', () => {
        this.useFreeClue();
        this.closeModal(this.dom.hintsModal);
      });

      this.dom.btnHintRevealOne.addEventListener('click', () => {
        this.useRevealOneLetterHint();
      });

      this.dom.btnHintRevealTwo.addEventListener('click', () => {
        this.useRevealTwoLettersHint();
      });

      this.dom.btnHintRevealFirst.addEventListener('click', () => {
        this.useRevealFirstLetterHint();
      });

      // New Game Button
      this.dom.newGameBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.startNewGame();
      });

      // Modal Actions
      this.dom.victoryPlayAgainBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.closeModal(this.dom.victoryModal);
        this.startNewGame();
      });

      this.dom.gameOverTryAgainBtn.addEventListener('click', () => {
        this.sound.playPop();
        this.closeModal(this.dom.gameOverModal);
        this.startNewGame();
      });

      // Backdrop dismiss
      [this.dom.victoryModal, this.dom.gameOverModal, this.dom.statsModal, this.dom.hintsModal].forEach((modal) => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            this.sound.playPop();
            this.closeModal(modal);
          }
        });
      });

      // Physical Keyboard Input
      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

        if (e.key === 'Escape') {
          if (this.dom.hintsModal && this.dom.hintsModal.open) this.closeModal(this.dom.hintsModal);
          if (this.dom.statsModal && this.dom.statsModal.open) this.closeModal(this.dom.statsModal);
          return;
        }

        // Do not trigger letters while viewing modal dialogs
        if (this.isAnyModalOpen()) return;

        const letter = e.key.toUpperCase();
        if (/^[A-Z]$/.test(letter)) {
          this.handleGuess(letter);
        }
      });

      window.addEventListener('resize', () => {
        this.resizeCanvases();
      });
    }

    updateSoundIcon() {
      if (this.sound.isMuted) {
        this.dom.soundIconOn.style.display = 'none';
        this.dom.soundIconOff.style.display = 'block';
        this.dom.soundToggleBtn.classList.remove('sound-active');
        this.dom.soundToggleBtn.title = 'Sound: Muted (Click to enable)';
      } else {
        this.dom.soundIconOn.style.display = 'block';
        this.dom.soundIconOff.style.display = 'none';
        this.dom.soundToggleBtn.classList.add('sound-active');
        this.dom.soundToggleBtn.title = 'Sound: On (Click to mute)';
      }
    }

    openModal(modal) {
      if (!modal.open) {
        modal.showModal();
      }
    }

    closeModal(modal) {
      if (modal.open) {
        modal.close();
      }
    }

    isAnyModalOpen() {
      return (
        (this.dom.hintsModal && this.dom.hintsModal.open) ||
        (this.dom.statsModal && this.dom.statsModal.open) ||
        (this.dom.victoryModal && this.dom.victoryModal.open) ||
        (this.dom.gameOverModal && this.dom.gameOverModal.open)
      );
    }

    showToast(title, message, icon = '💡') {
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout);
      }

      this.dom.toastIcon.textContent = icon;
      this.dom.toastTitle.textContent = title;
      this.dom.toastMessage.textContent = message;

      this.dom.hintToast.classList.add('show');

      this.toastTimeout = setTimeout(() => {
        this.dom.hintToast.classList.remove('show');
      }, 3400);
    }

    /* --------------------------------------------------------------------------
       Exhaustive Word Selector (Guarantees No Repetitions Across Cycles)
       -------------------------------------------------------------------------- */
    startNewGame() {
      // Clear any pending modal transitions from previous rounds
      if (this.endRoundTimeout) {
        clearTimeout(this.endRoundTimeout);
        this.endRoundTimeout = null;
      }
      this.closeModal(this.dom.victoryModal);
      this.closeModal(this.dom.gameOverModal);
      this.closeModal(this.dom.hintsModal);

      // Reset any active celebration confetti
      this.isConfettiActive = false;
      if (this.confettiCtx && this.confettiCanvas) {
        this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
      }

      this.roundOver = false;
      this.attempts = this.maxAttempts;
      this.revealedIndices.clear();
      this.guessedLetters.clear();
      this.incorrectGuessesThisRound = 0;
      this.hintsUsedCount = 0;
      this.autoAssistTriggered = false;

      const poolKey = `${this.currentCategory}_${this.currentDifficulty}`;
      const fullList = WORD_DATABASE[this.currentCategory][this.currentDifficulty];

      if (!this.playedHistory[poolKey]) {
        this.playedHistory[poolKey] = [];
      }

      // Filter out all words that have already been played in the current cycle
      let eligibleList = fullList.filter((item) => !this.playedHistory[poolKey].includes(item.word));

      // If all words in the pool have been played, start a fresh cycle
      if (eligibleList.length === 0) {
        // Keep only the very last word played so it cannot be selected immediately again
        this.playedHistory[poolKey] = this.lastWordUsed ? [this.lastWordUsed] : [];
        eligibleList = fullList.filter((item) => item.word !== this.lastWordUsed);
        if (eligibleList.length === 0) eligibleList = fullList;
      }

      // Randomly select from the remaining unplayed words
      const selected = eligibleList[Math.floor(Math.random() * eligibleList.length)];
      this.currentWord = selected.word.toUpperCase();
      this.currentCategoryName = selected.category || 'General';
      this.currentHint = selected.hint;
      this.currentExtraHint = selected.extraHint || selected.hint;
      this.lastWordUsed = this.currentWord;

      // Add to played history
      this.playedHistory[poolKey].push(this.currentWord);
      this.savePlayedHistory();

      // Update Hint Card
      this.dom.categoryBadge.textContent = this.currentCategoryName;
      this.dom.hintText.textContent = `Hint: ${this.currentHint}`;
      this.dom.extraClueBox.style.display = 'none';
      this.dom.extraHintText.textContent = this.currentExtraHint;

      // Reset auto-assist UI
      this.dom.autoAssistPill.style.display = 'none';

      // Render 3D Boxes & Keyboard
      this.renderWordBoxes();
      this.renderKeyboard();
      this.updateAttemptsUI();
      this.updateRevealedCounter();
      this.updateHintButtonsStatus();
    }

    renderWordBoxes() {
      this.dom.wordContainer.innerHTML = '';

      for (let i = 0; i < this.currentWord.length; i++) {
        const char = this.currentWord[i];

        const box = document.createElement('div');
        box.className = 'letter-box';
        box.dataset.index = i;

        const inner = document.createElement('div');
        inner.className = 'letter-box-inner';

        const front = document.createElement('div');
        front.className = 'letter-face letter-face-front';

        const back = document.createElement('div');
        back.className = 'letter-face letter-face-back';
        back.textContent = char;

        inner.appendChild(front);
        inner.appendChild(back);
        box.appendChild(inner);
        this.dom.wordContainer.appendChild(box);
      }
    }

    updateRevealedCounter() {
      const revealed = this.revealedIndices.size;
      const total = this.currentWord.length;
      this.dom.hintRevealedCount.textContent = revealed;
      this.dom.hintTotalCount.textContent = total;
    }

    renderKeyboard() {
      this.dom.keyboardContainer.innerHTML = '';

      const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
      ];

      rows.forEach((rowLetters) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        rowLetters.forEach((letter) => {
          const btn = document.createElement('button');
          btn.className = 'key-btn';
          btn.type = 'button';
          btn.dataset.letter = letter;
          btn.setAttribute('aria-label', `Letter ${letter}`);

          const inner = document.createElement('span');
          inner.className = 'key-inner';
          inner.textContent = letter;

          btn.appendChild(inner);

          btn.addEventListener('click', () => {
            this.handleGuess(letter);
          });

          rowDiv.appendChild(btn);
        });

        this.dom.keyboardContainer.appendChild(rowDiv);
      });
    }

    /* --------------------------------------------------------------------------
       Guess Handling & Difficulty-Based Assistance (Safety Net)
       -------------------------------------------------------------------------- */
    handleGuess(letter) {
      if (this.roundOver) return;
      if (this.guessedLetters.has(letter)) return;

      this.guessedLetters.add(letter);
      const keyBtn = this.dom.keyboardContainer.querySelector(`[data-letter="${letter}"]`);

      if (this.currentWord.includes(letter)) {
        // CORRECT GUESS
        let newlyRevealedCount = 0;

        for (let i = 0; i < this.currentWord.length; i++) {
          if (this.currentWord[i] === letter && !this.revealedIndices.has(i)) {
            this.revealedIndices.add(i);
            newlyRevealedCount++;
            this.revealBox(i);
          }
        }

        if (newlyRevealedCount > 0) {
          this.awardPoints(newlyRevealedCount);
          this.sound.playCorrect();
        }

        if (keyBtn) {
          keyBtn.classList.add('correct');
          keyBtn.disabled = true;
        }

        this.updateRevealedCounter();

        if (this.revealedIndices.size === this.currentWord.length) {
          this.handleWin();
        }
      } else {
        // INCORRECT GUESS
        this.attempts = Math.max(0, this.attempts - 1);
        this.incorrectGuessesThisRound++;
        this.sound.playIncorrect();

        if (keyBtn) {
          keyBtn.classList.add('incorrect');
          keyBtn.disabled = true;
        }

        this.updateAttemptsUI();

        // Check Difficulty-Based Assistance (Auto-Help)
        this.checkDifficultyAssistance();

        if (this.attempts === 0) {
          this.handleLoss();
        }
      }

      this.updateHintButtonsStatus();
    }

    checkDifficultyAssistance() {
      if (this.roundOver || this.autoAssistTriggered) return;
      if (this.revealedIndices.size >= this.currentWord.length) return;

      let shouldAssist = false;
      let assistReason = '';

      if (this.currentDifficulty === 'easy' && this.incorrectGuessesThisRound === 3) {
        shouldAssist = true;
        assistReason = 'Easy Mode: 3 misses reached!';
      } else if (this.currentDifficulty === 'medium' && this.incorrectGuessesThisRound === 4) {
        shouldAssist = true;
        assistReason = 'Medium Mode: 4 misses reached!';
      }

      if (shouldAssist) {
        this.autoAssistTriggered = true;
        this.dom.autoAssistPill.style.display = 'inline-flex';

        const unrevealed = [];
        for (let i = 0; i < this.currentWord.length; i++) {
          if (!this.revealedIndices.has(i)) {
            unrevealed.push(this.currentWord[i]);
          }
        }

        if (unrevealed.length > 0) {
          const chosen = unrevealed[Math.floor(Math.random() * unrevealed.length)];
          this.guessedLetters.add(chosen);

          for (let i = 0; i < this.currentWord.length; i++) {
            if (this.currentWord[i] === chosen) {
              this.revealedIndices.add(i);
              this.revealBox(i);
            }
          }

          const kBtn = this.dom.keyboardContainer.querySelector(`[data-letter="${chosen}"]`);
          if (kBtn) {
            kBtn.classList.add('correct');
            kBtn.disabled = true;
          }

          this.updateRevealedCounter();
          this.sound.playHint();
          this.showToast('🤝 Helping Hand Activated!', `Free letter '${chosen}' was revealed! (${assistReason})`, '✨');

          if (this.revealedIndices.size === this.currentWord.length) {
            this.handleWin();
          }
        }
      }
    }

    revealBox(index) {
      const box = this.dom.wordContainer.querySelector(`[data-index="${index}"]`);
      if (box && !box.classList.contains('revealed')) {
        box.classList.add('revealed');
      }
    }

    /* --------------------------------------------------------------------------
       Smart Progressive Hint Implementation
       -------------------------------------------------------------------------- */
    handleQuickHintClick() {
      if (this.roundOver) return;

      if (this.score >= 3) {
        this.useRevealOneLetterHint();
      } else {
        this.openHintHub(
          `You need 3 points for a letter reveal (you have ${this.score} pts). You can use the Free Clue below or earn points by guessing!`
        );
      }
    }

    openHintHub(feedbackMessage = '') {
      this.dom.hintModalScoreVal.textContent = this.score;

      if (feedbackMessage) {
        this.dom.hintFeedbackText.textContent = feedbackMessage;
        this.dom.hintFeedbackAlert.style.display = 'flex';
      } else {
        this.dom.hintFeedbackAlert.style.display = 'none';
      }

      this.updateHintButtonsStatus();
      this.openModal(this.dom.hintsModal);
    }

    // 1. Free Clue
    useFreeClue() {
      if (this.roundOver) return;

      this.sound.playPop();
      this.dom.extraClueBox.style.display = 'block';
      this.showToast('📖 Extra Clue Unlocked!', this.currentExtraHint, '💡');
    }

    // 2. Reveal 1 Letter (3 Pts)
    useRevealOneLetterHint() {
      if (this.roundOver) return;

      const cost = 3;
      if (this.score < cost) {
        this.openHintHub(`This hint costs 3 points. You have ${this.score} points. Guess letters correctly (+1 pt each) to earn points!`);
        return;
      }

      const unrevealedLetters = this.getDistinctUnrevealedLetters();
      if (unrevealedLetters.length === 0) {
        this.showToast('All Letters Revealed!', 'Every letter has already been found!', '🎉');
        return;
      }

      if (unrevealedLetters.length === 1) {
        this.openHintHub(
          `Only 1 hidden letter remains! Use the "Reveal a Letter" option (-3 Pts) instead to save your points.`
        );
        return;
      }

      this.deductPoints(cost);
      this.sound.playHint();
      this.hintsUsedCount++;

      const chosenLetter = unrevealedLetters[Math.floor(Math.random() * unrevealedLetters.length)];
      this.revealMatchingLetter(chosenLetter);

      this.showToast('🔤 Hint Activated!', `Letter '${chosenLetter}' was revealed! (-3 Points)`, '✨');
      this.closeModal(this.dom.hintsModal);
      this.updateHintButtonsStatus();
    }

    // 3. Reveal 2 Letters (5 Pts)
    useRevealTwoLettersHint() {
      if (this.roundOver) return;

      const cost = 5;
      if (this.score < cost) {
        this.openHintHub(`This hint costs 5 points. You have ${this.score} points. Guess letters correctly (+1 pt each) to earn points!`);
        return;
      }

      const unrevealedLetters = this.getDistinctUnrevealedLetters();
      if (unrevealedLetters.length === 0) {
        this.showToast('All Letters Revealed!', 'Every letter has already been found!', '🎉');
        return;
      }

      if (unrevealedLetters.length === 1) {
        this.openHintHub(
          `Only 1 hidden letter remains! Use the "Reveal a Letter" option (-3 Pts) instead to save your points.`
        );
        return;
      }

      this.deductPoints(cost);
      this.sound.playHint();
      this.hintsUsedCount += 2;

      const lettersToReveal = [];
      const shuffled = [...unrevealedLetters].sort(() => 0.5 - Math.random());
      lettersToReveal.push(shuffled[0]);
      if (shuffled.length > 1) {
        lettersToReveal.push(shuffled[1]);
      }

      lettersToReveal.forEach((char) => this.revealMatchingLetter(char));

      this.showToast('⚡ Hint Activated!', `Letters '${lettersToReveal.join(' & ')}' were revealed! (-5 Points)`, '✨');
      this.closeModal(this.dom.hintsModal);
      this.updateHintButtonsStatus();
    }

    // 4. Emergency Hint: Reveal First Letter (7 Pts)
    useRevealFirstLetterHint() {
      if (this.roundOver) return;

      if (this.revealedIndices.has(0)) {
        this.openHintHub(
          `The first letter '${this.currentWord[0]}' is already revealed! Use "Reveal a Letter" or "Reveal More Letters" instead.`
        );
        return;
      }

      const cost = 7;
      if (this.score < cost) {
        this.openHintHub(`This emergency hint costs 7 points. You have ${this.score} points. Guess letters correctly to earn points!`);
        return;
      }

      const targetLetter = this.currentWord[0];

      this.deductPoints(cost);
      this.sound.playHint();
      this.hintsUsedCount++;

      this.revealMatchingLetter(targetLetter);

      this.showToast('🌟 Emergency Hint!', `The first letter '${targetLetter}' was revealed! (-7 Points)`, '✨');
      this.closeModal(this.dom.hintsModal);
      this.updateHintButtonsStatus();
    }

    getDistinctUnrevealedLetters() {
      const distinct = [];
      for (let i = 0; i < this.currentWord.length; i++) {
        if (!this.revealedIndices.has(i)) {
          const char = this.currentWord[i];
          if (!distinct.includes(char)) {
            distinct.push(char);
          }
        }
      }
      return distinct;
    }

    revealMatchingLetter(letter) {
      this.guessedLetters.add(letter);

      for (let i = 0; i < this.currentWord.length; i++) {
        if (this.currentWord[i] === letter) {
          this.revealedIndices.add(i);
          this.revealBox(i);
        }
      }

      const keyBtn = this.dom.keyboardContainer.querySelector(`[data-letter="${letter}"]`);
      if (keyBtn) {
        keyBtn.classList.add('correct');
        keyBtn.disabled = true;
      }

      this.updateRevealedCounter();

      if (this.revealedIndices.size === this.currentWord.length) {
        this.handleWin();
      }
    }

    updateHintButtonsStatus() {
      const allRevealed = this.revealedIndices.size === this.currentWord.length;
      const isFinished = this.roundOver || allRevealed;

      this.dom.hintBtn.disabled = isFinished;
      this.dom.needHelpBtn.disabled = isFinished;

      if (!isFinished) {
        this.dom.hintBtn.classList.add('pulse-hint');
      } else {
        this.dom.hintBtn.classList.remove('pulse-hint');
      }

      if (this.dom.hintModalScoreVal) {
        this.dom.hintModalScoreVal.textContent = this.score;
      }

      // Update in-modal hint action buttons
      if (this.dom.btnHintFreeClue) this.dom.btnHintFreeClue.disabled = isFinished;
      if (this.dom.btnHintRevealOne) this.dom.btnHintRevealOne.disabled = isFinished;
      if (this.dom.btnHintRevealTwo) this.dom.btnHintRevealTwo.disabled = isFinished;
      if (this.dom.btnHintRevealFirst) this.dom.btnHintRevealFirst.disabled = isFinished;
    }

    resetScore() {
      this.score = 0;
      this.dom.scoreDisplay.textContent = '0';
      this.updateHintButtonsStatus();
      this.showToast('Score Reset', 'Your score has been reset to 0.', '🔄');
    }

    awardPoints(amount) {
      const prevScore = this.score;
      this.score = Math.max(0, this.score + amount);

      if (this.score > this.stats.bestScore) {
        this.stats.bestScore = this.score;
        this.saveStats();
      }

      this.animateScoreCount(prevScore, this.score);
      this.triggerScoreDelta(`+${amount}`, true);
      this.updateHintButtonsStatus();
    }

    deductPoints(amount) {
      const prevScore = this.score;
      this.score = Math.max(0, this.score - amount);

      this.animateScoreCount(prevScore, this.score);
      this.triggerScoreDelta(`-${amount}`, false);
      this.updateHintButtonsStatus();
    }

    animateScoreCount(start, end) {
      const duration = 400;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.round(start + (end - start) * progress);

        this.dom.scoreDisplay.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          this.dom.scoreDisplay.textContent = end;
        }
      };

      requestAnimationFrame(updateCounter);
    }

    triggerScoreDelta(text, isPositive) {
      const badge = this.dom.scoreDeltaBadge;
      badge.textContent = text;
      badge.className = 'score-delta-badge';

      void badge.offsetWidth;

      if (isPositive) {
        badge.classList.add('pop-positive');
      } else {
        badge.classList.add('pop-negative');
      }
    }

    updateAttemptsUI() {
      this.dom.attemptsText.textContent = `${this.attempts} / ${this.maxAttempts}`;
      const pct = (this.attempts / this.maxAttempts) * 100;

      this.dom.attemptsProgressBar.style.width = `${pct}%`;
      this.dom.attemptsProgressBar.classList.remove('warning', 'danger');

      if (this.attempts <= 2) {
        this.dom.attemptsProgressBar.classList.add('danger');
      } else if (this.attempts <= 4) {
        this.dom.attemptsProgressBar.classList.add('warning');
      }
    }

    handleWin() {
      this.roundOver = true;
      this.disableKeyboard();

      this.awardPoints(10);

      this.stats.played++;
      this.stats.wins++;
      this.stats.currentStreak++;
      if (this.stats.currentStreak > this.stats.bestStreak) {
        this.stats.bestStreak = this.stats.currentStreak;
      }
      this.saveStats();

      this.sound.playWin();

      const boxes = this.dom.wordContainer.querySelectorAll('.letter-box');
      boxes.forEach((b, i) => {
        b.style.animationDelay = `${i * 0.08}s`;
        b.classList.add('wave-bounce');
      });

      this.fireConfetti();

      this.dom.victoryWordDisplay.textContent = this.currentWord;
      this.dom.victoryScoreTotal.textContent = this.score;
      this.dom.victoryAttemptsLeft.textContent = this.attempts;

      this.endRoundTimeout = setTimeout(() => {
        this.openModal(this.dom.victoryModal);
      }, 700);
    }

    handleLoss() {
      this.roundOver = true;
      this.disableKeyboard();

      this.stats.played++;
      this.stats.losses++;
      this.stats.currentStreak = 0;
      this.saveStats();

      this.sound.playLose();
      this.dom.gameOverWordDisplay.textContent = this.currentWord;

      this.endRoundTimeout = setTimeout(() => {
        this.openModal(this.dom.gameOverModal);
      }, 600);
    }

    disableKeyboard() {
      const keys = this.dom.keyboardContainer.querySelectorAll('.key-btn');
      keys.forEach((k) => (k.disabled = true));
      this.updateHintButtonsStatus();
    }

    /* --------------------------------------------------------------------------
       Background Ambient Particles Engine
       -------------------------------------------------------------------------- */
    initParticles() {
      this.particlesCanvas = document.getElementById('particlesCanvas');
      if (!this.particlesCanvas) return;
      this.particlesCtx = this.particlesCanvas.getContext('2d');
      this.resizeCanvases();

      const numParticles = 30;
      this.particles = [];

      for (let i = 0; i < numParticles; i++) {
        this.particles.push({
          x: Math.random() * this.particlesCanvas.width,
          y: Math.random() * this.particlesCanvas.height,
          size: Math.random() * 4 + 1.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4 - 0.15,
          opacity: Math.random() * 0.5 + 0.2,
          color: ['#a78bfa', '#f472b6', '#38bdf8', '#facc15', '#4ade80'][Math.floor(Math.random() * 5)]
        });
      }

      const animateParticles = () => {
        if (!this.particlesCtx) return;
        this.particlesCtx.clearRect(0, 0, this.particlesCanvas.width, this.particlesCanvas.height);

        this.particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = this.particlesCanvas.width;
          if (p.x > this.particlesCanvas.width) p.x = 0;
          if (p.y < 0) p.y = this.particlesCanvas.height;
          if (p.y > this.particlesCanvas.height) p.y = 0;

          this.particlesCtx.save();
          this.particlesCtx.globalAlpha = p.opacity;
          this.particlesCtx.fillStyle = p.color;
          this.particlesCtx.beginPath();
          this.particlesCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          this.particlesCtx.fill();
          this.particlesCtx.restore();
        });

        requestAnimationFrame(animateParticles);
      };

      requestAnimationFrame(animateParticles);
    }

    /* --------------------------------------------------------------------------
       Confetti Celebration Physics Engine
       -------------------------------------------------------------------------- */
    initConfetti() {
      this.confettiCanvas = document.getElementById('confettiCanvas');
      if (!this.confettiCanvas) return;
      this.confettiCtx = this.confettiCanvas.getContext('2d');
    }

    resizeCanvases() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (this.particlesCanvas) {
        this.particlesCanvas.width = w;
        this.particlesCanvas.height = h;
      }
      if (this.confettiCanvas) {
        this.confettiCanvas.width = w;
        this.confettiCanvas.height = h;
      }
    }

    fireConfetti() {
      if (!this.confettiCanvas || !this.confettiCtx) return;

      this.resizeCanvases();
      this.confettiPieces = [];
      const numPieces = 90;
      const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#facc15'];

      for (let i = 0; i < numPieces; i++) {
        this.confettiPieces.push({
          x: this.confettiCanvas.width / 2 + (Math.random() - 0.5) * 120,
          y: this.confettiCanvas.height * 0.45,
          w: Math.random() * 10 + 6,
          h: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 14,
          vy: Math.random() * -12 - 5,
          gravity: 0.28,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1
        });
      }

      this.isConfettiActive = true;
      this.renderConfetti();
    }

    renderConfetti() {
      if (!this.isConfettiActive || !this.confettiCtx) return;

      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

      let activeCount = 0;

      this.confettiPieces.forEach((p) => {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y > this.confettiCanvas.height * 0.7) {
          p.opacity -= 0.018;
        }

        if (p.opacity > 0) {
          activeCount++;
          this.confettiCtx.save();
          this.confettiCtx.translate(p.x, p.y);
          this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
          this.confettiCtx.globalAlpha = Math.max(0, p.opacity);
          this.confettiCtx.fillStyle = p.color;
          this.confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          this.confettiCtx.restore();
        }
      });

      if (activeCount > 0) {
        requestAnimationFrame(() => this.renderConfetti());
      } else {
        this.isConfettiActive = false;
        this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new WordGame());
  } else {
    new WordGame();
  }
})();

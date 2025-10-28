const BYear = '2009';
const BMonth = '09';
const BDay = '02';
const BTime = '10:30:02';
const birthDate = new Date(`${BYear}-${BMonth}-${BDay}T${BTime}`);

function updateAge() {
  const now = new Date();
  let diff = now - birthDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);
  const remainingDays = days - Math.floor(years * 365.25);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  const display = `${years} years, ${remainingDays} days, ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
  document.getElementById("age").innerHTML = display;
}

updateAge();
setInterval(updateAge, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text");
  if (!typingElement) return;

  const phrases = [
    [
      { text: "HI,", correct: null },
      { text: " ", correct: null },
      { text: "I'm", correct: null },
      { text: " ", correct: null },
      { text: "Gabrial", correct: "Gabriel" },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "or", correct: null },
      { text: " ", correct: null },
      { text: "Noloxo", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "call", correct: null },
      { text: " ", correct: null },
      { text: "me", correct: null },
      { text: " ", correct: null },
      { text: "by", correct: null },
      { text: " ", correct: null },
      { text: "one", correct: null },
      { text: " ", correct: null },
      { text: "of", correct: null },
      { text: " ", correct: null },
      { text: "that", correct: "those" },
      { text: " ", correct: null },
      { text: "two", correct: null },
      { text: " ", correct: null },
      { text: "name", correct: "names" }
    ],
    [
      { text: "Hey", correct: null },
      { text: " ", correct: null },
      { text: "there", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "Im", correct: "I'm" },
      { text: " ", correct: null },
      { text: "Gabriel", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "but", correct: null },
      { text: " ", correct: null },
      { text: "evryone", correct: "everyone" },
      { text: " ", correct: null },
      { text: "call", correct: "calls" },
      { text: " ", correct: null },
      { text: "me", correct: null },
      { text: " ", correct: null },
      { text: "Noloxo", correct: null }
    ],
    [
      { text: "Hello", correct: null },
      { text: "!", correct: null },
      { text: " ", correct: null },
      { text: "My", correct: null },
      { text: " ", correct: null },
      { text: "name", correct: null },
      { text: " ", correct: null },
      { text: "is", correct: null },
      { text: " ", correct: null },
      { text: "Gabrial", correct: "Gabriel" },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "also", correct: null },
      { text: " ", correct: null },
      { text: "knowen", correct: "known" },
      { text: " ", correct: null },
      { text: "as", correct: null },
      { text: " ", correct: null },
      { text: "Noloxo", correct: null }
    ],
    [
      { text: "Hi", correct: null },
      { text: " ", correct: null },
      { text: "everyone", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "I", correct: null },
      { text: " ", correct: null },
      { text: "am", correct: null },
      { text: " ", correct: null },
      { text: "Noloxo", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "you", correct: null },
      { text: " ", correct: null },
      { text: "can", correct: null },
      { text: " ", correct: null },
      { text: "aslo", correct: "also" },
      { text: " ", correct: null },
      { text: "call", correct: null },
      { text: " ", correct: null },
      { text: "me", correct: null },
      { text: " ", correct: null },
      { text: "Gabrial", correct: "Gabriel" }
    ],
    [
      { text: "Yo", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "its", correct: "it's" },
      { text: " ", correct: null },
      { text: "Gabriel", correct: null },
      { text: " ", correct: null },
      { text: "here", correct: null },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "or", correct: null },
      { text: " ", correct: null },
      { text: "Noloxo", correct: null },
      { text: " ", correct: null },
      { text: "if", correct: null },
      { text: " ", correct: null },
      { text: "you", correct: null },
      { text: " ", correct: null },
      { text: "preffer", correct: "prefer" }
    ],
    [
      { text: "Greetings", correct: null },
      { text: "!", correct: null },
      { text: " ", correct: null },
      { text: "Im", correct: "I'm" },
      { text: " ", correct: null },
      { text: "Gabrial", correct: "Gabriel" },
      { text: ",", correct: null },
      { text: " ", correct: null },
      { text: "tho", correct: "though" },
      { text: " ", correct: null },
      { text: "most", correct: null },
      { text: " ", correct: null },
      { text: "people", correct: null },
      { text: " ", correct: null },
      { text: "know", correct: null },
      { text: " ", correct: null },
      { text: "me", correct: null },
      { text: " ", correct: null },
      { text: "as", correct: null },
      { text: " ", correct: null },
      { text: "Noloxo", correct: null }
    ]
  ];

  const words = phrases[Math.floor(Math.random() * phrases.length)];

  typingElement.textContent = "";
  typingElement.classList.remove("ended");

  let completedText = "";
  let wordIndex = 0;
  let charIndex = 0;
  let correcting = false;
  let letterTimings = [];
  let lastLetterTime = null;

  function getTypingDelay(wordLength = 5) {
    return 50 + wordLength * 10 + Math.random() * 30;
  }

  function typeWord() {
    if (wordIndex >= words.length) {
      typingElement.classList.add("ended");
      return;
    }

    const currentWord = words[wordIndex];
    const correctWord = currentWord.correct;
    const displayWord = currentWord.text;

    const now = performance.now();

    if (!correcting && charIndex < displayWord.length) {
      if (lastLetterTime !== null) {
        letterTimings.push(now - lastLetterTime);
      }
      lastLetterTime = now;

      typingElement.textContent = completedText + displayWord.slice(0, charIndex + 1);
      charIndex++;

      const delay = getTypingDelay(displayWord.length);
      setTimeout(typeWord, delay);

    } 
    else if (!correcting && charIndex === displayWord.length) {
      letterTimings.push(getTypingDelay(displayWord.length));
      lastLetterTime = null;

      if (correctWord) {
        correcting = true;
        typeWord();
      } else {
        completedText += displayWord;
        letterTimings = [];
        wordIndex++;
        charIndex = 0;
        setTimeout(typeWord, getTypingDelay(displayWord.length));
      }
    } 
    else if (correcting) {
      let currentText = typingElement.textContent;
      const target = completedText + correctWord;

      let divergence = completedText.length;
      while (divergence < target.length && currentText[divergence] === target[divergence]) {
        divergence++;
      }

      if (currentText.length > target.length || divergence < currentText.length) {
        const deleteIndex = currentText.length - completedText.length - 1;
        const delay = letterTimings[deleteIndex] || 50;
        typingElement.textContent = currentText.slice(0, -1);
        setTimeout(typeWord, delay);

      } else if (currentText.length < target.length) {
        const addIndex = currentText.length - completedText.length;
        const delay = letterTimings[addIndex] || 50;
        typingElement.textContent += target[currentText.length];
        setTimeout(typeWord, delay);

      } else {
        completedText += correctWord;
        correcting = false;
        letterTimings = [];
        wordIndex++;
        charIndex = 0;
        setTimeout(typeWord, getTypingDelay(displayWord.length));
      }
    }
  }

  typeWord();
});
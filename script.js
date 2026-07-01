let launchConfetti = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 100,

        spread: 70,

        origin: {
          y: 0.6,
        },
      });
    }, i * 250);
  }
};

const quizQuestions = [
  {
    question: "What is JavaScript?",
    answers: [
      "A programming language",
      "A database",
      "A browser",
      "An operating system",
    ],
    correct: 0,
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    answers: ["var", "define", "let", "const()"],
    correct: 2,
  },
  {
    question: "Which company originally developed JavaScript?",
    answers: ["Microsoft", "Google", "Netscape", "Apple"],
    correct: 2,
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answers: ["<!-- -->", "#", "//", "/* */"],
    correct: 2,
  },
  {
    question: "Which method prints data to the browser console?",
    answers: ["console.write()", "console.print()", "console.log()", "print()"],
    correct: 2,
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Method",
      "Document Output Module",
      "Display Object Manager",
    ],
    correct: 0,
  },
  {
    question: "Which operator checks value AND data type?",
    answers: ["==", "=", "===", "!="],
    correct: 2,
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: ["push()", "pop()", "shift()", "slice()"],
    correct: 0,
  },
  {
    question: "Which event fires when a button is clicked?",
    answers: ["submit", "hover", "click", "change"],
    correct: 2,
  },
  {
    question: "Where is localStorage data stored?",
    answers: ["Server", "Browser", "Database", "RAM"],
    correct: 1,
  },
  {
    question: "Which keyword declares a constant?",
    answers: ["let", "const", "static", "var"],
    correct: 1,
  },
  {
    question: "Which method removes the last element from an array?",
    answers: ["shift()", "slice()", "splice()", "pop()"],
    correct: 3,
  },
  {
    question: "Which method converts JSON into a JavaScript object?",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correct: 1,
  },
  {
    question: "Which method converts a JavaScript object into JSON?",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.encode()",
      "JSON.objectify()",
    ],
    correct: 0,
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    answers: ["for", "while", "do...while", "forEach"],
    correct: 2,
  },
  {
    question: "Which keyword exits a loop immediately?",
    answers: ["continue", "return", "exit", "break"],
    correct: 3,
  },
  {
    question: "Which method is used to select an element by its ID?",
    answers: [
      "querySelectorAll()",
      "getElementById()",
      "getElementsByClassName()",
      "getElement()",
    ],
    correct: 1,
  },
  {
    question: "Which keyword is used to create a function?",
    answers: ["function", "method", "func", "define"],
    correct: 0,
  },
  {
    question:
      "Which array method creates a new array by applying a function to every element?",
    answers: ["filter()", "map()", "find()", "reduce()"],
    correct: 1,
  },
  {
    question: "Which keyword is used to handle errors?",
    answers: ["catch", "throw", "try...catch", "error"],
    correct: 2,
  },
];

const htmlQuestions = [
  {
    question: "HTML stands for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    correct: 0,
  },
  {
    question: "Which tag is used for a paragraph?",
    answers: ["<div>", "<p>", "<h1>", "<span>"],
    correct: 1,
  },
  {
    question: "Which tag creates a hyperlink?",
    answers: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0,
  },
  {
    question: "Which tag displays the largest heading?",
    answers: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: 2,
  },
  {
    question: "Which tag inserts an image?",
    answers: ["<picture>", "<img>", "<image>", "<src>"],
    correct: 1,
  },
  {
    question: "Which attribute specifies an image path?",
    answers: ["link", "href", "src", "path"],
    correct: 2,
  },
  {
    question: "Which tag creates an unordered list?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1,
  },
  {
    question: "Which tag creates a list item?",
    answers: ["<item>", "<list>", "<li>", "<ul>"],
    correct: 2,
  },
  {
    question: "Which tag creates a line break?",
    answers: ["<break>", "<lb>", "<br>", "<hr>"],
    correct: 2,
  },
  {
    question: "Which tag creates a horizontal line?",
    answers: ["<line>", "<hr>", "<br>", "<border>"],
    correct: 1,
  },
  {
    question: "Which tag is used for forms?",
    answers: ["<form>", "<input>", "<fieldset>", "<label>"],
    correct: 0,
  },
  {
    question: "Which input type hides typed characters?",
    answers: ["text", "email", "password", "hidden"],
    correct: 2,
  },
  {
    question: "Which tag is used for tables?",
    answers: ["<table>", "<tbody>", "<tr>", "<td>"],
    correct: 0,
  },
  {
    question: "Which tag defines a table row?",
    answers: ["<td>", "<table>", "<row>", "<tr>"],
    correct: 3,
  },
  {
    question: "Which tag defines a table cell?",
    answers: ["<cell>", "<td>", "<th>", "<tr>"],
    correct: 1,
  },
  {
    question: "Which tag is used to make text bold?",
    answers: ["<bold>", "<strong>", "<b>", "Both <strong> and <b>"],
    correct: 3,
  },
  {
    question: "Which tag defines the document title?",
    answers: ["<meta>", "<title>", "<head>", "<header>"],
    correct: 1,
  },
  {
    question: "Which tag contains metadata?",
    answers: ["<head>", "<body>", "<meta>", "<title>"],
    correct: 0,
  },
  {
    question: "HTML is primarily used to?",
    answers: [
      "Style webpages",
      "Structure webpages",
      "Program webpages",
      "Store data",
    ],
    correct: 1,
  },
  {
    question:
      "Which HTML version introduced semantic elements like <header> and <footer>?",
    answers: ["HTML3", "HTML4", "HTML5", "XHTML"],
    correct: 2,
  },
];

const cssQuestions = [
  {
    question: "Which property changes text color?",
    answers: ["font-color", "text-color", "color", "background"],
    correct: 2,
  },
  {
    question: "Which property adds space inside an element?",
    answers: ["margin", "padding", "border", "gap"],
    correct: 1,
  },
  {
    question: "Which property changes the background color?",
    answers: ["background", "background-color", "bg-color", "color"],
    correct: 1,
  },
  {
    question: "Which property changes font size?",
    answers: ["font-style", "font-size", "text-size", "size"],
    correct: 1,
  },
  {
    question: "Which property makes text bold?",
    answers: ["font-style", "font-weight", "font-bold", "text-weight"],
    correct: 1,
  },
  {
    question: "Which property centers text?",
    answers: ["align", "justify", "text-align", "center"],
    correct: 2,
  },
  {
    question: "Which display value creates a flex container?",
    answers: ["block", "inline", "flex", "grid"],
    correct: 2,
  },
  {
    question: "Which display value creates a grid container?",
    answers: ["table", "grid", "flex", "inline"],
    correct: 1,
  },
  {
    question: "Which property creates rounded corners?",
    answers: ["border-style", "border-radius", "radius", "corner"],
    correct: 1,
  },
  {
    question: "Which property adds shadow to a box?",
    answers: ["text-shadow", "shadow", "box-shadow", "drop-shadow"],
    correct: 2,
  },
  {
    question: "Which property controls element transparency?",
    answers: ["opacity", "visibility", "display", "filter"],
    correct: 0,
  },
  {
    question: "Which property changes the mouse cursor?",
    answers: ["pointer", "cursor", "mouse", "hover"],
    correct: 1,
  },
  {
    question: "Which CSS unit is relative to the root font size?",
    answers: ["px", "em", "rem", "%"],
    correct: 2,
  },
  {
    question: "Which property controls spacing outside an element?",
    answers: ["padding", "margin", "gap", "spacing"],
    correct: 1,
  },
  {
    question: "Which property changes the font family?",
    answers: ["font-name", "font-style", "font-family", "family"],
    correct: 2,
  },
  {
    question: "Which property is used for animations between states?",
    answers: ["transition", "transform", "animation", "effect"],
    correct: 0,
  },
  {
    question: "Which property rotates an element?",
    answers: ["rotate", "transform", "transition", "animation"],
    correct: 1,
  },
  {
    question: "Which selector targets an element with id='box'?",
    answers: [".box", "#box", "*box", "box"],
    correct: 1,
  },
  {
    question: "Which selector targets elements with class='card'?",
    answers: ["#card", ".card", "*card", "card"],
    correct: 1,
  },
  {
    question: "Which CSS property controls stacking order?",
    answers: ["stack", "position", "z-index", "layer"],
    correct: 2,
  },
];

// DOM ELEMENT SELECTION

const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const nextBtn = document.querySelector("#nextBtn");
const quizTitle = document.querySelector("#quizTitle");
const progress = document.querySelector("#progress");
const progressFill = document.querySelector("#progressFill");
const timer = document.querySelector("#timer");
const quizBox = document.querySelector("#quizBox");
const resultsBox = document.querySelector("#resultsBox");
const restartBtn = document.querySelector("#restartBtn");
const bestScore = document.querySelector("#bestScore");
const achievements = document.querySelector("#achievements");
const statsBox = document.querySelector("#statsBox");
const reviewAnswers = document.querySelector("#reviewAnswers");
const streak = document.querySelector("#streak");
const difficultyBox = document.querySelector("#difficultyBox");
const difficultyBtns = document.querySelectorAll(".difficulty-btn");
const categoryBtns = document.querySelectorAll(".category-btn");
const themeBtn = document.querySelector("#themeBtn");
const loaderScreen = document.querySelector("#loaderScreen");
const loaderProgress = document.querySelector("#loaderProgress");
const loadingPercent = document.querySelector("#loadingPercent");
const loadingText = document.querySelector("#loadingText");
const introLoader = document.querySelector("#introLoader");
const container = document.querySelector(".container");

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let filteredQuestions = [];
let totalQuestions = 0;
let currentStreak = 0;
let timeLeft = 10;
let timerInterval;
let difficulty = "medium";
let category = "js";
let bestStreak = 0;
let totalTimeSpent = 0;
let questionsAnswered = 0;
let userAnswers = [];
let answerChecked = false;

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");

  themeBtn.textContent = "☀️";
}

let audioContext;

let playSound = (frequency, duration) => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = "sine";

  gainNode.gain.value = 0.1;

  oscillator.start();

  setTimeout(() => {
    oscillator.stop();
  }, duration);
};

let shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

let showLoader = (callback) => {
  quizBox.style.display = "none";

  loaderScreen.style.display = "flex";

  loaderProgress.style.width = "0%";

  loadingPercent.textContent = "0%";

  const tips = [
    "Preparing your challenge...",
    "Loading Questions...",
    "Sharpening your brain...",
    "Almost Ready...",
  ];

  let percent = 0;
  let tipIndex = 0;

  loadingText.textContent = tips[0];

  const interval = setInterval(() => {
    percent++;

    loaderProgress.style.width = percent + "%";
    loadingPercent.textContent = percent + "%";

    if (percent === 25) loadingText.textContent = tips[1];
    if (percent === 50) loadingText.textContent = tips[2];
    if (percent === 75) loadingText.textContent = tips[3];

    if (percent >= 100) {
      clearInterval(interval);

      loaderScreen.style.display = "none";

      callback();
    }
  }, 15);
};

let shuffleAnswers = (question) => {
  const answers = question.answers.map((answer, index) => ({
    text: answer,
    isCorrect: index === question.correct,
  }));

  shuffleArray(answers);

  return {
    question: question.question,
    answers: answers.map((a) => a.text),
    correct: answers.findIndex((a) => a.isCorrect),
  };
};

let loadQuestions = () => {
  selectedAnswer = null;

  answerChecked = false;

  nextBtn.style.display = "none";

  nextBtn.disabled = false;

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  question.classList.remove("fade");

  void question.offsetWidth;

  question.classList.add("fade");

  question.textContent = currentQuestion.question;
  progress.textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`;

  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  progressFill.style.width = `${progressPercent}%`;

  answers.innerHTML = "";

  answers.classList.remove("fade");

  void answers.offsetWidth;

  answers.classList.add("fade");

  currentQuestion.answers.forEach((answer, index) => {
    const answerBtn = document.createElement("button");

    answerBtn.className = "answer-btn";

    const letters = ["A", "B", "C", "D"];

    const optionLetter = document.createElement("div");
    optionLetter.className = "option-letter";
    optionLetter.textContent = letters[index];

    const optionText = document.createElement("div");
    optionText.textContent = answer;

    answerBtn.append(optionLetter, optionText);

    answerBtn.addEventListener("click", () => selectAnswer(answerBtn, index));

    answers.append(answerBtn);
  });

  startTimer();
};

let startTimer = () => {
  clearInterval(timerInterval);

  timer.style.color = "";

  if (difficulty === "easy") {
    timeLeft = 20;
  } else if (difficulty === "medium") {
    timeLeft = 15;
  } else {
    timeLeft = 10;
  }

  timer.textContent = `${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;

    timer.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      selectedAnswer = null;
      userAnswers[currentQuestionIndex] = null;

      checkAnswer();

      currentQuestionIndex++;

      if (currentQuestionIndex < totalQuestions) {
        setTimeout(loadQuestions, 700);
      } else {
        setTimeout(showResults, 700);
      }
    }

    if (timeLeft <= 5) {
      timer.style.color = "red";

      playSound(500, 80);
    } else {
      timer.style.color = "";
    }
  }, 1000);
};

let selectAnswer = (clickedAnswer, index) => {
  clearInterval(timerInterval);

  selectedAnswer = index;

  userAnswers[currentQuestionIndex] = index;

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  clickedAnswer.classList.add("selected");

  nextBtn.style.display = "block";
};

let checkAnswer = () => {
  if (answerChecked) return;
  answerChecked = true;

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const buttons = document.querySelectorAll(".answer-btn");

  totalTimeSpent +=
    (difficulty === "easy" ? 20 : difficulty === "medium" ? 15 : 10) - timeLeft;

  questionsAnswered++;

  buttons.forEach((btn) => (btn.disabled = true));

  if (selectedAnswer === currentQuestion.correct) {
    score++;

    playSound(700, 150);

    buttons[selectedAnswer].classList.add("correct");

    currentStreak++;

    bestStreak = Math.max(bestStreak, currentStreak);

    streak.textContent = currentStreak;
  } else {
    currentStreak = 0;

    playSound(250, 250);

    streak.textContent = 0;

    buttons[currentQuestion.correct].classList.add("correct");

    if (selectedAnswer !== null) {
      buttons[selectedAnswer].classList.add("wrong");
    }
  }
};

let nextQuestion = () => {
  nextBtn.disabled = true;

  checkAnswer();

  currentQuestionIndex++;

  if (currentQuestionIndex < totalQuestions) {
    setTimeout(() => {
      nextBtn.disabled = false;
      loadQuestions();
    }, 700);
  } else {
    setTimeout(() => {
      nextBtn.disabled = false;
      showResults();
    }, 700);
  }
};

let showResults = () => {
  quizBox.style.display = "none";
  resultsBox.style.display = "block";

  const percentage = Math.round((score / totalQuestions) * 100);

  let subjectName = "JavaScript";

  if (category === "html") {
    subjectName = "HTML";
  } else if (category === "css") {
    subjectName = "CSS";
  } else if (category === "mixed") {
    subjectName = "Frontend";
  }

  let savedBest = localStorage.getItem(`bestScore-${category}-${difficulty}`);

  if (!savedBest || score > savedBest) {
    localStorage.setItem(`bestScore-${category}-${difficulty}`, score);
    savedBest = score;
  }

  let maxScore = difficulty === "easy" ? 5 : 10;

  bestScore.textContent = `🏆 Best (${difficulty}) : ${savedBest}/${maxScore}`;

  document.querySelector(".score-number").textContent = `
  ${score} / ${totalQuestions}
  `;

  document.querySelector(".score-percentage").textContent = `
  ${percentage}%
  `;

  const resultMessage = document.querySelector("#resultMessage");

  achievements.innerHTML = "";

  statsBox.innerHTML = "";

  reviewAnswers.innerHTML = "";

  if (score === totalQuestions) {
    launchConfetti();

    playSound(1000, 400);

    resultMessage.textContent = "🏆 PERFECT! You mastered this quiz.";
  } else if (percentage >= 80) {
    resultMessage.textContent = `🎉 Excellent! You're a ${subjectName} Wizard.`;
  } else if (percentage >= 60) {
    resultMessage.textContent = `🔥 Great Job! Your ${subjectName} fundamentals are strong.`;
  } else if (percentage >= 40) {
    resultMessage.textContent = "👍 Good Effort! Keep practicing to level up.";
  } else {
    resultMessage.textContent =
      "💪 Don't Give Up! Every expert was once a beginner.";
  }

  if (score === totalQuestions) {
    achievements.innerHTML += `

<div class="badge gold">

🏆 Perfect Score

</div>

`;
  }

  if (bestStreak >= totalQuestions / 2) {
    achievements.innerHTML += `

<div class="badge red">

🔥 Streak Master

</div>

`;
  }

  if (percentage >= 80) {
    achievements.innerHTML += `

<div class="badge green">
⚡  ${subjectName} Wizard</div>`;
  }

  if (percentage >= 60) {
    achievements.innerHTML += `

<div class="badge blue">

🎯 Quiz Champion

</div>

`;
  }

  const wrongAnswers = totalQuestions - score;

  const averageTime =
    questionsAnswered > 0 ? (totalTimeSpent / questionsAnswered).toFixed(1) : 0;

  statsBox.innerHTML = `

<div class="stat">

✅ Correct : ${score}

</div>

<div class="stat">

❌ Wrong : ${wrongAnswers}

</div>

<div class="stat">

🔥 Best Streak : ${bestStreak}

</div>

<div class="stat">

⏳ Avg Time : ${averageTime}s

</div>

`;

  filteredQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];

    const isCorrect = userAnswer === question.correct;

    reviewAnswers.innerHTML += `

<div class="review-item">

<h4>${index + 1}. ${question.question}</h4>

<p class="${isCorrect ? "correct-answer" : "wrong-answer"}">

Your Answer :
${userAnswer !== null ? question.answers[userAnswer] : "Not Answered"}

</p>

<p class="correct-answer">

Correct Answer :
${question.answers[question.correct]}

</p>

</div>

`;
  });
};

let restartQuiz = () => {
  clearInterval(timerInterval);

  currentQuestionIndex = 0;

  score = 0;

  filteredQuestions = [];

  totalQuestions = 0;

  bestStreak = 0;

  totalTimeSpent = 0;

  questionsAnswered = 0;

  statsBox.innerHTML = "";

  achievements.innerHTML = "";

  reviewAnswers.innerHTML = "";

  document.querySelector(".score-number").textContent = "";

  document.querySelector(".score-percentage").textContent = "";

  document.querySelector("#resultMessage").textContent = "";

  bestScore.textContent = "";

  currentStreak = 0;

  progressFill.style.width = "0%";

  timer.textContent = "0s";

  timer.style.color = "#4338ca";

  selectedAnswer = null;

  userAnswers = [];

  streak.textContent = 0;

  nextBtn.style.display = "none";

  quizBox.style.display = "none";

  resultsBox.style.display = "none";

  difficultyBox.style.display = "block";
};

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    category = btn.dataset.category;
  });
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");

    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");

    themeBtn.textContent = "🌙";
  }
});

difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let selectedQuestions;

    if (btn.classList.contains("easy")) {
      difficulty = "easy";
    } else if (btn.classList.contains("medium")) {
      difficulty = "medium";
    } else {
      difficulty = "hard";
    }

    if (category === "js") {
      quizTitle.textContent = "JavaScript Arena Quiz";
    } else if (category === "html") {
      quizTitle.textContent = "HTML Arena Quiz";
    } else if (category === "css") {
      quizTitle.textContent = "CSS Arena Quiz";
    } else {
      quizTitle.textContent = "Mixed Arena Quiz";
    }

    if (category === "js") {
      selectedQuestions = [...quizQuestions];
    } else if (category === "html") {
      selectedQuestions = [...htmlQuestions];
    } else if (category === "css") {
      selectedQuestions = [...cssQuestions];
    } else {
      selectedQuestions = [...quizQuestions, ...htmlQuestions, ...cssQuestions];
    }

    shuffleArray(selectedQuestions);

    if (difficulty === "easy") {
      filteredQuestions = selectedQuestions.slice(0, 5);
    } else if (difficulty === "medium") {
      filteredQuestions = selectedQuestions.slice(0, 10);
    } else {
      filteredQuestions = selectedQuestions;
    }

    filteredQuestions = filteredQuestions.map((q) => shuffleAnswers(q));

    totalQuestions = filteredQuestions.length;

    // Reset Quiz State
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    currentStreak = 0;
    bestStreak = 0;

    totalTimeSpent = 0;
    questionsAnswered = 0;

    selectedAnswer = null;

    streak.textContent = "0";

    progressFill.style.width = "0%";
    nextBtn.style.display = "none";

    difficultyBox.style.display = "none";

    showLoader(() => {
      quizBox.style.display = "block";
      quizBox.classList.add("screen");
      loadQuestions();
    });
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    introLoader.classList.add("intro-hide");

    setTimeout(() => {
      introLoader.remove();

      container.style.display = "block";
      difficultyBox.style.display = "block";
    }, 600);
  }, 1400);
});

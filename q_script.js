'use strict'
const totalScore = {};

const topToQ1 = document.getElementById('top-btn');

topToQ1.addEventListener('click', function() {
  const getQ1 = document.getElementById("q-1");
  const getTop = document.getElementById("top-page");
  getQ1.style.display = "block";
  getTop.style.display = "none";
});

function q1Judge(q1Select) {
  const getNextOne = document.getElementById("q1-btn");
  let q1Result = 0;
  if (q1Select === "A") {
    q1Result = 10;
    q1A.style.background = "lime";
    q1B.style.background = "silver";
    q1C.style.background = "silver";
    q1D.style.background = "silver";
  } else if (q1Select === "B") {
    q1Result = 0;
    q1A.style.background = "silver";
    q1B.style.background = "lime";
    q1C.style.background = "silver";
    q1D.style.background = "silver";
  } else if (q1Select === "C") {
    q1Result = 0;
    q1A.style.background = "silver";
    q1B.style.background = "silver";
    q1C.style.background = "lime";
    q1D.style.background = "silver";
  } else {
    q1Result = 0;
    q1A.style.background = "silver";
    q1B.style.background = "silver";
    q1C.style.background = "silver";
    q1D.style.background = "lime";
  }
  getNextOne.style.display = "block";
  totalScore["q1"] = q1Result;
}

const q1A = document.getElementById("q1-Abtn");
const q1B = document.getElementById("q1-Bbtn");
const q1C = document.getElementById("q1-Cbtn");
const q1D = document.getElementById("q1-Dbtn");

let q1Score = 0;

q1A.addEventListener("click", function() {
  q1Judge("A");
});
q1B.addEventListener("click", function() {
  q1Judge("B");
});
q1C.addEventListener("click", function() {
  q1Judge("C");
});
q1D.addEventListener("click", function() {
  q1Judge("D");
});

const Q1ToQ2 = document.getElementById('q1-btn');

Q1ToQ2.addEventListener('click', function() {
  const getQ1 = document.getElementById("q-1");
  const getQ2 = document.getElementById("q-2");
  getQ1.style.display = "none";
  getQ2.style.display = "block";
});

function q2Judge(q2Select) {
  const getNextTwo = document.getElementById("q2-btn");
  let q2Result = 0;
  if (q2Select === "A") {
    q2Result = 0;
    q2A.style.background = "lime";
    q2B.style.background = "silver";
    q2C.style.background = "silver";
    q2D.style.background = "silver";
  } else if (q2Select === "B") {
    q2Result = 0;
    q2A.style.background = "silver";
    q2B.style.background = "lime";
    q2C.style.background = "silver";
    q2D.style.background = "silver";
  } else if (q2Select === "C") {
    q2Result = 0;
    q2A.style.background = "silver";
    q2B.style.background = "silver";
    q2C.style.background = "lime";
    q2D.style.background = "silver";
  } else {
    q2Result = 10;
    q2A.style.background = "silver";
    q2B.style.background = "silver";
    q2C.style.background = "silver";
    q2D.style.background = "lime";
  }
  getNextTwo.style.display = "block";
  totalScore["q2"] = q2Result;
}

let q2Score = 0;

const q2A = document.getElementById("q2-Abtn");
const q2B = document.getElementById("q2-Bbtn");
const q2C = document.getElementById("q2-Cbtn");
const q2D = document.getElementById("q2-Dbtn");

q2Score = q2A.addEventListener("click", function() {
  q2Judge("A");
});
q2B.addEventListener("click", function() {
  q2Judge("B");
});
q2C.addEventListener("click", function() {
  q2Judge("C");
});
q2D.addEventListener("click", function() {
  q2Judge("D");
});

const Q2ToQ3 = document.getElementById('q2-btn');

Q2ToQ3.addEventListener('click', function() {
  const getQ2 = document.getElementById("q-2");
  const getQ3 = document.getElementById("q-3");
  getQ2.style.display = "none";
  getQ3.style.display = "block";
});

function q3Judge(q3Select) {
  const getNextThree = document.getElementById("q3-btn")
  let q3Result = 0;
  if (q3Select === "A") {
    q3Result = 0;
    q3A.style.background = "lime";
    q3B.style.background = "silver";
    q3C.style.background = "silver";
    q3D.style.background = "silver";
  } else if (q3Select === "B") {
    q3Result = 0;
    q3A.style.background = "silver";
    q3B.style.background = "lime";
    q3C.style.background = "silver";
    q3D.style.background = "silver";
  } else if (q3Select === "C") {
    q3Result = 10;
    q3A.style.background = "silver";
    q3B.style.background = "silver";
    q3C.style.background = "lime";
    q3D.style.background = "silver";
  } else {
    q3Result = 0;
    q3A.style.background = "silver";
    q3B.style.background = "silver";
    q3C.style.background = "silver";
    q3D.style.background = "lime";
  }
  getNextThree.style.display = "block";
  totalScore["q3"] = q3Result;
}

const q3A = document.getElementById("q3-Abtn");
const q3B = document.getElementById("q3-Bbtn");
const q3C = document.getElementById("q3-Cbtn");
const q3D = document.getElementById("q3-Dbtn");

q3A.addEventListener("click", function() {
  q3Judge("A");
});
q3B.addEventListener("click", function() {
  q3Judge("B");
});
q3C.addEventListener("click", function() {
  q3Judge("C");
});
q3D.addEventListener("click", function() {
  q3Judge("D");
});

const Q3ToQ4 = document.getElementById('q3-btn');

Q3ToQ4.addEventListener('click', function() {
  const getQ3 = document.getElementById("q-3");
  const getQ4 = document.getElementById("q-4");
  getQ3.style.display = "none";
  getQ4.style.display = "block";
});

function q4Judge(q4Select) {
  const getNextFour = document.getElementById("q4-btn")
  let q4Result = 0;
  if (q4Select === "A") {
    q4Result = 10;
    q4A.style.background = "lime";
    q4B.style.background = "silver";
    q4C.style.background = "silver";
    q4D.style.background = "silver";
  } else if (q4Select === "B") {
    q4Result = 0;
    q4A.style.background = "silver";
    q4B.style.background = "lime";
    q4C.style.background = "silver";
    q4D.style.background = "silver";
  } else if (q4Select === "C") {
    q4Result = 0;
    q4A.style.background = "silver";
    q4B.style.background = "silver";
    q4C.style.background = "lime";
    q4D.style.background = "silver";
  } else {
    q4Result = 0;
    q4A.style.background = "silver";
    q4B.style.background = "silver";
    q4C.style.background = "silver";
    q4D.style.background = "lime";
  }
  getNextFour.style.display = "block";
  totalScore["q4"] = q4Result;
}

const q4A = document.getElementById("q4-Abtn");
const q4B = document.getElementById("q4-Bbtn");
const q4C = document.getElementById("q4-Cbtn");
const q4D = document.getElementById("q4-Dbtn");

q4A.addEventListener("click", function() {
  q4Judge("A");
});
q4B.addEventListener("click", function() {
  q4Judge("B");
});
q4C.addEventListener("click", function() {
  q4Judge("C");
});
q4D.addEventListener("click", function() {
  q4Judge("D");
});

const Q4ToQ5 = document.getElementById('q4-btn');

Q4ToQ5.addEventListener('click', function() {
  const getQ4 = document.getElementById("q-4");
  const getQ5 = document.getElementById("q-5");
  getQ4.style.display = "none";
  getQ5.style.display = "block";
});

function q5Judge(q5Select) {
  const getNextFive = document.getElementById("q5-btn")
  let q5Result = 0;
  if (q5Select === "A") {
    q5Result = 10;
    q5A.style.background = "lime";
    q5B.style.background = "silver";
    q5C.style.background = "silver";
  } else if (q5Select === "B") {
    q5Result = 0;
    q5A.style.background = "silver";
    q5B.style.background = "lime";
    q5C.style.background = "silver";
  } else {
    q5Result = 0;
    q5A.style.background = "silver";
    q5B.style.background = "silver";
    q5C.style.background = "lime";
  }
  getNextFive.style.display = "block";
  totalScore["q5"] = q5Result;
}

const q5A = document.getElementById("q5-Abtn");
const q5B = document.getElementById("q5-Bbtn");
const q5C = document.getElementById("q5-Cbtn");

q5A.addEventListener("click", function() {
  q5Judge("A");
});
q5B.addEventListener("click", function() {
  q5Judge("B");
});
q5C.addEventListener("click", function() {
  q5Judge("C");
});

const Q5ToQ6 = document.getElementById('q5-btn');

Q5ToQ6.addEventListener('click', function() {
  const getQ5 = document.getElementById("q-5");
  const getQ6 = document.getElementById("q-6");
  getQ5.style.display = "none";
  getQ6.style.display = "block";
});

function q6Judge(q6Select) {
  const getNextSix = document.getElementById("q6-btn")
  let q6Result = 0;
  if (q6Select === "A") {
    q6Result = 0;
    q6A.style.background = "lime";
    q6B.style.background = "silver";
    q6C.style.background = "silver";
    q6D.style.background = "silver";
  } else if (q6Select === "B") {
    q6Result = 10;
    q6A.style.background = "silver";
    q6B.style.background = "lime";
    q6C.style.background = "silver";
    q6D.style.background = "silver";
  } else if (q6Select === "C") {
    q6Result = 0;
    q6A.style.background = "silver";
    q6B.style.background = "silver";
    q6C.style.background = "lime";
    q6D.style.background = "silver";
  } else {
    q6Result = 0;
    q6A.style.background = "silver";
    q6B.style.background = "silver";
    q6C.style.background = "silver";
    q6D.style.background = "lime";
  }
  getNextSix.style.display = "block";
  totalScore["q6"] = q6Result;
}

const q6A = document.getElementById("q6-Abtn");
const q6B = document.getElementById("q6-Bbtn");
const q6C = document.getElementById("q6-Cbtn");
const q6D = document.getElementById("q6-Dbtn");

q6A.addEventListener("click", function() {
  q6Judge("A");
});
q6B.addEventListener("click", function() {
  q6Judge("B");
});
q6C.addEventListener("click", function() {
  q6Judge("C");
});
q6D.addEventListener("click", function() {
  q6Judge("D");
});

const Q6ToQ7 = document.getElementById('q6-btn');

Q6ToQ7.addEventListener('click', function() {
  const getQ6 = document.getElementById("q-6");
  const getQ7 = document.getElementById("q-7");
  getQ6.style.display = "none";
  getQ7.style.display = "block";
});

function q7Judge(q7Select) {
  const getNextSeven = document.getElementById("q7-btn")
  let q7Result = 0;
  if (q7Select === "A") {
    q7Result = 0;
    q7A.style.background = "lime";
    q7B.style.background = "silver";
    q7C.style.background = "silver";
    q7D.style.background = "silver";
  } else if (q7Select === "B") {
    q7Result = 0;
    q7A.style.background = "silver";
    q7B.style.background = "lime";
    q7C.style.background = "silver";
    q7D.style.background = "silver";
  } else if (q7Select === "C") {
    q7Result = 10;
    q7A.style.background = "silver";
    q7B.style.background = "silver";
    q7C.style.background = "lime";
    q7D.style.background = "silver";
  } else {
    q7Result = 0;
    q7A.style.background = "silver";
    q7B.style.background = "silver";
    q7C.style.background = "silver";
    q7D.style.background = "lime";
  }
  getNextSeven.style.display = "block";
  totalScore["q7"] = q7Result;
}

const q7A = document.getElementById("q7-Abtn");
const q7B = document.getElementById("q7-Bbtn");
const q7C = document.getElementById("q7-Cbtn");
const q7D = document.getElementById("q7-Dbtn");

q7A.addEventListener("click", function() {
  q7Judge("A");
});
q7B.addEventListener("click", function() {
  q7Judge("B");
});
q7C.addEventListener("click", function() {
  q7Judge("C");
});
q7D.addEventListener("click", function() {
  q7Judge("D");
});

const Q7ToQ8 = document.getElementById('q7-btn');

Q7ToQ8.addEventListener('click', function() {
  const getQ7 = document.getElementById("q-7");
  const getQ8 = document.getElementById("q-8");
  getQ7.style.display = "none";
  getQ8.style.display = "block";
});

function q8Judge(q8Select) {
  const getNextEight = document.getElementById("q8-btn")
  let q8Result = 0;
  if (q8Select === "A") {
    q8Result = 0;
    q8A.style.background = "lime";
    q8B.style.background = "silver";
    q8C.style.background = "silver";
    q8D.style.background = "silver";
  } else if (q8Select === "B") {
    q8Result = 0;
    q8A.style.background = "silver";
    q8B.style.background = "lime";
    q8C.style.background = "silver";
    q8D.style.background = "silver";
  } else if (q8Select === "C") {
    q8Result = 10;
    q8A.style.background = "silver";
    q8B.style.background = "silver";
    q8C.style.background = "lime";
    q8D.style.background = "silver";
  } else {
    q8Result = 0;
    q8A.style.background = "silver";
    q8B.style.background = "silver";
    q8C.style.background = "silver";
    q8D.style.background = "lime";
  }
  getNextEight.style.display = "block";
  totalScore["q8"] = q8Result;
}

const q8A = document.getElementById("q8-Abtn");
const q8B = document.getElementById("q8-Bbtn");
const q8C = document.getElementById("q8-Cbtn");
const q8D = document.getElementById("q8-Dbtn");

q8A.addEventListener("click", function() {
  q8Judge("A");
});
q8B.addEventListener("click", function() {
  q8Judge("B");
});
q8C.addEventListener("click", function() {
  q8Judge("C");
});
q8D.addEventListener("click", function() {
  q8Judge("D");
});

const Q8ToQ9 = document.getElementById('q8-btn');

Q8ToQ9.addEventListener('click', function() {
  const getQ8 = document.getElementById("q-8");
  const getQ9 = document.getElementById("q-9");
  getQ8.style.display = "none";
  getQ9.style.display = "block";
});

function q9Judge(q9Select) {
  const getNextNine = document.getElementById("q9-btn")
  let q9Result = 0;
  if (q9Select === "A") {
    q9Result = 0;
    q9A.style.background = "lime";
    q9B.style.background = "silver";
    q9C.style.background = "silver";
    q9D.style.background = "silver";
  } else if (q9Select === "B") {
    q9Result = 0;
    q9A.style.background = "silver";
    q9B.style.background = "lime";
    q9C.style.background = "silver";
    q9D.style.background = "silver";
  } else if (q9Select === "C") {
    q9Result = 10;
    q9A.style.background = "silver";
    q9B.style.background = "silver";
    q9C.style.background = "lime";
    q9D.style.background = "silver";
  } else {
    q9Result = 0;
    q9A.style.background = "silver";
    q9B.style.background = "silver";
    q9C.style.background = "silver";
    q9D.style.background = "lime";
  }
  getNextNine.style.display = "block";
  totalScore["q9"] = q9Result;
}

const q9A = document.getElementById("q9-Abtn");
const q9B = document.getElementById("q9-Bbtn");
const q9C = document.getElementById("q9-Cbtn");
const q9D = document.getElementById("q9-Dbtn");

q9A.addEventListener("click", function() {
  q9Judge("A");
});
q9B.addEventListener("click", function() {
  q9Judge("B");
});
q9C.addEventListener("click", function() {
  q9Judge("C");
});
q9D.addEventListener("click", function() {
  q9Judge("D");
});

const Q9ToQ10 = document.getElementById('q9-btn');

Q9ToQ10.addEventListener('click', function() {
  const getQ9 = document.getElementById("q-9");
  const getQ10 = document.getElementById("q-10");
  getQ9.style.display = "none";
  getQ10.style.display = "block";
});

function q10Judge(q10Select) {
  const getNextTen = document.getElementById("q10-btn")
  let q10Result = 0;
  if (q10Select === "A") {
    q10Result = 10;
    q10A.style.background = "lime";
    q10B.style.background = "silver";
    q10C.style.background = "silver";
  } else if (q10Select === "B") {
    q10Result = 0;
    q10A.style.background = "silver";
    q10B.style.background = "lime";
    q10C.style.background = "silver";
  } else {
    q10Result = 0;
    q10A.style.background = "silver";
    q10B.style.background = "silver";
    q10C.style.background = "lime";
  }
  getNextTen.style.display = "block";
  totalScore["q10"] = q10Result;
}

const q10A = document.getElementById("q10-Abtn");
const q10B = document.getElementById("q10-Bbtn");
const q10C = document.getElementById("q10-Cbtn");

q10A.addEventListener("click", function() {
  q10Judge("A");
});
q10B.addEventListener("click", function() {
  q10Judge("B");
});
q10C.addEventListener("click", function() {
  q10Judge("C");
});

function finalResult() {
  const getFinal = document.getElementsByClassName("result");
  const getQ10 = document.getElementById("q-10");
  const getEnd = document.getElementById("end-page");
  getQ10.style.display = "none";
  getEnd.style.display = "block";
  getFinal[0].innerText = totalScore["q1"] + totalScore["q2"] + totalScore["q3"] + totalScore["q4"] + totalScore["q5"] + totalScore["q6"] + totalScore["q7"] + totalScore["q8"] + totalScore["q9"] + totalScore["q10"];
}

const q10ToEnd = document.getElementById("q10-btn");
q10ToEnd.addEventListener("click", finalResult);

const EndToTop = document.getElementById('finish-btn');

EndToTop.addEventListener('click', function() {
  location.reload();
});

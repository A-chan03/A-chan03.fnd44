'use strict'
let totalScore = 0;

const topToQ1 = document.getElementById('top-btn');

topToQ1.addEventListener('click', function() {
  const getQ1 = document.getElementById("q-1");
  const getTop = document.getElementById("top-page");
  getQ1.style.display = "block";
  getTop.style.display = "none";
});

function q1Judge(q1Select) {
  console.log(q1Select);
  if (q1Select === "A") {
    totalScore = totalScore + 10;
  } else {
    ;
  }
  console.log(totalScore);
  return totalScore;
}

const q1A = document.getElementById("q1-Abtn");
const q1B = document.getElementById("q1-Bbtn");
const q1C = document.getElementById("q1-Cbtn");
const q1D = document.getElementById("q1-Dbtn");

q1A.addEventListener("click", function() {
  q1Judge("A");
});

const Q1ToQ2 = document.getElementById('q1-btn');

Q1ToQ2.addEventListener('click', function() {
  const getQ1 = document.getElementById("q-1");
  const getQ2 = document.getElementById("q-2");
  getQ1.style.display = "none";
  getQ2.style.display = "block";
});

const Q2ToQ3 = document.getElementById('q2-btn');

Q2ToQ3.addEventListener('click', function() {
  const getQ2 = document.getElementById("q-2");
  const getQ3 = document.getElementById("q-3");
  getQ2.style.display = "none";
  getQ3.style.display = "block";
});

const Q3ToQ4 = document.getElementById('q3-btn');

Q3ToQ4.addEventListener('click', function() {
  const getQ3 = document.getElementById("q-3");
  const getQ4 = document.getElementById("q-4");
  getQ3.style.display = "none";
  getQ4.style.display = "block";
});

const Q4ToQ5 = document.getElementById('q4-btn');

Q4ToQ5.addEventListener('click', function() {
  const getQ4 = document.getElementById("q-4");
  const getQ5 = document.getElementById("q-5");
  getQ4.style.display = "none";
  getQ5.style.display = "block";
});

const Q5ToQ6 = document.getElementById('q5-btn');

Q5ToQ6.addEventListener('click', function() {
  const getQ5 = document.getElementById("q-5");
  const getQ6 = document.getElementById("q-6");
  getQ5.style.display = "none";
  getQ6.style.display = "block";
});

const Q6ToQ7 = document.getElementById('q6-btn');

Q6ToQ7.addEventListener('click', function() {
  const getQ6 = document.getElementById("q-6");
  const getQ7 = document.getElementById("q-7");
  getQ6.style.display = "none";
  getQ7.style.display = "block";
});

const Q7ToQ8 = document.getElementById('q7-btn');

Q7ToQ8.addEventListener('click', function() {
  const getQ7 = document.getElementById("q-7");
  const getQ8 = document.getElementById("q-8");
  getQ7.style.display = "none";
  getQ8.style.display = "block";
});

const Q8ToQ9 = document.getElementById('q8-btn');

Q8ToQ9.addEventListener('click', function() {
  const getQ8 = document.getElementById("q-8");
  const getQ9 = document.getElementById("q-9");
  getQ8.style.display = "none";
  getQ9.style.display = "block";
});

const Q9ToQ10 = document.getElementById('q9-btn');

Q9ToQ10.addEventListener('click', function() {
  const getQ9 = document.getElementById("q-9");
  const getQ10 = document.getElementById("q-10");
  getQ9.style.display = "none";
  getQ10.style.display = "block";
});

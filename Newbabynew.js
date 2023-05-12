function anyScore(num, scoreId) {
  const scoreSpan = document.querySelector(`#${scoreId}`);
  scoreSpan.textContent = parseInt(scoreSpan.innerHTML) + num;
}
const scoreSpan = document.querySelector("#t1scoreId");

const t1threeMadeBtn = document.querySelector("#t1threeMadeBtn");
const t1threeMissBtn = document.querySelector("#t1threeMissBtn");
// const t1threeMissSpan = document.querySelector("#t1threeMissSpan");

const t1twoMadeBtn = document.querySelector("#t1twoMadeBtn");
const t1twoMissBtn = document.querySelector("#t1twoMissBtn");

const t1offRebBtn = document.querySelector("#t1offRebBtn");
const t1defRebBtn = document.querySelector("#t1defRebBtn");

const t1assistBtn = document.querySelector("#t1assistBtn");

const t1turnBtn = document.querySelector("#t1turnBtn");
//----------------------------------------------------------
// TEAM ONE
t1threeMadeBtn.addEventListener("click", function () {
  anyScore(3, "t1scoreId");
  anyScore(1, "t1threeMadeSpan");
  anyScore(1, "t1threeMissSpan");
});
t1threeMissBtn.addEventListener("click", function () {
  anyScore(1, "t1threeMissSpan");
});

t1twoMadeBtn.addEventListener("click", function () {
  anyScore(2, "t1scoreId");
  anyScore(1, "t1twoMadeSpan");
  anyScore(1, "t1twoMissSpan");
});
t1twoMissBtn.addEventListener("click", function () {
  anyScore(1, "t1twoMissSpan");
});

t1offRebBtn.addEventListener("click", function () {
  anyScore(1, "t1offRebspan");
  anyScore(1, "t1totalRebspan");
});
t1defRebBtn.addEventListener("click", function () {
  anyScore(1, "t1defRebspan");
  anyScore(1, "t1totalRebspan");
});

t1assistBtn.addEventListener("click", function () {
  anyScore(1, "t1assitSpan");
});

t1turnBtn.addEventListener("click", function () {
  anyScore(1, "t1turnSpan");
});

//----------------------------------------------------------
// TEAM TWO
const t2threeMadeBtn = document.querySelector("#t2threeMadeBtn");
const t2threeMissBtn = document.querySelector("#t2threeMissBtn");

const t2twoMadeBtn = document.querySelector("#t2twoMadeBtn");
const t2twoMissBtn = document.querySelector("#t2twoMissBtn");

const t2offRebBtn = document.querySelector("#t2offRebBtn");
const t2defRebBtn = document.querySelector("#t2defRebBtn");

const t2assistBtn = document.querySelector("#t2assistBtn");

const t2turnBtn = document.querySelector("#t2turnBtn");

t2threeMadeBtn.addEventListener("click", function () {
  anyScore(3, "t2scoreId");
  anyScore(1, "t2threeMadeSpan");
  anyScore(1, "t2threeMissSpan");
});
t2threeMissBtn.addEventListener("click", function () {
  anyScore(1, "t2threeMissSpan");
});

t2twoMadeBtn.addEventListener("click", function () {
  anyScore(2, "t2scoreId");
  anyScore(1, "t2twoMadeSpan");
  anyScore(1, "t2twoMissSpan");
});
t2twoMissBtn.addEventListener("click", function () {
  anyScore(1, "t2twoMissSpan");
});

t2defRebBtn.addEventListener("click", function () {
  anyScore(1, "t2defRebSpan");
  anyScore(1, "t2totalRebSpan");
});
t2offRebBtn.addEventListener("click", function () {
  anyScore(1, "t2offRebSpan");
  anyScore(1, "t2totalRebSpan");
});

t2assistBtn.addEventListener("click", function () {
  anyScore(1, "t2assitSpan");
});

t2turnBtn.addEventListener("click", function () {
  anyScore(1, "t2turnSpan");
});

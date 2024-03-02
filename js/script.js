"use strict";
// DATA
const startTime = [2, 3, 5, 7, 8];
const stopTime = [4, 7, 12, 9, 12];
const startLiter = [10, 20, 6, 12, 10];
const endLiter = [7, 9, 5, 5, 8, 5];

// loop all the

const displayResult = (
  start,
  stop,
  Liter1,
  liter2,
  runningHours,
  usedDiesel,
  consumptionRate
) => {
  const startTimeDisplay = (document.querySelector("#starttime").textContent =
    start);
  const stopTimeDisplay = (document.querySelector("#stoptime").textContent =
    stop);
  const initialFuelDisplay = (document.querySelector("#startfuel").textContent =
    Liter1);
  const finalFuelDisplay = (document.querySelector("#stopfuel").textContent =
    liter2);
  const rateDisplay = (document.querySelector("#rate").textContent =
    consumptionRate.toFixed(2));
  const usedFuelDisplay = (document.querySelector("#usedliters").textContent =
    usedDiesel);
  const runningHourDisplay = (document.querySelector("#usedtime").textContent =
    runningHours);
};

const CalculateResult = () => {
  const randomGen = Math.floor(Math.random() * 4) + 1;

  const start = startTime.at(randomGen);
  const stop = stopTime.at(randomGen);
  const Liter1 = startLiter.at(randomGen);
  const liter2 = endLiter.at(randomGen);
  const runningHours = stop - start;
  console.log(runningHours);
  let usedDiesel = Math.abs(Liter1 - liter2);
  usedDiesel = isNaN(usedDiesel) ? 0.0 : usedDiesel;

  let consumptionRate = Math.abs(
    Math.round(usedDiesel) / Math.round(runningHours)
  );

  const isNan = isNaN(consumptionRate);
  if (consumptionRate == Infinity || isNan) {
    consumptionRate = 0.0;
  }

  console.log(consumptionRate);

  displayResult(
    start,
    stop,
    Liter1,
    liter2,
    runningHours,
    usedDiesel,
    consumptionRate
  );
};

setInterval(CalculateResult, 4000);

let leaveDashboard;
const loaderDiv = document.querySelector("#loader");
const ongoingclass = document.querySelector("#ongoingclass");

const delayLoad = () => {
  loaderDiv.style.display = "none";
  ongoingclass.style.display = "block";
};

setTimeout(delayLoad, 5000);
const confirmUser = () => {
  leaveDashboard = confirm(
    "Sure you want to leave your online Diesel Tracking Dashboard ?"
  );
  if (leaveDashboard) {
    loaderDiv.style.display = "block";
    ongoingclass.style.display = "none";
    setTimeout(function () {
      location.assign("https://www.google.com");
    }, 3000);
  }
};
const okBtn = document
  .querySelector("#okBTN")
  .addEventListener("click", confirmUser);

// GIVEN THAT CONSUMPTION RATE IS CALCULATED BY TH
// Consumption Rate per Hour = 10 liters / 24 hours = 0.4167 liters per hour

let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");


const targetDate = new Date("2024-07-22T00:00:00");

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

const getCountdown = () => {
  let nowDate = new Date().getTime();
  let tempsRestantEnMs = targetDate - nowDate;

  // jours
  let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);

  // heures
  let resteTempsSansJoursMs = tempsRestantEnMs % unJourEnMs;
  let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

  // minutes
  let resteTempsSansHeuresMs = resteTempsSansJoursMs % uneHeureEnMs;
  let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);

  // secondes
  let resteTempsSansMinutesMs = resteTempsSansHeuresMs % uneMinuteEnMs;
  let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

  joursEl.textContent = nbJours;
  heuresEl.textContent = nbHeures;
  minutesEl.textContent = nbMinutes;
  secondesEl.textContent = nbSecondes;

  if (tempsRestantEnMs <= 0) {
    clearInterval(countDownInterval);
    joursEl.textContent = 0;
    heuresEl.textContent = 0;
    minutesEl.textContent = 0;
    secondesEl.textContent = 0;
    titleEl.innerHTML = "Audit AFNOR 2024 !!!";
  }
}

let countDownInterval = setInterval(getCountdown, 1000);


getCountdown();


const typewriterEl = document.getElementById('typewriter');
const message = "Société Gabonaise de Raffinage";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    typewriterEl.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      typewriterEl.textContent = '';
      index = 0;
      typeWriter();
    }, 3000);
  }
}


typeWriter();

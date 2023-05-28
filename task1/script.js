"use strict";

const task1Handler = () => {
  const newVar = 123;
  console.log("newVar type:", typeof newVar); // 'number'
  if (typeof newVar === "number") {
    if (newVar > 100) {
      console.log("Число больше 100");
      return;
    }
    console.log("Число меньше 100");
    return;
  }
  console.log("Это не число");
};

const task1_1Handler = () => {
  const sign = document.querySelector("#select1_1").value;
  let greeting = "";
  switch (sign) {
    case "Aries":
      greeting = "Овен";
      break;
    case "Leo":
      greeting = "Лев";
      break;
    case "Sagittarius":
      greeting = "Стрелец";
      break;
    case "Taurus":
      greeting = "Телец";
      break;
    case "Virgo":
      greeting = "Дева";
      break;
    case "Capricorn":
      greeting = "Козерог";
      break;
    case "Gemini":
      greeting = "Близнецы";
      break;
    case "Libra":
      greeting = "Весы";
      break;
    case "Aquarius":
      greeting = "Водолей";
      break;
    case "Cancer":
      greeting = "Рак";
      break;
    case "Scorpio":
      greeting = "Скорпион";
      break;
    case "Pisces":
      greeting = "Рыба";
      break;
    default:
      greeting = "Неизвестный знак";
  }
  alert(`Привет ${greeting}!`);
};

const task2Handler = () => {
  // 1
  for (let i = 0; i < 40; i++) console.log(i);

  // 2
  let i = 0;
  while (i < 40) console.log(i++);

  // 3
  i = 0;
  do console.log(i++);
  while (i < 40);
};

const task3Handler = () => {
  if (!confirm("Вы уверены что хотите запустить вирусы?")) return;
  while (true) confirm("Вирусы!");
};

const congratsAlerts = [
  "Верно! Как у вас это получилось?",
  "Вау! Я бы точно не смог с первого раза",
  "Правильно! Вы сегодня в ударе",
  "С такими знаниями вам нет равных!",
];
const sorryPrompts = [
  "Кажется вы не уловили суть..",
  "Попробуйте ещё раз",
  "Далеко не у всех получается это сделать",
  "Неверно! Ещё разок?",
];

const randomInt = (a, b) => Math.floor(Math.random() * b + a);

const task6Handler = () => {
  const input = prompt("Сможете ввести число больше 5??");
  if (input === null) return;

  if (Number(input) > 5)
    alert(congratsAlerts[randomInt(0, congratsAlerts.length)]);
  else
    confirm(sorryPrompts[randomInt(0, sorryPrompts.length)]) && task6Handler();
};

const task9Handler = () => {
  const input = document.querySelector("#input9").value;
  if (input === "" || isNaN(input)) {
    alert("Это вообще не число! За кого вы меня принимаете?");
    return;
  }

  let sum = 0;
  for (const c of input) sum += Math.pow(c, input.length);
  if (sum === +input) alert("Это число Армстронга!");
  else alert("Это не число Армстронга..");
};

document.querySelector("#task1").addEventListener("click", task1Handler);
document.querySelector("#task1_1").addEventListener("click", task1_1Handler);
document.querySelector("#task2").addEventListener("click", task2Handler);
document.querySelector("#task3").addEventListener("click", task3Handler);
document.querySelector("#task6").addEventListener("click", task6Handler);
document.querySelector("#task9").addEventListener("click", task9Handler);

"use strict";

const task9Handler = () => {
  const input = document.querySelector("#input9").value;
  const arr = input.split(",");
  const res = arr
    .map((item) => item.trim())
    .map((item) => (item !== "" ? Math.sqrt(item) : item))
    .map((item) => {
      if (isNaN(item)) return "Не число";
      if (item === "") return "Пустая строка";
      return item;
    });
  console.log(res);
};

const monthLabel = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

const task10Handler = () => {
  const date = new Date();
  const stringDate = [
    date.getDate(),
    monthLabel[date.getMonth()],
    date.getFullYear(),
    "года",
  ].join(" ");

  console.log("Дата:", stringDate);
};

const randomInt = (a, b) => Math.floor(Math.random() * b + a);

const task11Handler = () => {
  const num1 = randomInt(0, 50);
  console.log("Число 1:", num1);
  const num2 = randomInt(0, 50);
  console.log("Число 2:", num2);
  console.log("Произведение:", num1 * num2);
};

document.querySelector("#task9").addEventListener("click", task9Handler);
document.querySelector("#task10").addEventListener("click", task10Handler);
document.querySelector("#task11").addEventListener("click", task11Handler);

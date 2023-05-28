"use strict";

const task1Handler = () => {
  var student = {
    name: "Студент вася",
    course: 2,
    getName() {
      return this.name;
    },
  };
  var student = new Object({
    name: "Студент вася",
    course: 2,
    getName() {
      return this.name;
    },
  });

  console.log(student);
};

class InpitStudent {
  #name;
  #age;
  #course;
  #speciality;
  #avgScore;

  constructor({ name, age, course, speciality, avgScore }) {
    this.#name = name;
    this.#age = age;
    this.#course = course;
    this.#speciality = speciality;
    this.#avgScore = avgScore;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  set speciality(speciality) {
    this.#speciality = speciality;
  }

  get speciality() {
    return this.#speciality;
  }
}

const task3Handler = () => {
  const student = new InpitStudent({
    name: "Вася",
    age: 18,
    course: 1,
    speciality: "IFST",
    avgScore: 3.5,
  });
  console.log("Имя", student.name);
  console.log("Возраст", student.age);
  console.log("Специальность", student.speciality);
};

document.querySelector("#task1").addEventListener("click", task1Handler);
document.querySelector("#task3").addEventListener("click", task3Handler);

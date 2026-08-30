// polimorphism

class Player {
  // Private property
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age);
    this.centuries = centuries;
  }

  getPlayerDetails() {
    return `${this.getName()} is  ${this.getAge()} years old and hae retirement in cricket`;
  }
}

class Footballer extends Player {
  constructor(name, age, goals) {
    super(name, age);
    this.goals = goals;
  }
}

const anamul = new Cricketer("Anamul", 25, 15);

const ronaldho = new Footballer("Ronaldho", 39, 687);

console.log(anamul.getPlayerDetails(), "\n", ronaldho.getPlayerDetails());

// Inheritance

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getPlayerDetails() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age);
    this.centuries = centuries;
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

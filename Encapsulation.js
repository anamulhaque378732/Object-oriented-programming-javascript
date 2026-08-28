class Programmer {
  // private Property

  #birthDay;
  #monthlySalary;

  constructor(name, birthday, monthlySalary, noOfMonths) {
    this.name = name;
    this.#birthDay = birthday;
    this.#monthlySalary = monthlySalary;
    this.noOfMonths = noOfMonths;
  }

  calculateAge() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthlySalary * this.noOfMonths).toLocaleString();
  }
}

const raihan = new Programmer("Raihan", "2001-10-31", 30000, 12);

const momin = new Programmer("Momin", "2001-09-28", 30200, 12);

console.log(raihan.calculateAge());
console.log(raihan.getSalary());

let anamul = {
  name: "Anamul haque",
  birthDay: "2001-10-21",
  monthlySalary: 20000,
  noOfMonths: 12,

  calculateAge() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  },

  getSalary() {
    return (this.monthlySalary * this.noOfMonths).toLocaleString();
  },
};

// console.log(anamul.calculateAge());
// console.log(anamul.getSalary());

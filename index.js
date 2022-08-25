class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${firstname} ${lastname}`;
    this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
  }
}
emp1 = new Employee("John", "Smith");
emp2 = new Employee("Mary", "Sue");
emp3 = new Employee("Antony", "Walker");

console.log(emp1.fullname);
console.log(emp2.email);
console.log(emp3.firstname);

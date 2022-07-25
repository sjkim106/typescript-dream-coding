{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!`);
    }
    workFulltime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`full time!`);
    }

    workPartime() {}
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }
  const paul = new FullTimeEmployee();
  const mike = new PartTimeEmployee();

  const paulAfterPay = pay(paul);
  const mikeAfterPay = pay(mike);
}

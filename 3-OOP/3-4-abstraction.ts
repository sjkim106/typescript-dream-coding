{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeMaker {
    makeCoffe(shots: number): CoffeeCup;
    fillCoffeBeans(beans: number): void;
    clean(): void;
  }
  class CoffeMachine implements CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
    }

    clean() {
      console.log("cleaning the machine");
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be breateer than 0");
      } else {
        this.coffeeBeans += beans;
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindbeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    private grindbeans(shots) {
      if (this.coffeeBeans > shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enouph coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... ");
    }

    private extract(shots: number): CoffeeCup {
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeMachine.makeMachine(50);
  maker.fillCoffeeBeans(50);
  maker.fillCoffeeBeans(30);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(age: number) {
      this.internalAge = age;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  class AmateurUser {
    constructor(private machine: CoffeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class proBarista {
    constructor(private machine: CommercialCoffeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffe(2);
      console.log(coffee);
      this.machine.fillCoffeBeans(50);
      this.machine.clean();
    }
  }
}

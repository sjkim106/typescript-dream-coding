{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  class CoffeMachine implements CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
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

  class CaffeLatteMachine extends CoffeMachine {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines = [
    new CoffeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16),
    new CoffeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("------------------");
    machine.makeCoffee(1);
  });
  1;

  const maker = CoffeMachine.makeMachine(50);
  maker.fillCoffeeBeans(50);
  maker.fillCoffeeBeans(30);

  const latteMachine = new CaffeLatteMachine(23);
  latteMachine.fillCoffeeBeans(50);
  latteMachine.makeCoffee(10);
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
}

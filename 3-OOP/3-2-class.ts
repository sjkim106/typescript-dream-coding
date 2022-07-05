{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans > shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enouph coffee beans!");
      }

      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;

      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeMaker(50);
}

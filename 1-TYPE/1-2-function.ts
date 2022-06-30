{
  //Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //Javascript
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //TypeScript
  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Javascript => TypeScript
  //Optional parameter
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }

  //Default Parameter
  function printMessage(message: string = "default message"): void {
    console.log(message);
  }

  //Array Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}

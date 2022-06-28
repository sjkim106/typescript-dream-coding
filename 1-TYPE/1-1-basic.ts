{
  /**
   * JavaScript
   * Primitive : number, string, boolean, null, undefined
   * Object : function, Array ....
   * */

  // number
  const num: number = 6;

  //string
  const str: string = "";

  //boolean
  const boal: boolean = false;

  //undefined
  let age: number | undefined;
  age = undefined;
  age = 1;

  //null
  let person: string | null;

  // Undefined, null은 위와 같이 홀로 쓰이지 않고 다른 타입과 함께 선언된다.

  //unknown
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any
  let anything: any = 0;
  anything = "hello";

  function print(): void {
    console.log("hello");
  }

  //never
  function throwError(message: string): never {
    // message -> server (log)

    throw new Error(message);
  }

  //object
  let obj: object = [1, 4];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "sj" });
}

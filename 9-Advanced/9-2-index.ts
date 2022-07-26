{
  const obj = {
    name: "ellie",
  };

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "femail";
  };

  type Name = Animal["name"];
  const text: Name = "hello";

  type Gender = Animal["gender"];

  type Keys = keyof Animal;
}

{
  type Text = string;
  const name: Text = "sj";
  const address: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "kim",
    age: 35,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let sjName: Name;
  sjName = "name";
}

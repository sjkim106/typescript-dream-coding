{
  type PositionType = {
    x: number;
    y: number;
  };

  type ZPositionType = PositionType & { z: number };

  interface PositionInterface {
    x: number;
    y: number;
  }

  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  type Person = {
    name: string;
    age: number;
  };
}

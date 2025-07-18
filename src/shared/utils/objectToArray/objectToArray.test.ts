import { objectToArray } from "./objectToArray";

describe("objectToArray", () => {
  it("converts an object into an array with the addition of an id", () => {
    const input = {
      a1: { name: "Alice", age: 30 },
      b2: { name: "Bob", age: 25 },
    };

    const result = objectToArray(input);

    expect(result).toEqual([
      { id: "a1", name: "Alice", age: 30 },
      { id: "b2", name: "Bob", age: 25 },
    ]);
  });

  it("returns an empty array if the object is empty", () => {
    const input = {};
    const result = objectToArray(input);
    expect(result).toEqual([]);
  });

  it("works with different types of values", () => {
    const input = {
      item1: { title: "Test", completed: true },
      item2: { title: "Another", completed: false },
    };

    const result = objectToArray(input);

    expect(result).toEqual([
      { id: "item1", title: "Test", completed: true },
      { id: "item2", title: "Another", completed: false },
    ]);
  });

  it("saves the typing correctly", () => {
    type User = { name: string; admin: boolean };
    const input: Record<string, User> = {
      u1: { name: "Admin", admin: true },
      u2: { name: "Guest", admin: false },
    };

    const result = objectToArray(input);

    result.forEach((user) => {
      expect(typeof user.id).toBe("string");
      expect(typeof user.name).toBe("string");
      expect(typeof user.admin).toBe("boolean");
    });
  });
});

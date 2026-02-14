import { uuid } from "./uuid";

describe("uuid", () => {
  it("returns a string", () => {
    expect(typeof uuid()).toBe("string");
  });

  it("returns valid UUID v4 format", () => {
    const value = uuid();
    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(value).toMatch(uuidV4Regex);
  });

  it("returns unique values", () => {
    const set = new Set(Array.from({ length: 100 }, () => uuid()));
    expect(set.size).toBe(100);
  });
});

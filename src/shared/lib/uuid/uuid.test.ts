import { uuid } from "./uuid";

describe("generateUniqueId", () => {
  const ID_PARTS_COUNT = 2;
  const RANDOM_PART_LENGTH = 8;
  const UNIQUE_CALLS_COUNT = 1000;
  const PERFORMANCE_CALLS_COUNT = 10000;
  const MAX_EXECUTION_TIME_MS = 100;

  it("should return a string in the timestamp-random format", () => {
    const id = uuid();
    expect(typeof id).toBe("string");

    const parts = id.split("-");
    expect(parts.length).toBe(ID_PARTS_COUNT);

    const [timestamp, random] = parts;
    expect(timestamp).toMatch(/^[a-z0-9]+$/);
    expect(random).toMatch(new RegExp(`^[a-z0-9]{${RANDOM_PART_LENGTH}}$`));
  });

  it("must generate unique values for multiple calls", () => {
    const ids = new Set();

    for (let i = 0; i < UNIQUE_CALLS_COUNT; i++) {
      ids.add(uuid());
    }

    expect(ids.size).toBe(UNIQUE_CALLS_COUNT);
  });

  it("must work stably and quickly", () => {
    const start = performance.now();
    for (let i = 0; i < PERFORMANCE_CALLS_COUNT; i++) {
      uuid();
    }
    const end = performance.now();

    expect(end - start).toBeLessThan(MAX_EXECUTION_TIME_MS);
  });
});

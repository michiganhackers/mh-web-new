import { OSADistance } from "./EditDistance";

describe("Edit Distance correctness", () => {
  it("should return 0 for empty strings", () => {
    expect(OSADistance("", "")).toBe(0);
  });

  it("should be correct for simple cases regardless of order", () => {
    expect(OSADistance("CA", "ABC")).toBe(3);
    expect(OSADistance("ABC", "CA")).toBe(3);
    expect(OSADistance("an act", "a cat")).toBe(2);
    expect(OSADistance("a cat", "an act")).toBe(2);
    expect(OSADistance("kitten", "sitting")).toBe(3);
    expect(OSADistance("sitting", "kitten")).toBe(3);
    expect(OSADistance("kitten", "sittin")).toBe(2);
    expect(OSADistance("sittin", "kitten")).toBe(2);
  });

  it("should handle common route misspellings", () => {
    // misspelling is on the left, correct is on the right
    expect(OSADistance("faqs", "faq")).toBe(1);
    expect(OSADistance("teams", "team")).toBe(1);
    expect(OSADistance("event", "events")).toBe(1);
  });
});

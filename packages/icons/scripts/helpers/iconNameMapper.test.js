const iconNameMapper = require("./iconNameMapper");

describe("Icon name mapper", () => {
  it("should...", () => {
    const actual = iconNameMapper("iconName");

    expect(actual).toBe("case iconName = \"iconName\"\n");
  });
});
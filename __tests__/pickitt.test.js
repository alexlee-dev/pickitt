const {
  posOrNeg,
  randItem,
  readIt,
  titleScreen,
  writeIt
} = require("../lib/index");
const path = require("path");

describe("posOrNeg(", () => {
  test("Should return a positive or negative 1.", () => {
    const val = posOrNeg();
    expect(val === -1 || val === 1).toBeTruthy();
  });
});

describe("randItem()", () => {
  test("Should return a random item from the group.", () => {
    const group = [1, 2, 3];
    const item = randItem(group);
    expect(item === 1 || item === 2 || item === 3).toBeTruthy();
  });
  test("Should throw an error if group is not an array.", () => {
    expect(() => randItem(50)).toThrow();
  });
});

describe("readIt()", () => {
  test("Should read from a file.", async () => {
    const fileContents = await readIt(
      path.join(__dirname, "./data/example.json")
    );
    expect(fileContents.name).toBe("Alex");
  });
});

describe("titleScreen()", () => {
  test("Should display a title.", async () => {
    await titleScreen("Title");
  });
});

describe("writeIt()", () => {
  test("Should write to a file.", async () => {
    await writeIt(
      path.join(__dirname, "./data/written.json"),
      JSON.stringify({ pi: 3.14 })
    );

    const fileContents = await readIt(
      path.join(__dirname, "./data/written.json")
    );
    expect(fileContents.pi).toBe(3.14);
  });
});

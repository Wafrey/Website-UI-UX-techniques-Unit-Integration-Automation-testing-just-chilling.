const googleSearch = require("./script");

dbMock = [
  "sirene.com",
  "spageti.com",
  "neshtosi.com",
  "searchme.com",
  "checkit.com",
];
describe("googleSearch", () => {
  it("this is silly test", () => {
    expect("helloWorld").toBe("helloWorld");
  });

  it("is searching google works", () => {
    expect(googleSearch("sirene", dbMock)).toEqual(["sirene.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});

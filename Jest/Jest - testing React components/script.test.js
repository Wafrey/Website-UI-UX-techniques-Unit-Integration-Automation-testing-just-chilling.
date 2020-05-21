const googleSearch = require("./script");

dbMock = [
  "sirene.com",
  "spageti.com",
  "neshtosi.com",
  "searchme.com",
  "checkit.com",
];

it("this is silly test", () => {
  expect("helloWorld").toBe("helloWorld");
});

it("is searching google works", () => {
  expect(googleSearch("sirene", dbMock)).toEqual(["sirene.com"]);
});

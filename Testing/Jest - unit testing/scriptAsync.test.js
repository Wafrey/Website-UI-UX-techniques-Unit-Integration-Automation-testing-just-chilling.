const fetch = require("node-fetch");
const swapi = require("./scriptAsync.js");

describe("async code test", () => {
  it("calls swapi to get people", (done) => {
    expect.assertions(1);
    swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(82);
      done();
    });
  });

  it("calls swapi to get people", (done) => {
    expect.assertions(2);
    swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(82);
      expect(data.results.length).toBeGreaterThan(5);
      done();
    });
  });
});

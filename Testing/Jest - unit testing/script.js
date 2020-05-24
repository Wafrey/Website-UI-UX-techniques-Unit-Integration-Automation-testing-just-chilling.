const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "naruto.com",
  "dogs.com",
  "sasuke-uchiha.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch("sasuke", googleDatabase));

module.exports = googleSearch;

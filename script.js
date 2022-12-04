const span = document.querySelector("span");
const p = document.querySelector("p");
let fetchedAdresses = [];
let countryNames = [];
let countryInfo = [];
const userValue = 2;
const firstAPIURL = `https://random-data-api.com/api/v2/addresses?size=${userValue}&is_json=true`;
const checkDuplicates = (array) => {
  //function that checks for duplicates
  array.sort();
  let sameAdress = false;
  array.forEach((element, index) => {
    if (index > 0 && element === array[index - 1]) {
      sameAdress = true;
    }
  });
  return sameAdress;
};
fetch(firstAPIURL)
  .then((res) => res.json())
  .then((adresses) => {
    if (checkDuplicates(adresses)) {
    } else {
      if (Array.isArray(adresses)) {
        fetchedAdresses = [...adresses];
        countryNames = fetchedAdresses.map((country) => country.country);
        const secondAPIURL = `https://restcountries.com/v3.1/all?fields=name,capital,currencies`; //I decided to fetch all and then filter information so i do not create fetch for every single country
        fetch(secondAPIURL)
          .then((res) => res.json())
          .then((countries) => {
            countries.sort();

            countryInfo = countries.filter((country) =>
              countryNames.includes(country.name.common)
            );
          });
      }
    }
  });

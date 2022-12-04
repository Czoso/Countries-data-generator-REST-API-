import { displayData } from "./script.js";

let countryNames = [];
const checkDuplicates = (array) => {
  //function that checks for duplicates
  let sameAdress = false;
  if (Array.isArray(array)) {
    array.sort();
    array.forEach((element, index) => {
      if (index > 0 && element === array[index - 1]) {
        sameAdress = true;
      }
    });
  }
  return sameAdress;
};
async function fetchFirstData(secondAPIAdresses, amount) {
  const firstAPIURL = `https://random-data-api.com/api/v2/addresses?size=${amount}&is_json=true`;
  return new Promise((resolve) => {
    fetch(firstAPIURL)
      .then((res) => res.json())
      .then(async (adresses) => {
        if (checkDuplicates(adresses)) {
          fetchfirstData(secondAPIAdresses, amount);
        } else {
          let countryInfo = [];
          if (Array.isArray(adresses)) {
            let fetchedAdresses = [];
            fetchedAdresses = [...adresses];
            countryNames = fetchedAdresses.map((country) => country.country);
            countryInfo = secondAPIAdresses.filter((country) =>
              countryNames.includes(country.name.common)
            );
            //here i check if countries matches (some countries hava different names in both APIs)
            if (countryInfo.length !== countryNames.length) {
              displayData(amount);
            } else {
              resolve(countryInfo);
            }
          }
        }
      });
  });
}
export async function fetchSecondData(amount) {
  const secondAPIURL = `https://restcountries.com/v3.1/all?fields=name,capital,population,languages`; //I decided to fetch all and then filter information so i do not create fetch for every single country
  return new Promise((resolve) => {
    fetch(secondAPIURL)
      .then((res) => res.json())
      .then((countries) => {
        fetchFirstData(countries, amount).then(async (countries) => {
          const data = await countries;
          resolve(data);
        });
      });
  });
}

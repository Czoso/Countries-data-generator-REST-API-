const createCountryElement = (countryData, list) => {
  list.clearChildren;
  const name = document.createElement("li");
  countryData.name.common
    ? (name.innerText = countryData.name.common)
    : (name.innerText = "No information found!");
  name.classList.add("country");
  list.appendChild(name);
  const capital = document.createElement("span");
  let capitalsDisplayed;
  if (countryData.capital[0]) {
    countryData.capital.forEach((capital, index) => {
      if (index > 0) {
        capitalsDisplayed = capitalsDisplayed + ", " + capital;
      } else {
        capitalsDisplayed = capital;
      }
    });
  } else {
    capitalsDisplayed = "No information found!";
  }
  capital.innerText = `Capital(s): ${capitalsDisplayed}`;
  capital.classList.add("country__capital");
  name.appendChild(capital);
  const population = document.createElement("span");
  countryData.population
    ? (population.innerText = `Pupulation: ${countryData.population}`)
    : (population.innerText = `Population: No information found!`);
  population.classList.add("country__population");
  name.appendChild(population);
  const languages = document.createElement("span");
  let languagesText;
  if (Object.keys(countryData.languages)[0]) {
    for (const key of Object.keys(countryData.languages)) {
      languagesText == undefined
        ? (languagesText = countryData.languages[key])
        : (languagesText = `${languagesText}, ${countryData.languages[key]}`);
    }
  } else {
    languagesText = "No information found!";
  }
  languages.innerText = languagesText;
  languages.classList.add("country__languages");
  name.appendChild(languages);
};
export const createDisplay = (countriesData) => {
  const previousList = document.querySelector("ul");
  if (previousList !== null) {
    previousList.remove();
  }
  const listContainer = document.querySelector(".list-container");
  const countryList = document.createElement("ul");
  listContainer.appendChild(countryList);
  function comparePopulation(firstCountry, secondCountry) {
    //function that sorts countries by population
    return secondCountry.population - firstCountry.population;
  }
  const countriesSorted = countriesData.sort(comparePopulation);
  countriesSorted.forEach((singleCountryData) => {
    createCountryElement(singleCountryData, countryList);
  });
};

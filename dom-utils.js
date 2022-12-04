const createCountryElement = (countryData, list) => {
  list.clearChildren;
  const name = document.createElement("li");

  name.innerText = countryData.name.common;
  name.classList.add("country");
  list.appendChild(name);
  const capital = document.createElement("span");
  let capitalsDisplayed;
  countryData.capital.forEach((capital, index) => {
    if (index > 0) {
      capitalsDisplayed = capitalsDisplayed + ", " + capital;
    } else {
      capitalsDisplayed = capital;
    }
  });
  capital.innerText = `Capital(s): ${capitalsDisplayed}`;
  capital.classList.add("country__capital");
  name.appendChild(capital);

  const population = document.createElement("span");
  population.innerText = `Pupulation: ${countryData.population}`;
  population.classList.add("country__population");
  name.appendChild(population);

  const languages = document.createElement("span");
  let languagesText;
  for (const key of Object.keys(countryData.languages)) {
    languagesText == undefined
      ? (languagesText = countryData.languages[key])
      : (languagesText = `${languagesText}, ${countryData.languages[key]}`);
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

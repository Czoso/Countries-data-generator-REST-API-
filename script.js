import { fetchSecondData } from "./data-fetch.js";
import { createDisplay } from "./dom-utils.js";
import { inputValidation } from "./validation.js";

const amountInput = document.querySelector("input.user-amount-input");
const submitButton = document.querySelector(".submit");
export const displayData = (value) => {
  fetchSecondData(value).then((countriesData) => {
    createDisplay(countriesData);
  });
};
submitButton.addEventListener("click", () => {
  const value = amountInput.value;
  if (inputValidation(value)) {
    displayData(value);
    amountInput.classList.remove("invalid");
  } else {
    amountInput.classList.add("invalid");
  }
});

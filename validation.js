export const inputValidation = (value) => {
  if (value >= 5 && value <= 20 && Number.isInteger(Number(value))) {
    return true;
  } else {
    return false;
  }
};

export const inputValidation = (value) => {
  if (value >= 5 && value <= 20) {
    return true;
  } else {
    return false;
  }
};

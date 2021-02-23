export default () => {
  const formInputs = {
    inputNameElem: document.querySelector('.inputName'),
    inputEmailElem: document.querySelector('.inputEmail'),
    inputStreetElem: document.querySelector('.street'),
    inputOptionalElem: document.querySelector('.optional'),
    inputCityElem: document.querySelector('.city'),
    inputZipElem: document.querySelector('.zip'),
    submitButton: document.querySelector('.submitButton'),
  };

  return formInputs;
};

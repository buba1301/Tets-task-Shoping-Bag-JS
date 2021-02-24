export default () => {
  const formInputs = {
    name: document.querySelector('.inputName'),
    email: document.querySelector('.inputEmail'),
    street: document.querySelector('.street'),
    optional: document.querySelector('.optional'),
    city: document.querySelector('.city'),
    country: document.querySelector('.country'),
    zip: document.querySelector('.zip'),
    submitButton: document.querySelector('.submitButton'),
  };

  return formInputs;
};

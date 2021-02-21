import './index.css';

const renderShippingForm = () => {
  const formEl = document.querySelector('.form');
  console.log('FORM', formEl);

  const formHeaderElem = document.createElement('div');
  const formHeaderText = document.createTextNode('Shiping Info');
  formHeaderElem.classList.add('formHeader');
  formHeaderElem.appendChild(formHeaderText);

  formEl.appendChild(formHeaderElem);

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactContainer');

  const labelNameEl = document.createElement('label');
  const labelNameText = document.createTextNode('Recipient');
  labelNameEl.setAttribute('for', 'name');
  labelNameEl.appendChild(labelNameText);

  const nameInputEl = document.createElement('input');
  nameInputEl.classList.add('nameInput');
  nameInputEl.setAttribute('type', 'text');
  nameInputEl.setAttribute('placeholder', 'Full Name');
  nameInputEl.id = 'name';

  contactContainer.appendChild(labelNameEl);
  contactContainer.appendChild(nameInputEl);
  formEl.appendChild(contactContainer);

  const phoneContainerEl = document.createElement('div');
  phoneContainerEl.classList.add('phoneContainer');

  const phoneInputEl = document.createElement('input');
  phoneInputEl.classList.add('phoneInput');
  phoneInputEl.setAttribute('type', 'text');
  phoneInputEl.setAttribute('placeholder', 'Daytime Phone');
  phoneInputEl.id = 'phone';

  const phoneLabelEl = document.createElement('label');
  const phoneLabelText = document.createTextNode('For delivery qustions only');
  phoneLabelEl.setAttribute('for', 'phone');
  phoneLabelEl.appendChild(phoneLabelText);

  phoneContainerEl.appendChild(phoneInputEl);
  phoneContainerEl.appendChild(phoneLabelEl);

  contactContainer.appendChild(phoneContainerEl);

  const adressContainerEl = document.createElement('div');
  adressContainerEl.classList.add('adressContainer');

  formEl.appendChild(adressContainerEl);

  const adressInfoEl = document.createElement('div');
  adressInfoEl.classList.add('adressInfo');

  const streetLabelEl = document.createElement('label');
  const streetLabeText = document.createTextNode('Address');
  streetLabelEl.setAttribute('for', 'street');
  streetLabelEl.appendChild(streetLabeText);

  const streetInputEl = document.createElement('input');
  streetInputEl.classList.add('streetInput');
  streetInputEl.setAttribute('type', 'text');
  streetInputEl.setAttribute('placeholder', 'Street Address');
  streetInputEl.id = 'street';

  adressInfoEl.appendChild(streetLabelEl);
  adressInfoEl.appendChild(streetInputEl);

  const aprtInputEl = document.createElement('input');
  aprtInputEl.classList.add('apartInput');
  aprtInputEl.setAttribute('type', 'text');
  aprtInputEl.setAttribute('placeholder', 'Apt, Suite, Bldg, Gate Code. (optional)');

  adressInfoEl.appendChild(aprtInputEl);

  adressContainerEl.appendChild(adressInfoEl);
};

export default renderShippingForm;

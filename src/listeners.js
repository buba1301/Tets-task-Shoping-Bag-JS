/* eslint-disable no-param-reassign */
import updateValidationState from './validation';
import getFormInputsElements from './elements';

const addFormEventListners = (state, step) => {
  const formInputs = getFormInputsElements(step, state.form);

  const handleChange = ({ target }) => {
    state.form[step][target.id] = target.value;
    console.log('WORK');

    updateValidationState(target.id, state.form, step);
  };

  formInputs.forEach((el) => el.addEventListener('input', handleChange));
};

const addSameAdressButtonListners = (state) => {
  const sameAddressButton = document.querySelector('.sameAddressButton');

  sameAddressButton.addEventListener('click', () => {
    const { form } = state;
    console.log('SAME FROM', Object.entries(form.shipping));
    const sameForm = Object.entries(form.shipping).reduce((acc, [key, value]) => {
      console.log('KEY', key, value);

      return key !== 'phone' && { ...acc, [key]: value };
    }, {});

    console.log('SAME FROM', sameForm);

    form.billing = { ...form.billing, ...sameForm };
  });
};

const listeners = {
  shipping: addFormEventListners,
  billing: addFormEventListners,
  payment: addFormEventListners,
  billingSameAdressButton: addSameAdressButtonListners,
};

export default (element, state) => listeners[element](state, element);

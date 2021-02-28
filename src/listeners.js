/* eslint-disable no-param-reassign */
import updateValidationState from './validation';
import getFormInputsElements from './elements';

const addFormEventListners = (state, step) => {
  const formInputs = getFormInputsElements(step, state.form);

  const handleChange = ({ target }) => {
    state.form[step][target.id] = target.value;

    updateValidationState(target.id, state.form, step);
  };

  formInputs.forEach((el) => el.addEventListener('input', handleChange));
};

const addSameAdressButtonListners = (state) => {
  const sameAddressButton = document.querySelector('.sameAddressButton');

  sameAddressButton.addEventListener('click', () => {
    const { form } = state;

    const sameForm = Object.entries(form.shipping).reduce(
      (acc, [key, value]) => key !== 'phone' && { ...acc, [key]: value },
      {},
    );

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

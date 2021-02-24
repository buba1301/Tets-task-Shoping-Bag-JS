import updateValidationState from './validation';
import getFormInputsElements from './elements';

const addShippingFormEventListners = (state) => {
  const formInputs = getFormInputsElements();

  const handleChange = ({ target }) => {
    state.form.shippingInfo[target.id] = target.value;
    updateValidationState(target.id, state.form, state.form.shippingInfo);
  };

  Object.values(formInputs).forEach((el) => el.addEventListener('input', handleChange));
};

const listeners = {
  shippingForm: addShippingFormEventListners,
};

export default (element, state) => listeners[element](state);

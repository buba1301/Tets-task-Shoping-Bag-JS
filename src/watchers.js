import { watch } from 'melanke-watchjs';
import listeners from './listeners';
import renders from './renders';
import getFormInputsElements from './elements';

export default (state) => {
  const { orderSummary, form } = state;
  const { shippingInfo } = form;

  renders('renderOrderSummary', orderSummary);

  watch(form, 'step', () => {
    const { step, shippingInfo } = form;
    switch (step) {
      case 'shipping':
        renders('renderShippingForm', shippingInfo);
        listeners('shippingForm', state);
        console.log('SIPPING');
        break;
      case 'billing':
        console.log('BILLING');
        break;
      case 'payment':
        console.log('PAYMENT');
        break;
      default:
        console.log('ERROR');
    }
  });

  watch(shippingInfo, 'name', () => {
    const { shippingInfo } = form;
    const formInputs = getFormInputsElements();
    formInputs.inputNameElem.value = shippingInfo.name;
  });

  watch(form, 'valid', () => {
    const formInputs = getFormInputsElements();
    formInputs.submitButton.disabled = !form.valid;
  });
};

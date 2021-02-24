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

  watch(shippingInfo, ['name', 'email', 'street', 'optional', 'city', 'country', 'zip'], (prop) => {
    const { shippingInfo } = form;
    const formInputs = getFormInputsElements();

    formInputs[prop].value = shippingInfo[prop];
  });

  watch(form, 'valid', () => {
    const formInputs = getFormInputsElements();
    formInputs.submitButton.disabled = !form.valid;
  });

  watch(form, 'errors', () => {
    const formInputs = getFormInputsElements();
    const { errors } = form;

    if (errors.length === 0) {
      const elements = document.querySelectorAll('.is-invalid');

      elements.forEach((el) => el.classList.remove('is-invalid'));
    }

    errors.forEach(([key, value]) => {
      const el = formInputs[key];
      el.classList.add('is-invalid');
      let invalidFeedbackEl = document.querySelector(`.invalid-feedback-${key}`);

      if (invalidFeedbackEl) {
        invalidFeedbackEl.remove();
      }

      invalidFeedbackEl = document.createElement('div');
      invalidFeedbackEl.classList.add('invalid-feedback', `invalid-feedback-${key}`);
      invalidFeedbackEl.innerHTML = value;
      invalidFeedbackEl.style.display = '';
      el.after(invalidFeedbackEl);
    });
  });
};

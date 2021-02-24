import { watch } from 'melanke-watchjs';
import listeners from './listeners';
import renders from './renders';

export default (state) => {
  const { orderSummary, form } = state;
  const { shipping } = form;

  renders('renderOrderSummary', orderSummary);

  watch(form, 'step', () => {
    const { step } = form;
    switch (step) {
      case 'shipping':
        renders('renderShippingBillingForm', step);
        listeners('shipping', state);
        break;
      case 'billing':
        renders('renderShippingBillingForm', step);
        listeners('billing', state);
        listeners('billingSameAdressButton', state);
        break;
      case 'payment':
        renders('renderPaymentForm', step);
        listeners('payment', state);
        break;
      default:
        console.log('ERROR');
    }
  });

  watch(shipping, ['name', 'phone', 'street', 'optional', 'city', 'country', 'zip'], (prop) => {
    const el = document.querySelector(`.${prop}`);
    el.value = shipping[prop];
  });

  watch(form, 'billing', () => {
    const { billing } = form;

    const elementsName = Object.keys(billing);

    elementsName.forEach((item) => {
      const el = document.querySelector(`.${item}`);

      el.value = billing[item];
    });
  });

  watch(form, 'valid', () => {
    const submitButton = document.querySelector('.submitButton');
    submitButton.disabled = !form.valid;
  });

  watch(form, 'errors', () => {
    const { errors } = form;

    const elements = document.querySelectorAll('.is-invalid');

    elements.forEach((el) => el.classList.remove('is-invalid'));

    errors.forEach(([key, value]) => {
      const el = document.querySelector(`.${key}`);
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

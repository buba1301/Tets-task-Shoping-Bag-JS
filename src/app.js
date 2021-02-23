import { Form } from 'bootstrap';
import orderData from './orderData';

import watch from './watchers';

export default () => {
  const state = {
    orderSummary: orderData,
    form: {
      step: '',
      process: 'filling',
      valid: false,
      errors: {},
      shippingInfo: {
        name: '',
        phone: '',
        address: {
          street: '',
          optional: '',
          city: '',
          country: '',
          zip: '',
        },
      },
      billingInfo: {
        contact: {
          name: '',
          email: '',
        },
        adress: {
          street: '',
          optional: '',
          city: '',
          country: '',
          zip: '',
        },
      },
      payment: {
        cardholderName: '',
        cardNumber: '',
        expireDate: '',
        secureCode: '',
      },
    },
  };

  const form = document.querySelector('.form');

  watch(state);

  state.form.step = 'shipping';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('FORMDATa', e.target);
    const formData = new FormData(e.target);
    console.log('FORMDATa', formData.get('email'));
    const { step } = state.form;
  });
};

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
      errors: [],
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
    const formData = new FormData(e.target);

    const { step } = state.form;

    switch (step) {
      case 'shipping':
        state.form.step = 'billing';
        break;
      case 'billing':
        state.form.step = 'payment';
        console.log('BILLING');
        break;
      case 'payment':
        console.log('PAYMENT');
        break;
      default:
        console.log('ERROR');
    }
  });
};

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
      shipping: {
        name: '',
        phone: '',
        street: '',
        optional: '',
        city: '',
        country: '',
        zip: '',
      },
      billing: {
        name: '',
        email: '',
        street: '',
        optional: '',
        city: '',
        country: 'Country',
        zip: '',
      },
      payment: {
        name: '',
        number: '',
        expireDate: '',
        secureCode: '',
      },
    },
  };

  const form = document.querySelector('.form');

  watch(state);

  state.form.step = 'payment';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);

    const { step } = state.form;

    switch (step) {
      case 'shipping':
        state.form.step = 'billing';
        break;
      case 'billing':
        state.form.step = 'payment';
        break;
      case 'payment':
        console.log('PAYMENT');
        break;
      default:
        console.log('ERROR');
    }
  });
};

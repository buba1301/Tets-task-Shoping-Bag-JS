import i18next from 'i18next';
import resources from './locales';
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

  i18next
    .init({
      lng: 'en',
      debug: true,
      resources,
    })
    .then((t) => {
      watch(state, t);
      state.form.step = 'shipping';
    });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { step } = state.form;

    switch (step) {
      case 'shipping':
        state.form.step = 'billing';
        break;
      case 'billing':
        state.form.step = 'payment';
        break;
      case 'payment':
        break;
      default:
    }
  });
};

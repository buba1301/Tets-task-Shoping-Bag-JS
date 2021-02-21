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
      shipingInfo: {
        recipient: {
          name: '',
          phone: '',
        },
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

  console.log('STATE', state);

  watch(state);

  state.form.step = 'shipping';
};

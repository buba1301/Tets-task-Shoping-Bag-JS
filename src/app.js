export default () => {
  const state = {
    form: {
      step: 'shipping',
      process: 'filling',
      valid: false,
      errors: [],
      orderSummery: {
        items: {},
      },
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
};

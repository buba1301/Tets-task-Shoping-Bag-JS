import { watch } from 'melanke-watchjs';
import renders from './renders';

export default (state) => {
  const { orderSummary, form } = state;
  console.log(form);
  renders('renderOrderSummary', orderSummary);

  watch(form, 'step', () => {
    const { step } = form;
    console.log(step);

    switch (step) {
      case 'shipping':
        renders('renderShippingForm');
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
};

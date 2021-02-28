import renderOrderSummary from './orderSummary';
import renderShippingBillingForm from './shippingBillingForm';
import renderPaymentForm from './paymentForm';

const renders = {
  renderOrderSummary,
  renderShippingBillingForm,
  renderPaymentForm,
};

export default (element, data, text) => renders[element](data, text);

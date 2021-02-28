import renderOrderSummary from './orderSummary';
import renderShippingBillingForm from './shippingBillingForm';
import renderPaymentForm from './paymentForm';
import renderCountryList from './countryList';

const renders = {
  renderOrderSummary,
  renderShippingBillingForm,
  renderPaymentForm,
  renderCountryList,
};

export default (element, data, text) => renders[element](data, text);

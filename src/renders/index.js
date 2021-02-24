import renderOrderSummary from './orderSummary';
import renderShippingForm from './sippingForm';

const renders = {
  renderOrderSummary,
  renderForm: renderShippingForm,
};

export default (element, data) => renders[element](data);

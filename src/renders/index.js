import renderOrderSummary from './orderSummary';
import renderShippingForm from './sippingForm';

const renders = {
  renderOrderSummary: renderOrderSummary,
  renderShippingForm: renderShippingForm,
};

export default (element, data) => renders[element](data);

import renderOrderSummary from './orderSummary';

const renders = {
  renderOrderSummary: renderOrderSummary,
};

export default (element, data) => renders[element](data);

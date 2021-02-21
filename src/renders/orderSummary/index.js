import renderOrderFooter from './orderFooter';
import renderOrderHeader from './orderHeader';
import renderOrderList from './orderList';

const renderOrderSummary = (orderData) => {
  renderOrderHeader();
  renderOrderList(orderData);
  renderOrderFooter();
};

export default renderOrderSummary;

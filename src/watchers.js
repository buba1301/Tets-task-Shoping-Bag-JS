import { watch } from 'melanke-watchjs';
import renders from './renders';

export default (state) => {
  const { orderSummary } = state;

  renders('renderOrderSummary', orderSummary);
};

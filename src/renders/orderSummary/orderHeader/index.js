import './index.css';

const renderOrderHeader = () => {
  const chartContainerElem = document.querySelector('.orderContainer');

  const headerEl = document.createElement('div');

  headerEl.classList.add('orderHeaderContainer');
  chartContainerElem.appendChild(headerEl);

  const headerNameEl = document.createElement('p');
  headerNameEl.classList.add('header');

  const headerNameText = document.createTextNode('Order Summary');
  headerNameEl.appendChild(headerNameText);

  const editEl = document.createElement('a');
  editEl.classList.add('edit');
  editEl.setAttribute('href', '#edit');
  const editElText = document.createTextNode('edit order');
  editEl.appendChild(editElText);

  headerEl.appendChild(headerNameEl);
  headerEl.appendChild(editEl);
};

export default renderOrderHeader;

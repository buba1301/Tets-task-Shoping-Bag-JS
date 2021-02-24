/* eslint-disable no-param-reassign */
import './index.css';

const getTotalOrderSum = (orderData) => {
  const orderSum = orderData.reduce((acc, { cost, quantity }) => {
    acc += cost * quantity;
    return acc;
  }, 0);

  const shipingCost = orderSum > 100 ? 'Free' : 20;

  const tax = (orderSum / 100) * 3;

  const totalSum = shipingCost === 'Free' ? orderSum + tax : orderSum + shipingCost + tax;

  return {
    detailedСost: [
      {
        expenceItem: 'Subtotal',
        value: orderSum,
      },
      {
        expenceItem: 'Shipping',
        value: shipingCost,
      },
      {
        expenceItem: 'Taxes',
        value: tax,
      },
    ],
    totalSum,
  };
};

const orderList = (orderData) => {
  const chartContainerElem = document.querySelector('.orderContainer');

  const ordeRootEl = document.createElement('div');
  ordeRootEl.classList.add('orderRoot');

  orderData.forEach(({ name, color, currancy, cost, img, quantity }) => {
    const itemRootEl = document.createElement('div');
    itemRootEl.classList.add('itemRoot');

    const imageContainerEl = document.createElement('div');
    imageContainerEl.classList.add('imageContainer');

    const imgEl = new Image();
    imgEl.src = img;
    imgEl.alt = name;

    imageContainerEl.appendChild(imgEl);

    itemRootEl.appendChild(imageContainerEl);

    const infoContainerEl = document.createElement('div');
    infoContainerEl.classList.add('infoContainer');

    itemRootEl.appendChild(infoContainerEl);

    const nameEl = document.createElement('h1');
    nameEl.classList.add('itemName');
    const nameTextEl = document.createTextNode(name);
    nameEl.appendChild(nameTextEl);

    const colorEl = document.createElement('p');
    colorEl.classList.add('itemColor');
    const colorTextEl = document.createTextNode(color);
    colorEl.appendChild(colorTextEl);

    const quantityEl = document.createElement('p');
    quantityEl.classList.add('itemQuantity');
    const quantityTextEl = document.createTextNode(quantity);
    quantityEl.appendChild(quantityTextEl);

    infoContainerEl.appendChild(nameEl);
    infoContainerEl.appendChild(colorEl);
    infoContainerEl.appendChild(quantityEl);

    const costContainerEl = document.createElement('div');
    costContainerEl.classList.add('costContainer');

    itemRootEl.appendChild(costContainerEl);

    const costEl = document.createElement('p');
    const costTextEL = document.createTextNode(`$${cost}`);

    costEl.appendChild(costTextEL);
    costContainerEl.appendChild(costEl);

    ordeRootEl.appendChild(itemRootEl);
  });

  chartContainerElem.appendChild(ordeRootEl);

  const totalRootEl = document.createElement('div');
  totalRootEl.classList.add('totalContainerRoot');

  const totalInfoContainer = document.createElement('div');
  totalInfoContainer.classList.add('totalInfoContainer');

  const totalData = getTotalOrderSum(orderData);

  totalData.detailedСost.forEach(({ expenceItem, value }) => {
    const expenceContainerEl = document.createElement('div');
    expenceContainerEl.classList.add('expenceContainer');

    const expenceItemEl = document.createElement('p');
    const expenceItemText = document.createTextNode(expenceItem);
    expenceItemEl.classList.add('expenceItem');
    expenceItemEl.appendChild(expenceItemText);

    const expenceValueEl = document.createElement('p');
    const expenceValueText = document.createTextNode(value);
    expenceValueEl.appendChild(expenceValueText);

    expenceContainerEl.appendChild(expenceItemEl);
    expenceContainerEl.appendChild(expenceValueEl);

    totalInfoContainer.appendChild(expenceContainerEl);
  });

  const totalEl = document.createElement('div');
  totalEl.classList.add('total');

  const totalSumContainerEl = document.createElement('div');
  totalSumContainerEl.classList.add('expenceContainer');

  const totalNameEl = document.createElement('p');
  const totalSolidTextEl = document.createElement('b');
  const totalText = document.createTextNode('Total');

  totalSolidTextEl.appendChild(totalText);
  totalNameEl.appendChild(totalSolidTextEl);

  totalSumContainerEl.appendChild(totalNameEl);

  const totalValueEl = document.createElement('p');
  const totalValueText = document.createTextNode(`$${totalData.totalSum}`);

  totalValueEl.appendChild(totalValueText);

  totalSumContainerEl.appendChild(totalValueEl);

  totalEl.appendChild(totalSumContainerEl);

  totalRootEl.appendChild(totalInfoContainer);
  totalRootEl.appendChild(totalEl);
  ordeRootEl.appendChild(totalRootEl);
};

export default orderList;

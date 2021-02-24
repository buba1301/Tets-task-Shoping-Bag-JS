/* eslint-disable no-unused-expressions */
import './index.css';

const renderPaymentForm = (step) => {
  const currentStepEl = document.querySelector(`.${step}`);
  const activeStepEl = document.querySelector('.active');
  const formNameEl = document.querySelector('.formName');
  const formEl = document.querySelector('.form');

  let formNameLeft = formNameEl.firstChild;
  formNameLeft && formNameLeft.remove();
  formNameLeft = document.createElement('p');

  const formNameRight = document.createElement('p');
  formNameRight.classList.add('nameRight');
  formNameRight.innerHTML = 'This is a secure 128-bit SSL encrypted payment';

  activeStepEl.classList.remove('active');
  currentStepEl.classList.add('active');

  formNameLeft.innerHTML = 'Payment';
  formNameEl.appendChild(formNameLeft);
  formNameEl.appendChild(formNameRight);

  const html = `
	  <div class="col-md-12">
      <label for="name" class="form-label">Cardholder Name</label>
      <input type="text" class="form-control name" name="name" id="name" placeholder="Name as on your card" value='' required>
    </div>
		<div class="col-md-12">
      <label for="number" class="form-label">Card Number</label>
      <input type="text"  class="form-control number" name="name" id="number" placeholder="XXXX XXXX XXXX XXXX" value='' required>
    </div>

		<div class="row backSideContainer">
      <div class="col-md-5">
			  <label for="expireDate" class="form-label">Expire Date</label>
        <input type="text" class="form-control expireDate" name="expireDate" placeholder="MM / YY" id="expireDate" aria-label="expireDate">
      </div>
      <div class="col-md-5">
			  <label for="secureCode" class="form-label">Secure Code</label>
        <input type="text" class="form-control secureCode" name="secureCode" id="secureCode" aria-label="secureCode">
      </div>
    </div>

		<div class="col-12">
      <button type="submit" class="btn submitButton" disabled>Pay Securely</button>
    </div>
	`;

  formEl.innerHTML = html;
};

export default renderPaymentForm;

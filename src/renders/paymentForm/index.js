/* eslint-disable no-unused-expressions */
import IMask from 'imask';
import MasterCardLogo from '../../assets/mastercard.png';
import VisaLogo from '../../assets/visa.png';
import './index.css';

const renderPaymentForm = (step) => {
  const currentStepEl = document.querySelector(`.${step}`);
  const activeStepEl = document.querySelector('.active');
  const formNameEl = document.querySelector('.formName');
  const formEl = document.querySelector('.form');
  formEl.classList.add('formPayment');
  formNameEl.classList.add('formNamePayment');

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
      <input type="text"  class="form-control number masked" name="name" id="number" value='' required pattern="[0-9]*" inputmode="numeric" placeholder="XXX">

    </div>

		<div class="row backSideContainer">
      <div class="col-md-5">
			  <label for="expireDate" class="form-label">Expire Date</label>
        <input type="text" class="form-control expireDate" name="expireDate" placeholder="MM/YY" id="expireDate" aria-label="expireDate" pattern="[0-9]*" inputmode="numeric">
      </div>
      <div class="col-md-5">
			  <label for="secureCode" class="form-label">Secure Code</label>
        <input type="text" class="form-control secureCode" name="secureCode" id="secureCode" aria-label="secureCode" pattern="[0-9]*" inputmode="numeric" placeholder="XXX">
      </div>
    </div>

		<div class="col-12">
      <button type="submit" class="btn submitButton" disabled>Pay Securely</button>
    </div>
	`;

  formEl.innerHTML = html;

  const cardNumEl = document.querySelector('.number');
  const expDateEl = document.querySelector('.expireDate');
  const secureCodeEL = document.querySelector('.secureCode');
  const img = document.createElement('img');
  const ccicon = document.createElement('div');
  ccicon.classList.add('ccicon', 'inCorrect');

  const cardNumMask = new IMask(cardNumEl, {
    mask: '0000 0000 0000 0000',
    regex: '^4\\d{0,15}',
    cardtype: 'visa',
  });

  const expDateMask = new IMask(expDateEl, {
    mask: '00/00',
    // lazy: false,
  });

  const secureCodeMask = new IMask(secureCodeEL, {
    mask: '000',
  });

  cardNumMask.on('accept', () => {
    switch (cardNumMask.masked.cardtype) {
      case 'visa':
        img.src = VisaLogo;
        ccicon.appendChild(img);
        cardNumEl.after(ccicon);
        break;
      default:
        img.remove();
        break;
    }
  });
};

export default renderPaymentForm;

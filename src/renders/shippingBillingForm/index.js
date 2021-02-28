/* eslint-disable no-unused-expressions */
import './index.css';

const renderShippingBillingForm = (step, text) => {
  const currentStepEl = document.querySelector(`.${step}`);
  const activeStepEl = document.querySelector('.active');
  const formNameEl = document.querySelector('.formName');
  const formEl = document.querySelector('.form');

  let formNameLeft = formNameEl.firstChild;
  formNameLeft && formNameLeft.remove();
  formNameLeft = document.createElement('p');

  activeStepEl.classList.remove('active');
  currentStepEl.classList.add('active');

  formNameLeft.innerHTML = step === 'shipping' ? 'Shipping Info' : 'Billing Info';
  formNameEl.appendChild(formNameLeft);

  if (step === 'billing') {
    const sameAddressButtonEl = document.createElement('button');
    sameAddressButtonEl.classList.add('btn', 'btn-link', 'sameAddressButton');
    sameAddressButtonEl.innerHTML = 'same as shipping';

    formNameEl.appendChild(sameAddressButtonEl);
  }

  const telOrEmailInputEl =
    step === 'shipping'
      ? `
      <div class="row phoneContainer">
        <div class="col-sm-7">
        <input type="phone" class="form-control phone" name="phone" id="phone" placeholder="Daytime Phone" value='' required>
        </div>
        <label for="phone" class="col-sm-5 col-form-label phoneLabel">For Delivary quistions only</label>
      </div>`
      : `
        <input type="email" class="form-control email" name="email" id="email" placeholder="Email" value='' required>`;

  const html = `
	<div class="col-md-12">
    <label for="name" class="form-label">Recipient</label>
    <input type="text" class="form-control name" name="name" id="name" placeholder="Full Name" value='' required>
  </div>

  <div class="col-md-12">
    ${telOrEmailInputEl}
  </div>

  <div class="col-12">
    <label for="street" class="form-label">Address</label>
    <input type="text" class="form-control street" name="street" id="street" placeholder="1234 Main St" value='' required>
  </div>
  <div class="col-12">
    <input type="text" class="form-control optional" name="optional" id="optional" placeholder="Apartment, studio, or floor" value='' required>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control city" name="city" id="city" placeholder="City" value='' required>
  </div>

  <div class="col-md-12">
    <div class="row">
      <div class="col-md-8 ">
        <select class="form-select country" id="country" aria-label="Country" required>
          <option selected>Country</option>
          <option value="Russia">Russia</option>
          <option value="England">England</option>
          <option value="USA">USA</option>
        </select>
      </div>



      <div class="col-md-4 ">
        <input type="text" class="form-control zip" name="zip" id="zip" placeholder="ZIP" value='' required>
      </div>
    </div>
  </div>

  <div class="col-6">
    <button type="submit" class="btn submitButton" disabled>${text(`submitButton.${step}`)}</button>
  </div>`;

  formEl.innerHTML = html;
};

export default renderShippingBillingForm;

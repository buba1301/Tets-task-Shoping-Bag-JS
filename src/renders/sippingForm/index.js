import './index.css';

const renderShippingForm = (data) => {
  const formEl = document.querySelector('.form');

  const html = `
	<div class="col-md-12">
    <label for="name" class="form-label">Recipient</label>
    <input type="text" class="form-control inputName" name="name" id="name" placeholder="Full Name" value=''>
  </div>

  <div class="col-sm-7">
    <input type="email" class="form-control inputEmail" name="email" id="email" placeholder="Daytime Phone" value=''>
  </div>
	<label for="email" class="col-sm-5 col-form-label phoneLabel">For Delivary quistions only</label>

  <div class="col-12">
    <label for="street" class="form-label">Address</label>
    <input type="text" class="form-control street" name="street" id="street" placeholder="1234 Main St" value=''>
  </div>
  <div class="col-12">
    <input type="text" class="form-control optional" name="optional" id="optional" placeholder="Apartment, studio, or floor" value=''>
  </div>

	<div class="col-md-12">
    <input type="text" class="form-control city" name="city" id="city" placeholder="City" value=''>
  </div>

  <div class="col-md-8">
    <input type="text" class="form-control" name="country" id="country" placeholder="Contry" value=''>
  </div>

  <div class="col-md-4">
    <input type="text" class="form-control zip" name="zip" id="zip" placeholder="ZIP" value=''>
  </div>

  <div class="col-6">
    <button type="submit" class="btn btn-primary submitButton" disabled>Sign in</button>
  </div>`;

  formEl.innerHTML = html;
};

export default renderShippingForm;

import * as yup from 'yup';

const nameSchema = (data) => yup.string().required().min(6).validateSync(data);

const emailSchema = (data) => yup.string().email().validateSync(data);

const addressSchema = (data) => yup.string().required().validateSync(data);
const zipSchema = (data) => yup.number().required().min(6).validateSync(data);

const valudateSchemas = {
  name: nameSchema,
  email: emailSchema,
  street: addressSchema,
  optional: addressSchema,
  city: addressSchema,
  // country: countrySchema,
  zip: zipSchema,
};

const validate = (schema, data) => valudateSchemas[schema](data);

const updateValidationState = (key, state, shippingInfo) => {
  try {
    console.log('VALID Good', key, shippingInfo);
    validate(key, shippingInfo[key]);

    state.valid = true;
    console.log('VALID Good', state);
    state.errors = {};
  } catch (err) {
    const error = {
      [err.type]: err.message,
    };
    state.valid = false;
    console.log('VALID Erros', state);

    state.errors = { ...state.errors, error };
    console.error('ERROR', error);
  }
};

export default updateValidationState;

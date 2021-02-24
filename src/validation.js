/* eslint-disable no-param-reassign */
import * as yup from 'yup';

const nameSchema = (data) => yup.string().required().min(6).validateSync(data);

const emailSchema = (data) => yup.string().email().validateSync(data);

const phoneSchema = (data) => yup.string().min(11).validateSync(data);

const addressSchema = (data) => yup.string().required().validateSync(data);
const zipSchema = (data) => yup.string().required().min(6).validateSync(data);

const valudateSchemas = {
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  street: addressSchema,
  optional: addressSchema,
  city: addressSchema,
  country: addressSchema,
  zip: zipSchema,
};

const validate = (schema, data) => valudateSchemas[schema](data);

const updateValidationState = (key, state, step) => {
  try {
    validate(key, state[step][key]);
    state.errors = state.errors.filter(([errorName]) => errorName !== key);
    state.valid = state.errors.length === 0;
  } catch (err) {
    state.valid = false;
    state.errors = [...state.errors, [key, err.message]];
  }
};

export default updateValidationState;

import * as yup from 'yup';

const validationSchema = (data) =>
  yup
    .object()
    .shape({
      name: yup.string().required().min(6),
      email: yup.string().email(),
      address: {
        street: yup.string().required(),
        optional: yup.string().required(),
        city: yup.string().required(),
        country: yup.string().required(),
        zip: yup.string().required(),
      },
    })
    .validateSync(data);

const nameSchema = (data) => yup.string().required().min(6).validateSync(data);

const emailSchema = (data) => yup.string().email().validateSync(data);

const addressSchema = (data) => yup.string().required().validateSync(data);
const zipSchema = (data) => yup.string().required().min(6).validateSync(data);

const valudateSchemas = {
  name: nameSchema,
  email: emailSchema,
  street: addressSchema,
  optional: addressSchema,
  city: addressSchema,
  country: addressSchema,
  zip: zipSchema,
};

const validate = (schema, data) => valudateSchemas[schema](data);

const updateValidationState = (key, state, shippingInfo) => {
  try {
    validate(key, shippingInfo[key]);
    state.valid = true;
    state.errors = [];
  } catch (err) {
    state.valid = false;
    state.errors = [...state.errors, [key, err.message]];
  }
};

export default updateValidationState;

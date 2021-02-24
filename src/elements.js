const getFormElements = (stepName, state) => {
  const classNames = Object.keys(state[stepName]);

  return classNames.map((item) => document.querySelector(`.${item}`));
};

export default getFormElements;

import countries from '../../countries';

const renderCountryList = ({ parentEl, value }) => {
  parentEl.innerHTML = '';
  countries.forEach((country) => {
    const countrySubstr = country.slice(0, value.length);

    if (countrySubstr.toLowerCase() === value.toLowerCase()) {
      const pEL = document.createElement('div');
      pEL.innerHTML = country;
      parentEl.append(pEL);
    }
  });
};

export default renderCountryList;

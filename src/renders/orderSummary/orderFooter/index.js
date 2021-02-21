import './index.css';

const renderOrderFooter = () => {
  const chartContainerElem = document.querySelector('.orderContainer');

  const footerRootEl = document.createElement('div');
  footerRootEl.classList.add('footerRoot');

  chartContainerElem.appendChild(footerRootEl);

  const pEl = document.createElement('p');
  pEl.classList.add('footerText');
  footerRootEl.appendChild(pEl);

  const footerText = document.createTextNode('All purchases are subject to our ');
  const footerLink = document.createElement('a');
  const footerLinkText = document.createTextNode(' Term and Conditions');
  footerLink.classList.add('footerLink');
  footerLink.setAttribute('href', '#doc');
  footerLink.appendChild(footerLinkText);

  pEl.appendChild(footerText);
  pEl.appendChild(footerLink);
};

export default renderOrderFooter;

/* <div className={s.root}>
    <p className={s.text}>
      {text}
      <a href="#link">{link}</a>
    </p>
  </div> */

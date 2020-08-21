import './style.scss';

(() => {
  const stepControls = document.querySelectorAll('[data-go]');
  const stepContents = document.querySelectorAll('[data-go-item]');
  const stepButtons = document.querySelectorAll('.app__step-button');

  let currentStep = 1;

  stepControls.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      let elData = el.dataset.go;
      if ( elData * 1 - currentStep >= 2 ) return;

      if (elData === 'next') elData = currentStep + 1;
      if (elData === 'prev') elData = currentStep - 1;
      currentStep = elData * 1;

      showCurrentStep(currentStep);
    });
  });

  function showCurrentStep(step) {
    [...stepButtons].forEach((el) => {
      el.classList.toggle('is-active', el.dataset.go * 1 <= step);
    });

    [...stepContents].forEach((el) => {
      el.classList.toggle('is-active', el.dataset.goItem * 1 === step);
    });
  };

})();

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

      if (elData === 'next') elData = currentStep + 1;
      if (elData === 'prev') elData = currentStep - 1;

      if ( elData * 1 - currentStep < 2 ) {
        currentStep = elData * 1;
        showCurrentStep(currentStep);
      };

    });
  });

  function showCurrentStep(step) {
    const currentBlock = [...stepContents].find((el) => el.dataset.goItem * 1 === step);
    const stepButtonsActive = [...stepButtons].filter((el) => el.dataset.go * 1 <= step);

    if (!currentBlock) return;

    [...stepContents, ...stepButtons].forEach((el) => el.classList.remove('is-active'));
    stepButtonsActive.forEach((el) => el.classList.add('is-active'));
    currentBlock.classList.add('is-active');
  };

})();

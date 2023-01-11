const rangeInput = document.querySelectorAll('.range-input input');
//const formInput = document.querySelectorAll('.form-input input'); 
const formInput = document.querySelectorAll('.form-input input');
const progressBar = document.querySelector('.slider-first .progress-first');

//const gap = 1000;
const gap = 1000;


rangeInput.forEach(input => {
  input.addEventListener('input', (event) => {
    const minInptValue = parseInt(rangeInput[0].value)
    const maxInptValue = parseInt(rangeInput[1].value)


    if (maxInptValue - minInptValue < gap) {
      if (event.target.className === "range-min") {
        parseInt(rangeInput[0].value = maxInptValue - gap);
      } else {
        parseInt(rangeInput[1].value = maxInptValue + gap);

      }
    } else {
      formInput[0].value = minInptValue;
      formInput[1].value = maxInptValue;
      progressBar.style.left = `${(minInptValue / rangeInput[0].max) * 100}%`;
      progressBar.style.right = `${100 - (maxInptValue / rangeInput[1].max) * 100}%`;

    }

    //progressBar.style.left = `${(minInptValue / rangeInput[0].max) * 100}%`;
    //progressBar.style.right = `${100 - (maxInptValue / rangeInput[1].max) * 100}%`;


    console.log(minInptValue, maxInptValue);

  })
})

//-----------
formInput.forEach(input => {
  input.addEventListener('input', (event) => {
    const minInptValue = parseInt(formInput[0].value)
    const maxInptValue = parseInt(formInput[1].value)


    if ((maxInptValue - minInptValue >= gap) && maxInptValue <= 10_000) {
      if (event.target.className === "input-min") {
        parseInt(rangeInput[0].value = minInptValue);
        progressBar.style.left = `${(minInptValue / rangeInput[0].max) * 100}%`;

      } else {

        parseInt(rangeInput[1].value = maxInptValue);
        progressBar.style.right = `${100 - (maxInptValue / rangeInput[1].max) * 100}%`;

      }
    }

    //progressBar.style.left = `${(minInptValue / rangeInput[0].max) * 100}%`;
    //progressBar.style.right = `${100 - (maxInptValue / rangeInput[1].max) * 100}%`;


    console.log(minInptValue, maxInptValue);

  })
})
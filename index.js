
const rangeInput = document.querySelectorAll('.range-input input');
const formInput = document.querySelectorAll('.form-elements input');
const progressBar = document.querySelector('.slider-first .progress-first');
const formElem = document.querySelector('.form-elements');
const buttonSubmit = document.querySelector('.button');
const gap = 1000;

rangeInput.forEach(input => {
  input.addEventListener('input', (event) => {
    const minInptValue = parseFloat(rangeInput[0].value)
    const maxInptValue = parseFloat(rangeInput[1].value)

    if (maxInptValue - minInptValue < gap) {
      if (event.target.className === "range-min") {
        parseFloat(rangeInput[0].value = maxInptValue - gap);
      } else {
        parseFloat(rangeInput[1].value = maxInptValue + gap);
      }
      return;
    }
    formInput[0].value = minInptValue;
    formInput[1].value = maxInptValue;
    progressBar.style.left = `${(minInptValue / rangeInput[0].max) * 100}%`;
    progressBar.style.right = `${100 - (maxInptValue / rangeInput[1].max) * 100}%`;

  })
})

//-----------
const resultInput = formInput.forEach(input => {
  input.addEventListener('input', (event) => {
    const minInptValue = parseFloat(formInput[0].value)
    const maxInptValue = parseFloat(formInput[1].value)


    if ((maxInptValue - minInptValue >= gap) && maxInptValue <= 10_000) {
      if (event.target.className === "input-min") {
        parseFloat(rangeInput[0].value = minInptValue);
        progressBar.style.left = `${(minInptValue / rangeInput[0].max) * 100}%`;

      } else {

        parseFloat(rangeInput[1].value = maxInptValue);
        progressBar.style.right = `${100 - (maxInptValue / rangeInput[1].max) * 100}%`;

      }
    }

  })
})

//-----отправка формы на бэк - не используется, сделан вывод в alert
formElem.onsubmit = async (e) => {
  e.preventDefault();

  const url = '/....'
  const response = await fetch(url, {
    method: 'POST',
    body: new FormData(formElem)

  });

  const result = await response.json();
  alert(result.message);
}

//----вывод значений в alert
function sendForm(e) {
  e.preventDefault();
  alert(`Мин значение: ${parseFloat(rangeInput[0].value)}, Макс значение: ${parseFloat(rangeInput[1].value)}`
  )
}

buttonSubmit.addEventListener('click', sendForm);
import api from './config';
import displayResults from './displayResults';

const defaultCountry = 'kenya';
function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json()).then(displayResults);
}

const searchBox = document.querySelector('.search-box');

function setQuery(event) {
  if (event.keyCode === 13) {
    getResults(searchBox.value);
  }
}

searchBox.addEventListener('keypress', setQuery);
getResults(defaultCountry);

const tempConverter = (value, degree) => {
  if (degree === 'C') {
    return Math.round(((value * 9) / 5) + 32);
  } if (degree === 'F') {
    return Math.round((value - 32) * (5 / 9));
  }
  return ((value * 9) / 5) + 32;
};
document.querySelector('.temp-toggle .fh-btn').addEventListener('click', () => {
  const text = document.querySelector('.temp').innerText.split('°');
  let temp = parseInt(text[0]);
  let degree = text[1];
  if (degree === 'C') {
    temp = tempConverter(temp, 'C');
    degree = '°F';
    // document.querySelector('.temp span:first-child').innerHTML = 50 + '';
    document.getElementById('unit').innerHTML = 'hello';
    document.querySelector('.temp span:last-child').innerHTML = degree;
  }
});
document.querySelector('.temp-toggle .cs-btn').addEventListener('click', () => {
  const text = document.querySelector('.temp').innerText.split('°');
  let temp = parseInt(text[0]);
  let degree = text[1];
  if (degree === 'F') {
    temp = tempConverter(temp, 'F');
    degree = '°C';
    document.querySelector('.temp span:first-child').innerHTML = 45 + '';
    document.querySelector('.temp span:last-child').innerHTML = degree;
  }
});

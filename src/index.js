import api from './config';
import displayResults from './displayResults';

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode === 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json()).then(displayResults);
}

const tempConverter = (value, degree) => {
  if (degree === 'C') {
    return (value * 9/5) + 32;
  } else if ( degree === 'F' ) {
    return ((value - 32) * (5/9));
  }
}
document.querySelector('.temp-toggle .fh-btn').addEventListener('click', () => {
  const text = document.querySelector('.temp').innerText.split('°');
  let temp = text[0];
  let degree = text[1]
  if (degree === 'C') {
    temp = tempConverter(temp, degree);
    degree = '°F'
    document.querySelector('.temp span:first-child').innerHTML = temp;
    document.querySelector('.temp span:last-child').innerHTML = degree;
  }
})
document.querySelector('.temp-toggle .cs-btn').addEventListener('click', () => {
  const text = document.querySelector('.temp').innerText.split('°');
  let temp = text[0];
  let degree = text[1]
  if( degree === 'F' ) {
    temp = tempConverter(temp, degree);
    degree = '°C'
    document.querySelector('.temp span:first-child').innerHTML = temp;
    document.querySelector('.temp span:last-child').innerHTML = degree;
  }
})


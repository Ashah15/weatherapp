import {api} from './config';
import {displayResults} from './displayResults'

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

const setQuery = (event) => {
  if (event.keyCode === 13) {
    getResults(searchBox.value);
  }
}

const getResults = (query) =>{
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json()).then(displayResults);
}


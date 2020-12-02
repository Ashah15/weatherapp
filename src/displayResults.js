import dateBuilder from './dateHelper';

const changeBackground = (weatherName) => {
  const body = document.querySelector('#body');

  switch (weatherName) {
    case 'Rain': {
      body.removeAttribute('class');
      body.classList.add('rainy');
      break;
    }
    case 'Sun': {
      body.removeAttribute('class');
      body.classList.add('sunny');
      break;
    }
    case 'Clouds': {
      body.removeAttribute('class');
      body.classList.add('cloudy');
      break;
    }
    case 'Wind': {
      body.removeAttribute('class');
      body.classList.add('windy');
      break;
    }
    case 'Storm': {
      body.removeAttribute('class');
      body.classList.add('stormy');
      break;
    }
    default:
      body.removeAttribute('class');
      body.classList.add('defaultBackGround');
  }
};

const displayResults = (weather) => {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  // const temp = document.querySelector('.current .temp');
  // temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `<span>${Math.round(weather.main.temp)}</span><span>°C</span>`;

  const weatherElement = document.querySelector('.current .weather');
  weatherElement.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

  changeBackground(weather.weather[0].main);
};

export default displayResults;

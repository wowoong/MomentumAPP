const API_KEY = 'c667ccf0d48773ed49c892b3c4bd690c';

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const temp = document.querySelector('#weather span:nth-child(2)');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} /`;
      temp.innerText = `${data.main.temp}'c /`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
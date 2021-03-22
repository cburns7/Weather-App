let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let month = months[now.getMonth()];
let date = now.getDate();

let li = document.querySelector("li");
li.innerHTML = `${day}, ${month} ${date} <br /> ${hours}:${minutes}`;

//function search(event) {
//event.preventDefault();
//let searchInput = document.querySelector("#search-text-input");

//let h1 = document.querySelector("h1");
//if (searchInput.value) {
//h1.innerHTML = `${searchInput.value}`;
//}
//}

//let celcius = document.querySelector("#celcius-link");
//let fahrenheit = document.querySelector("#fahrenheit-link");
//let degrees = document.querySelector("h2");

//celcius.addEventListener("click", function () {
//degrees.innerHTML = "19";
//});

//fahrenheit.addEventListener("click", function () {
//degrees.innerHTML = "66";
//});

//let apiKey = "86efc84703d8920edad71687828e1265";
//let units = "imperial";
//let city = "London";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

//axios.get(apiUrl).then(showTemperature);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let message = `${temperature}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = message;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
    searchCity(searchInput.value);
  }
}

function searchCity(city) {
  let apiKey = "86efc84703d8920edad71687828e1265";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentLocation);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
function retrievePosition(position) {
  let apiKey = "86efc84703d8920edad71687828e1265";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

//let button = document.querySelector("#current-location");
//button.addEventListener("click", retrievePosition);

//function retrievePosition(position) {
//let apiKey = "86efc84703d8920edad71687828e1265";
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
//axios.get(apiUrl).then(showWeather);
//}

//navigator.geolocation.getCurrentPosition(retrievePosition);

//function showWeather(response) {
//let h2 = document.querySelector("h2");
//let temperature = Math.round(response.data.main.temp);
//h2.innerHTML = `${temperature}`;
//}

//function getTemperatureNow(response) {
//let currentTemp = document.querySelector("#temperature");
//currentTemp.innerHTML = Math.round(response.data.main.temp);

//let currentCity = document.querySelector("#current-city");
//currentCity.innerHTML = response.data.name;
//}

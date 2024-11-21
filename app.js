function submitSearch(event) {
  event.preventDefault();

  let searchFormInput = document.querySelector("#searchFormInput");
  let h1 = document.querySelector("h1");

  let city =
    searchFormInput.value.trim() === "" ? "Lisbon" : searchFormInput.value;
  h1.innerHTML = `${city}`;
  let apiKey = `f80eot135d2ba84faf905b0d90035259`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCurrentWeather);

  searchFormInput.value = "";
}
function loadDefaultWeather() {
  let city = "Lisbon";
  let apiKey = `f80eot135d2ba84faf905b0d90035259`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCurrentWeather);
}

loadDefaultWeather();

let form = document.querySelector("#searchForm");
form.addEventListener("submit", submitSearch);

function displayCurrentWeather(response) {
  let now = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");

  let temperature = Math.round(response.data.temperature.current);
  let currentCity = response.data.city;

  let humidity = response.data.temperature.humidity;
  let windSpeed = response.data.wind.speed;
  let weatherDescription = response.data.condition.description;

  document.querySelector("h1").innerHTML = `${currentCity}`;
  document.querySelector("h2").innerHTML = `${temperature}<small>°C</small>`;
  document.querySelector(
    ".hygroAnemoMeter"
  ).innerHTML = `Humidity: <strong>${humidity}%</strong>, Wind: <strong>${windSpeed} km/h</strong>`;
  document.querySelector(
    ".conditions"
  ).innerHTML = `${day}, ${hours}:${minutes}, ${weatherDescription}`;
}

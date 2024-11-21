function submitSearch(event) {
  event.preventDefault();

  let searchFormInput = document.querySelector("#searchFormInput");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchFormInput.value}`;

  let city = searchFormInput.value || "Lisbon";
  if (!city) {
    city = "Lisbon";
  }
  let apiKey = `f80eot135d2ba84faf905b0d90035259`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCurrentWeather);

  searchFormInput.value = "";
}

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

function getUserLocation() {
  let apiGeolocationUrl = "http://ip-api.com/json";

  axios
    .get(apiGeolocationUrl)
    .then(function (response) {
      let city = response.data.city;

      let apiKey = `f80eot135d2ba84faf905b0d90035259`;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(displayCurrentWeather);
    })
    .catch(function (error) {
      console.error("Error fetching geolocation:", error);
      alert("I can't determine your location automatically.");
    });
}

window.onload = function () {
  getUserLocation();
};

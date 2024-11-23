function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiKey = `f80eot135d2ba84faf905b0d90035259`;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(displayCurrentWeather);
      },
      (error) => {
        loadDefaultWeather();
      }
    );
  } else {
    loadDefaultWeather();
  }
}
getUserLocation();

function submitSearch(event) {
  event.preventDefault();

  let searchFormInput = document.querySelector("#searchFormInput");
  let h1 = document.querySelector("h1");

  let city;
  if (searchFormInput.value.trim() === "") {
    city = "Lisbon";
  } else {
    city = searchFormInput.value;
  }
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

  let humidity = Math.round(response.data.temperature.humidity);
  let windSpeed = Math.round(response.data.wind.speed);
  let weatherDescription = response.data.condition.description;

  let mainIcon = document.querySelector("#mainIcon");
  mainIcon.innerHTML = `<img src="${response.data.condition.icon_url.replace(
    "http://",
    "https://"
  )}}" id = "mainIcon"/>`;

  document.querySelector("h1").innerHTML = `${currentCity}`;
  document.querySelector("h2").innerHTML = `${temperature}<small>°C</small>`;
  document.querySelector(
    ".hygroAnemoMeter"
  ).innerHTML = `Humidity: <strong>${humidity}%</strong>, Wind: <strong>${windSpeed} km/h</strong>`;
  document.querySelector(
    ".conditions"
  ).innerHTML = `${day}, ${hours}:${minutes}, ${weatherDescription}`;

  backgroundChangeWithConditions(weatherDescription, hours);
}

function backgroundChangeWithConditions(weatherDescription, currentHour) {
  if (weatherDescription.includes("cloud") || currentHour >= 17) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(69,123,157,1) 0%, rgba(2,48,71,1) 100%)";
  } else if (weatherDescription.includes("rain")) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(141,153,174,1) 40%, rgba(2,48,71,1) 100%)";
  } else if (weatherDescription.includes("sun")) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(142,202,230,1) 0%, rgba(33,158,188,1) 100%)";
  }
}

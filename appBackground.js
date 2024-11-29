function backgroundChangeWithConditions(weatherDescription, currentHour) {
  if (
    weatherDescription.includes("clear sky") &&
    (currentHour >= 17 || currentHour <= 5)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(69,123,157,1) 0%, rgba(2,48,71,1) 100%)";
  } else if (
    weatherDescription.includes("cloud") &&
    (currentHour >= 17 || currentHour <= 5)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(141,153,174,1) 40%, rgba(2,48,71,1) 100%)";
  } else if (
    ["rain", "thunderstorm"].some((word) =>
      weatherDescription.includes(word)
    ) &&
    (currentHour >= 17 || currentHour <= 5)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(42,157,143,1) 0%, rgba(2,48,71,1) 100%);";
  } else if (
    ["snow", "mist"].some((word) => weatherDescription.includes(word)) &&
    (currentHour >= 17 || currentHour <= 5)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(168,218,220,1) 0%, rgba(2,48,71,1) 100%)";
  } else if (
    weatherDescription.includes("clear sky") &&
    (currentHour >= 5 || currentHour <= 17)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(142,202,230,1) 0%, rgba(33,158,188,1) 100%)";
  } else if (
    weatherDescription.includes("cloud") &&
    (currentHour >= 5 || currentHour <= 17)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(141,153,174,1) 30%, rgba(69,123,157,1) 100%)";
  } else if (
    ["rain", "thunderstorm"].some((word) =>
      weatherDescription.includes(word)
    ) &&
    (currentHour >= 5 || currentHour <= 17)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(42,157,143,1) 0%, rgba(69,123,157,1) 100%)";
  } else if (
    ["snow", "mist"].some((word) => weatherDescription.includes(word)) &&
    (currentHour >= 5 || currentHour <= 17)
  ) {
    document.querySelector("body").style.background =
      "radial-gradient(circle, rgba(168,218,220,1) 30%, rgba(33,158,188,1) 100%)";
  }
}

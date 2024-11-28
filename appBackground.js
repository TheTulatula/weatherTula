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

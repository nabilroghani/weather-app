const apiKey = "aa04c8dab2da72745bd3b2b467bd7bce"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if (response.status == 404) {
    alert("City not found. Please try again.");
    return;
  }

  const data = await response.json();
  document.querySelector(".City").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  // Optional: Change weather icon based on API response
  const weatherIcon = document.querySelector(".weather-icon");
  const iconCode = data.weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

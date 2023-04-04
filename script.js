console.log("test");
const apiKey = "c8853f099bc8a6740c33132d97e0f47f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure;

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/cloudy.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear-sky.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        default:
            weatherIcon.src = "images/clear-sky.png";
            break;
    }
}

searchBtn.addEventListener("click", ()=>{
    weather(searchBox.value);
})
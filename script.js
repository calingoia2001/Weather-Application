console.log("test");
const apiKey = "c8853f099bc8a6740c33132d97e0f47f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}

weather("Cluj-Napoca");
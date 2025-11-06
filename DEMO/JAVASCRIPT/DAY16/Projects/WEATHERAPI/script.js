const apiKey = "986469d255dd6f052bf5403e84e20cf0"//replace with your openweatherapi
const cityInput = document.getElementById("city-input")
const getWeatherBtn = document.getElementById("get-weather-btn")
const weatherInfo = document.getElementById("weather-info")
const forecastInfo = document.getElementById("forecast-info")
const forecastList = document.getElementById("forecast-list")
const cityName = document.getElementById("city-name")
const temperature = document.getElementById("temperature")
const humidity = document.getElementById("humidity")
const description = document.getElementById("description")

getWeatherBtn.addEventListener("click",getWeather)

function getWeather(){
    const city = cityInput.value.trim();

    if(city === ""){
        alert("Enter Your city name....")
        return
    }

    fecthWeatherData(city)
}

function fecthWeatherData(city){
    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;


    // fetch current weather data 
    fetch(currentWeatherUrl)
    .then((response)=> response.json())
    .then((data)=>{
        cityName.textContent = `weather in ${data.name}`;
        temperature.textContent = `Temperature : ${data.main.temp}°C`;
        humidity.textContent = `Humidity :${data.main.humidity}%`;
        description.textContent = `Description: ${data.weather[0].description}`
    })
    .catch((error)=>{
        alert("Error fetching weather data....")
    })
}
h
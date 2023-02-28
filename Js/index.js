// Variaveis e seleção de elementos
const apiKey = "31831413373de855a8953d36b0031d8f";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const weatherContainer = document.querySelector('#weather-data');
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const imgElement = document.querySelector("#img-clima");
const dayElement = document.querySelector("#day");
const tempMaxElement = document.querySelector("#temp-max");
const tempMinElement = document.querySelector("#temp-min");

var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);


// Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return (data);
};

const showWeatherData = async (city) => {
     const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", ` http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

   
    
    weatherContainer.classList.remove('hide');
};

// Eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

   showWeatherData(city);
});


cityInput.addEventListener("Keyup", (e) =>{
    if (e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);
    }
});
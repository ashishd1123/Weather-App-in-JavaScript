"use strict";

let dropdownList = document.getElementById('dropdownList');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let winds = document.getElementById('winds');
let humidity = document.getElementById('humidity');
let weatherIcon = document.getElementById('weatherIcon');
let windDirection = document.getElementById('windDirection');

let currentTemp;

function init() {
    document.getElementById('contentDetails').style.display = 'block';
    document.getElementById('weatherDetails').style.display = 'none';
    loadCities();
}

function loadCities() {
    let option = new Option("Select a City", 'select');
    dropdownList.appendChild(option);
    for (let city of cities) {
        let option = new Option(city.name, city.name);
        dropdownList.appendChild(option);
    }
}

function getWeatherDetails() {
    for (let city of cities) {
        if (city.name === dropdownList.value) {
            const fetchPasswordURL = `http://api.weatherstack.com/current?access_key=3e00bc2d9f78891a9f906df9e26c020c&query=${city.latitude},${city.longitude}`;
            $.ajax({
                type: "GET",
                async: false,
                url: fetchPasswordURL,
                success: function(result) {
                    console.log(result);
                    clearFields();
                    displyWeatherDetials(result);
                },
                error: function() {
                    clearFields();
                }
            })

        }
    }
}


function displyWeatherDetials(data) {
    document.getElementById('contentDetails').style.display = 'none';
    document.getElementById('weatherDetails').style.display = 'block';

    currentTemp = data.current.temperature;
    cityName.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    weatherIcon.src = data.current.weather_icons[0];
    temperature.innerHTML = `${currentTemp} °C`;
    description.innerHTML = `Forecast: ${data.current.weather_descriptions[0]} <br><br>`;
    winds.innerHTML = `Wind Speed: ${data.current.wind_speed} km/h`;
    windDirection.innerHTML = `Wind Direction: ${data.current.wind_dir}`;
    humidity.innerHTML = `City Humidity: ${data.current.humidity}%`;
}

function clearFields() {
    cityName.innerHTML = '';
    weatherIcon.src = '';
    temperature.innerHTML = '';
    description.innerHTML = `This might be a security/authorization problem, Currently can't find the deatils on the city, Please gry again later`;
    winds.innerHTML = '';
    windDirection.innerHTML = '';
    humidity.innerHTML = '';
}
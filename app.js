let buttonsearch = document.getElementById('btnserh');
let cityname = document.querySelector('.search');
let wheather = document.querySelector('.wheather');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.windspeed');

async function data(city) {
    const APIkey = /* your api key */;
    const url = /* your api link */;

    let data_res = await fetch(url).then(response => response.json());
    console.log(data_res);

    if (data_res.main) {
        wheather.innerHTML = `${Math.round(data_res.main.temp - 273.15)} °C`;
    } else {
        wheather.innerHTML = "City not found";
    }

    if (data_res.main.humidity) {
        humidity.innerHTML = `${data_res.main.humidity} %`;
    } else {
        humidity.innerHTML = "Data not found";
    }

    if (data_res.wind.speed) {
        windspeed.innerHTML = `${data_res.wind.speed} km/h`;
    } else {
        windspeed.innerHTML = "Data not found";
    }
}

buttonsearch.addEventListener("click", () => {
    let city = cityname.value;  // Get the value from the input field
    data(city);
});

const DOM_Elements = {
    weather_table: '.weather-table'
}

const create_row = (high, low, forecast, humidity) => {
    const html =
        `<tr class="remove">
            <td>${high}</td>
            <td>${low}</td>
            <td>${forecast}</td>
            <td>${humidity}</td>
        </tr>`;
    
        document.querySelector(DOM_Elements.weather_table).insertAdjacentHTML('beforeend', html)
}

const load_data = async () => {
    // delete previous data
    // document.getElementsByClassName("remove").remove();
    let city = document.querySelector('#city');
    console.log(city.value)
    let response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=210bd89c9bef633706a4a6a0f3181de5`);
    console.log(response);
    // create_row(response.main.temp_max, response.main.temp_min, response.weather[0].main, response.main.humidity)
}

const form = document.querySelector('#locationDataForm')

form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    load_data();
} )
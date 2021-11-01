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
    removeArr = document.getElementsByClassName("remove");
    if (removeArr.length > 0) {
        removeArr[0].remove();
    }
    let city = document.querySelector('#city');
    // let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=210bd89c9bef633706a4a6a0f3181de5`);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=210bd89c9bef633706a4a6a0f3181de5&units=imperial`)
        .then(response => response.json())
        .then(data => {
            create_row(data.main.temp_max, data.main.temp_min, data.weather[0].main, data.main.humidity)
        })
}

const form = document.querySelector('#locationDataForm')

form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    load_data();
} )
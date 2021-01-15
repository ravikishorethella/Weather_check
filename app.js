const cityForm = document.querySelector('form.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = data => {
    const {cityDetails, weatherDetails} = data;
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    // set the icon and time images
    const iconSrc = `/img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weatherDetails.IsDayTime ? '/img/day.svg' : '/img/night.svg';
    time.setAttribute('src', timeSrc);

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get the city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    // update the UI with the city value
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // local storage
    localStorage.setItem('city', city);
})

if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}

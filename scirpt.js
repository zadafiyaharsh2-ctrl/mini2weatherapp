document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.weather-button').addEventListener('click', function () {
        const location = document.querySelector('.location-input').value;
        getWeather(location);
    });
});

function getWeather(location) {
    // If location is empty
    if (!location) {
        alert('No location provided');
        document.getElementById('infodisplay').style.display = 'none';
        return;
    }

    // Set API key & URL
    const apikey = '890ff5356a5c4bdebca124638251508';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Handle error from API
            if (data.error) {
                console.error('Error fetching weather data:', data.error);
                alert('Invalid location or API error!');
                document.getElementById('infodisplay').style.display = 'none';
                return;
            }

            // Update weather info
            document.querySelector('.temperature').textContent = `${data.current.temp_c}°C`;
            document.querySelector('.location').textContent = data.location.name;
            document.querySelector('.humidity-value').textContent = `${data.current.humidity}%`;
            document.querySelector('.wind-speed-value').textContent = `${data.current.wind_kph} km/h`;
            document.querySelector('.weather-icon-main').src = `https:${data.current.condition.icon}`;

            // Show info block
            document.getElementById('infodisplay').style.display = 'block';
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert('Failed to fetch weather data.');
            document.getElementById('infodisplay').style.display = 'none';
        });
}

 document.querySelector('.weather-button').addEventListener('click', function() {
        const location = document.querySelector('.location-input').value;
        getWeather(location);
    });

    function getWeather(location) {
        // Fetch weather data from API
        document.getElementsByClassName('location')[0].textContent = location;
        const apikey='890ff5356a5c4bdebca124638251508';
        const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Update weather information on the page
                document.querySelector('.temperature').textContent = `${data.current.temp_c}°C`;
                document.querySelector('.location').textContent = data.location.name;
                document.querySelector('.humidity-value').textContent = `${data.current.humidity}%`;
                document.querySelector('.wind-speed-value').textContent = `${data.current.wind_kph} km/h`;
                document.querySelector('.weather-icon-main').src = data.current.condition.icon;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
           document.getElementById('infodisplay').style.display = 'block';

    };
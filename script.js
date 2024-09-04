document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'e2fc9c1177ad63e73de549035f72ffbf'; // Replace with your OpenWeatherMap API key
    const city = 'Edwardsville'; // You can change this to any city you want
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherContainer = document.getElementById('weather');
                weatherContainer.innerHTML = `
                    <p>${data.name}: ${data.main.temp}°C, ${data.weather[0].description}</p>
                `;
            } else {
                console.error('Error fetching the weather data:', data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});

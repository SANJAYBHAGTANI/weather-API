function TemShow() {
    let city = document.getElementById("search-box").value;
    if (city == "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "bf96667766c1572ca75b96b21f394e74";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("weather-city").innerText = data.name;
        document.getElementById("weather-temperature").innerText = data.main.temp + "°C";
        document.getElementById("weather-description").innerText = data.weather[0].description;
        document.getElementById("search-box").value = "";
        let sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        let sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

document.getElementById("sunrise").innerText = "Sunrise: " + sunriseTime;
document.getElementById("sunset").innerText = "Sunset: " + sunsetTime;

        let iconCode = data.weather[0].icon;
        document.getElementById("weather-icon").style.display = "block";
        document.getElementById("weather-icon").src = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      });
}
document.getElementById("search-box").addEventListener("keydown", function(event){

if(event.key === "Enter"){
TemShow();
}

});
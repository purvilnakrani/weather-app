const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "d192c38bd234f6172c810a2c1da6de5c"
// const apiKey = "863242cfb2b1d357e6093d9a4df19a4b" videokey

const btn = document.querySelector(".btn");
const input = document.querySelector(".searchInput")
const weatherImg = document.querySelector(".container img")
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")
const typeImg = document.querySelector(".footer img")
const typePercentage = document.querySelector(".percentage")
const type = document.querySelector(".type")
const windImg = document.querySelector(".wind img")
const windSpeed = document.querySelector(".windSpeed")
const windType = document.querySelector(".windType")

btn.addEventListener("click", async () => {
    console.log("clicked");
    if (!input.value) {
        const responce = await fetch(apiUrl + surat + '&appid=${apiKey}')
        var data = await responce.json();
    } else {
        const responce = await fetch(apiUrl + input.value + '&appid=${apiKey}')
        var data = await responce.json();
    }
    console.log(data);

    // if (data.weather[0].main == "Clouds") {
    //     weatherImg.src = "images/clouds.png"
    // } else if (data.weather[0].main == "Clear") {
    //     weatherImg.src = "images/clear.png"
    // } else if (data.weather[0].main == "Rain") {
    //     weatherImg.src = "images/Rain.png"
    // } else if (data.weather[0].main == "Drizzle") {
    //     weatherImg.src = "images/drizzle.png"
    // } else if (data.weather[0].main == "Mist") {
    //     weatherImg.src = "images/mist.png"
    // }

    // temp.innerHTML = Math.round(data.main.temp) + "°c";
    // city.innerHTML = data.name;
    // type.innerHTML = data.main.humidity = "%";
    // windType.innerHtml = data.main.speed + "km/h";
}
);

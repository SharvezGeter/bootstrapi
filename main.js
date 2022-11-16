//PART 1
//RANDOM DOG GENERATOR
let img = document.querySelector("#img");
let button = document.querySelector("#button");

button.addEventListener("click", () => {

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        //console.log(response.json());
        return response.json()
    })
    .then(function(data){
        console.log(data.message);
        console.log(data.status);

        img.src = data.message
        img.style.width = "250px"
    })
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//PART 2
//WEATHER APP
let weatherForm = document.querySelector("#weatherform");
let cityInput = document.querySelector("#cityInput");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let description = document.querySelector("#description");
let cityWeather =  document.querySelector("#cityWeather");



weatherForm.addEventListener("submit", (event) => 
{
    
    let cityInput = document.querySelector("#cityInput");
    event.preventDefault();

    //https://goweather.herokuapp.com/weather/
    

    fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${cityInput.value}})`))
    .then(function(response){
        // console.log(response)
        return response.json() 
    })
    .then(function(data){
        console.log(data)
        temp.innerText = data.temperature
        wind.innerText = data.wind
        description.innerText = data.description
    })
    cityWeather.innerText = `Today's weather for ${cityInput.value}`
    cityInput.value = ""
})

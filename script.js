const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherbox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');

search.addEventListener('click',()=>{
    const APIKey='5fd8a48b85c57d2ed26dabe17dad4e17';
    const city=document.querySelector('.search-box input').value;
    if(city=='')
    {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`).then(response=> response.json()).then(json=>{
        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('.weather-box .temperature');
        const description=document.querySelector('.weather-box .description');
        const humidity=document.querySelector('.weather-details .humidity span');
        const wind=document.querySelector('.weather-detals .wind span');
        switch(json.weather[0].main)
        {
            case 'Clear':
                image.src='images/clear.png';
                break;
            case 'Rain':
                image.src='images/rain.png';
                break;
            case 'Snow':
                image.src='images/snow.png';
                break;
            case 'Clouds':
                image.src='images/cloud.png';
                break;
            case 'Mist':
                image.src='images/mist.png';
                break;
            case 'Haze':
                image.src='images/mist.png';
                break;
            default:
                image.src='images/cloud.png';
        }
        temperature.innerHTML=`${parseInt(json.main.temp)}<span>C</span>`;
        description.innerHTML=`${json.weather[0].description}`;
        humidity.innerHTML=`${json.main.humidity}%`;
        wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
    });
});



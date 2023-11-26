const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9ad1a4161msh6e33cc83b4c090ep197649jsn70119147e9a8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const weatherrequest = (city) => {
	document.getElementById('City').innerHTML = city;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	fetch(url, options)
		.then(response => response.json())
		.then((response) => {
			document.getElementById('h1').style.display = "block";
			document.getElementById('card').style.display = "block";
			document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
			document.getElementById('temp').innerHTML = response.temp;
			document.getElementById('feels_like').innerHTML = response.feels_like;
			document.getElementById('humidity').innerHTML = response.humidity;
			document.getElementById('min_temp').innerHTML = response.min_temp;
			document.getElementById('max_temp').innerHTML = response.max_temp;
			document.getElementById('wind_speed').innerHTML = response.wind_speed;
			document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
			document.getElementById('sunrise').innerHTML = response.sunrise;
			document.getElementById('sunset').innerHTML = response.sunset;
			console.log(response);
		})
		.catch(err => console.log(err));
};

search = document.getElementById('search');
search.addEventListener('click', (e) => {
	console.log("button pressed");
	weatherrequest(cityName.value);
})
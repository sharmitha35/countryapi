let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  let weatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=3386eb3c9192fee0f98f5a9f90ff0bd3`;
  console.log(finalURL);
  console.log(weatherURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(
        //   Object.values(data[0].languages).toString().split(",").join(", ")
        // );
      result.innerHTML += `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    fetch(weatherURL)
    .then(async(response) => 
    {
      return await response.json()
    })
    .then(async(data) => {
     console.log(data )
      result.innerHTML += `
      <div class="wrapper">
      <div class="data-wrapper">
          <h4>Weather:</h4>
          <span>${data.base}</span>
      </div>
  </div>
  `;
})
.catch(() => {
  if (countryName.length == 0) {
    result.innerHTML = `<h3>The input field cannot be empty</h3>`;
  } else {
    result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
  }
});

});
const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const country = document.querySelector(".country");
const search = document.querySelector(".search");

async function getCuontry() {
  const URL = await fetch("https://restcountries.com/v3.1/all");
  const res = await URL.json();
  console.log(res);
  res.forEach((element) => {
    showCountry(element);
  });
}

getCuontry();

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `
  <a href="">
  <div class="country">
  <div class="country-img">
  <img src="${data.flags.png}" alt="" />
  </div>
  <div class="country-info">
  <h5 class="countryName">${data.name.common}</h5>
  <p class="countryPopulation"><strong>Население: </strong>${data.population}</p>
  <p class="regionName"><strong>Регион: </strong>${data.region}</p>
  <p class="countryCapital"><strong>Столица: </strong>${data.capital}</p>
  </div>
  </div>
  </a>
  `;
  countriesElem.append(country);
}

dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown");
});

const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
console.log(regionName);
region.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    Array.from(regionName).forEach((elem) => {
      console.log(elem.innerText);
      if (
        elem.innerText.includes(element.innerText) ||
        element.innerText == "All"
      ) {
        elem.parentElement.parentElement.style.display = "grid";
      } else {
        elem.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

search.addEventListener("input", () => {
  Array.from(countryName).forEach((elem) => {
    console.log(elem.innerText);
    if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      elem.parentElement.parentElement.style.display = "grid";
    } else {
      elem.parentElement.parentElement.style.display = "none";
    }
  });
});

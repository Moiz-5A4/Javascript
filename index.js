"use strict";
const container = document.getElementById("app");
const search = document.getElementById("search");
const selectElement = document.querySelector('.regions');
let regions = "all";
var ctryData;
async function getctryData() {
    var data = await fetch(`https://restcountries.com/v3.1/${regions}`);
    ctryData = await data.json();
    for (let i = 0; i <= ctryData.length; i++) {
        showctryData(ctryData[i]);
    }
}
const showctryData = (ctryData) => {
    var _a, _b;
    let output = `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4">
        <div class="card" id="cards" onclick="navigateToCountry(this)">
        <div class="cardimageblock">
        <img class="cardimage" src="${(_a = ctryData === null || ctryData === void 0 ? void 0 : ctryData.flags) === null || _a === void 0 ? void 0 : _a.svg}"   alt="img" />
        </div>
        <div class="p-3 h-100">
        <input type="hidden" value="${ctryData === null || ctryData === void 0 ? void 0 : ctryData.region}">
            <span>${(_b = ctryData === null || ctryData === void 0 ? void 0 : ctryData.name) === null || _b === void 0 ? void 0 : _b.common}</span>
            <h4>Region : ${ctryData === null || ctryData === void 0 ? void 0 : ctryData.region}</h4>
            <span class="card--details">Population : ${ctryData === null || ctryData === void 0 ? void 0 : ctryData.population}</span>
        </div></div></div>
    `;
    container.innerHTML += output;
};
getctryData();
function filterCountry() {
    regions = `${document.getElementById("regions").value}`;
    console.log(regions);
    container.innerHTML = '';
    getctryData();
}
function navigateToCountry(event) {
    var currentElement = event.innerText.split('\n');
    location.href = "./country-details.html?country=" + currentElement[0];
}
function searchCountry(search) {
    if (search.value !== "") {
        console.log(search);
        regions = `name/${search.value}`;
        container.innerHTML = '';
        getctryData();
    }
    else {
        regions = "all";
        getctryData();
    }
}

"use strict";
var countryJSON = new Array();
const country = document.getElementById("app");
const showDetails = (ctryDetail) => {
    var _a, _b, _c;
    let currencies = Object.entries(ctryDetail.currencies);
    let languages = Object.values(ctryDetail.languages);
    let output = `
    <div class="view-box row mx-5 my-3">
    <div class="col-sm-12 col-md-7">
    <div class="view-image"><img src="${(_a = ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.flags) === null || _a === void 0 ? void 0 : _a.svg}" class="img-fluid"></div>
    </div>
    <div class="col-sm-12 col-md-5">
    <div class="row">
    <div class="col-sm-12 offset-sm-0 col-md-8 offset-md-2">
    <div class="content">
    <h3>${(_b = ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.name) === null || _b === void 0 ? void 0 : _b.common}</h3>
    <div class="d-flex">
    <ul>
    <li><b>Native Name</b> ${(_c = ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.name) === null || _c === void 0 ? void 0 : _c.common}</li>
    <li><b>Population</b> ${ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.population}</li>
    <li><b>Region</b> ${ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.region}</li>
    <li><b>Sub Region</b> ${ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.subregion}</li>
    <li><b>Capital</b> ${ctryDetail === null || ctryDetail === void 0 ? void 0 : ctryDetail.capital[0]}</li>
    </ul>
    <ul>
    <li><b>Currencies</b> ${currencies[0][0]}</li>
    <li><b>Languages</b> ${languages}</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>`;
    country.innerHTML += output;
};
(async function () {
    debugger;
    console.log("countries");
    const country = location.href.split("=");
    var data = await fetch(`https://restcountries.com/v3.1/name/${country[1]}`);
    countryJSON = await data.json();
    let datas = countryJSON;
    showDetails(countryJSON[0]);
})();

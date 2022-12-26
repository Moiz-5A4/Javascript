const container: HTMLElement = document.getElementById("app")!;
const search: HTMLElement = document.getElementById("search")!;
const selectElement = document.querySelector('.regions')!;
let regions:string = "all"
var ctryData: any ;



async function getctryData() {
  var data = await fetch(`https://restcountries.com/v3.1/${regions}`);
   ctryData = await data.json();
for (let i = 0; i <= ctryData.length; i++) {
    showctryData(ctryData[i]);
}
}

const showctryData = (ctryData: any): void => {
  let output: string = `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4">
        <div class="card" id="cards" onclick="navigateToCountry(this)">
        <div class="cardimageblock">
        <img class="cardimage" src="${ctryData?.flags?.svg}"   alt="img" />
        </div>
        <div class="p-3 h-100">
        <input type="hidden" value="${ctryData?.region}">
            <span>${ctryData?.name?.common}</span>
            <h4>Region : ${ctryData?.region}</h4>
            <span class="card--details">Population : ${ctryData?.population}</span>
        </div></div></div>
    `;
  container.innerHTML += output;
};

getctryData();


function filterCountry() {
        regions = `${(<HTMLSelectElement>document.getElementById("regions")).value}`;
        console.log(regions)
        container.innerHTML = '';

        getctryData()
}

function navigateToCountry(event:HTMLElement) {
    var currentElement = event.innerText.split('\n')
    location.href = "./country-details.html?country="+currentElement[0];
}

function searchCountry(search:HTMLInputElement) {
  if(search.value !== "") {
  console.log(search);
  regions = `name/${search.value}`;
  container.innerHTML = ''
  getctryData()
}
  else {
    regions = "all";
    getctryData()
  }
  
}
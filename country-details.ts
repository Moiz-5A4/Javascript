var countryJSON = new Array();
const country: HTMLElement | any = document.getElementById("app");

const showDetails = (ctryDetail: any): void => {
 let currencies =   Object.entries(ctryDetail.currencies)
 let languages = Object.values(ctryDetail.languages)
    let output: string = `
    <div class="view-box row mx-5 my-3">
    <div class="col-sm-12 col-md-7">
    <div class="view-image"><img src="${ctryDetail?.flags?.svg}" class="img-fluid"></div>
    </div>
    <div class="col-sm-12 col-md-5">
    <div class="row">
    <div class="col-sm-12 offset-sm-0 col-md-8 offset-md-2">
    <div class="content">
    <h3>${ctryDetail?.name?.common}</h3>
    <div class="d-flex">
    <ul>
    <li><b>Native Name</b> ${ctryDetail?.name?.common}</li>
    <li><b>Population</b> ${ctryDetail?.population}</li>
    <li><b>Region</b> ${ctryDetail?.region}</li>
    <li><b>Sub Region</b> ${ctryDetail?.subregion}</li>
    <li><b>Capital</b> ${ctryDetail?.capital[0]}</li>
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
    debugger
    console.log("countries")
    const country = location.href.split("=");
    var data: Response = await fetch(`https://restcountries.com/v3.1/name/${country[1]}`);
    countryJSON = await data.json();
    let datas: any = countryJSON
    showDetails(countryJSON[0])
     })();

   
    
   

 
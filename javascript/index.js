function updateLosAngelesTime() {
  let losAngelesVariable = document.querySelector("#los-angeles");
  if (losAngelesVariable) {
    let losAngelesDateVariable = losAngelesVariable.querySelector(".date");
    let losAngelesTimeVariable = losAngelesVariable.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateVariable.innerHTML = `Today is ${moment().format(
      "dddd, MMMM Do YYYY"
    )}`;
    losAngelesTimeVariable.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
setInterval(updateLosAngelesTime, 1000);

function updateParisTime() {
  let parisVariable = document.querySelector("#paris");
  if (parisVariable) {
    let parisDateVariable = parisVariable.querySelector(".date");
    let parisTimeVariable = parisVariable.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateVariable.innerHTML = `Today is ${moment().format(
      "dddd, MMMM Do YYYY"
    )}`;
    parisTimeVariable.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
setInterval(updateParisTime, 1000);

function updateViennaTime() {
  let viennaVariable = document.querySelector("#vienna");
  if (viennaVariable) {
    let viennaDateVariable = viennaVariable.querySelector(".date");
    let viennaTimeVariable = viennaVariable.querySelector(".time");
    let viennaTime = moment().tz("Europe/Vienna");
    viennaDateVariable.innerHTML = `Today is ${moment().format(
      "dddd, MMMM Do YYYY"
    )}`;
    viennaTimeVariable.innerHTML = viennaTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
setInterval(updateViennaTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesVariable = document.querySelector("#cities");
  citiesVariable.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">Today is ${cityTime.format(
              "dddd, MMMM Do YYYY"
            )}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectVariable = document.querySelector("#city");
citiesSelectVariable.addEventListener("change", updateCity);

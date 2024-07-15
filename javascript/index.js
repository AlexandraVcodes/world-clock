function updateLosAngelesTime() {
  let losAngelesVariable = document.querySelector("#los-angeles");
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
setInterval(updateLosAngelesTime, 1000);

function updateParisTime() {
  let parisVariable = document.querySelector("#paris");
  let parisDateVariable = parisVariable.querySelector(".date");
  let parisTimeVariable = parisVariable.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateVariable.innerHTML = `Today is ${moment().format(
    "dddd, MMMM Do YYYY"
  )}`;
  parisTimeVariable.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small]");
}
setInterval(updateParisTime, 1000);

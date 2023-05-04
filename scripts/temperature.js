// Convert FtoC and back again

"use strict";
function init() {
  const calBtn = document.getElementById("calBtn");
  calBtn.onclick = oncalBtnClicked;
}

const celcius = document.getElementById(celcius);

function oncalBtnClicked() {
  const fahrenheit = document.getElementById(`fahrenheit`);
  const conversion = Number(fahrenheit.value - 30) / 2;
  const conversionEl = document.getElementById(`conversion`);
  conversionEl = conversion;
}

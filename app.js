thermostat = new Thermostat();

function displayTemp() {
  document.getElementById("display").innerHTML = thermostat.getTemp();
  document.getElementById("display").style.color = thermostat.getColour();
}

function thermoUp() {
  thermostat.upTemp();
  displayTemp();
}

function thermoDown() {
  thermostat.downTemp();
  displayTemp();
}

function powerSaveMode() {
  thermostat.powerSaveMode();
}

function reset() {
  thermostat.resetTemp();
  displayTemp();
}

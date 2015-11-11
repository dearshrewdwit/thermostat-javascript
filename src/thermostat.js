function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.mode = true;
}

Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.upTemp = function() {
  if (this.temp >= this.maxTemp) {
     throw new Error("Max temp = "+ this.maxTemp);
  }
  this.temp ++;
};

Thermostat.prototype.downTemp = function() {
  if (this.temp <= this.minTemp) {
     throw new Error("Min temp = " + this.minTemp);
  }
  this.temp --;
};

Thermostat.prototype.powerSaveMode = function() {
  if (this.mode) {
    this.mode = false;
    this.maxTemp = 32;
  }
  else {
    this.mode = true;
    this.maxTemp = 25;
  }
};

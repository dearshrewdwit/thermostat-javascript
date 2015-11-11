function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.upTemp = function() {
  this.temp ++;
};

Thermostat.prototype.downTemp = function() {
  this.temp --;
};

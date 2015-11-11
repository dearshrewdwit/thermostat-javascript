describe("thermostat logic", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20", function(){
    expect(thermostat.getTemp()).toEqual(20);
  });

  it("we can make it HOT", function() {
    thermostat.upTemp();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it("we can make it COLD", function() {
    thermostat.downTemp();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it("has a min temp", function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it("can't go below 10", function() {
    thermostat.temp = 10;
    expect( function() {thermostat.downTemp();}).toThrowError("Min temp = 10");
  });

  it("can't go above 25", function() {
    thermostat.temp = 25;
    expect( function() {thermostat.upTemp();}).toThrowError("Max temp = 25");
  });

  it("the default mode of Power Save is true", function() {
    expect(thermostat.mode).toBe(true);
  });

  it("power save mode off changes max temp to 32", function() {
    thermostat.powerSaveMode();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it("power save mode on changes max temp to 25", function() {
    thermostat.powerSaveMode();
    thermostat.powerSaveMode();
    expect(thermostat.maxTemp).toEqual(25);
  });
});

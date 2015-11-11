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


});

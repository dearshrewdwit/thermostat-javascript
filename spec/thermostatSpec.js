describe("thermostat logic", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20", function(){
    expect(thermostat.getTemp()).toEqual(20);
  });
});

describe('displayTemp', function() {
  it('displays the temperature of the thermostat on the page', function() {
    spyOn('thermostat', 'getTemp').and.returnValue(23);
    displayTemp();
    expect(document.getElementById("display").innerHTML).toEqual("23");
  });
});

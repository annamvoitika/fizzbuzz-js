describe("fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should print Fizz", function() {
    expect(fizzbuzz.divide(3)).toEqual('Fizz');
  });
});

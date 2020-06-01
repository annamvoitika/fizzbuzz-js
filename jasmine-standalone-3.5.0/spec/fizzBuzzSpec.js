describe("fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should print Fizz", function() {
    expect(fizzbuzz.divide(3)).toEqual('Fizz');
  });

  it("should print Buzz", function() {
    expect(fizzbuzz.divide(5)).toEqual('Buzz');
  });

  it("should print FizzBuzz", function() {
    expect(fizzbuzz.divide(15)).toEqual('FizzBuzz');
  });

  it("should print number", function() {
    expect(fizzbuzz.divide(2)).toEqual(2);
  });
});

describe("fizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
    });


  describe("returns fizz when passed a multiple of 3", function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });


  describe("returns buzz when passed a multipleof 5", function() {
     it('buzzes for 5', function() {
       expect(fizzBuzz.play(5)).toEqual('Buzz');
     });
   });
  describe("returns fizzbuzz if passed a multiple of 3 and 5", function() {
       it('fizzbuzzes for 15', function() {
        expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
      });
    });
  describe("returns the number if it's not in any of the above cases", function() {
    it('returns the same number', function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});


it('should calculate the monthly rate correctly', function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.15');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 12,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('1001.92')
});

// failed test with 0
it("should work with no interest rate", function() {
  const values = {
    amount: 100000,
    years: 12,
    rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('0')
});

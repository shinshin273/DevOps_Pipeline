// Import the necessary modules for testing
import { expect } from "chai";

// Define the functions directly within the test file
function dollarsToCents(dollars) {
  return Math.round(dollars * 100);
}

function centsToDollars(cents) {
  return cents / 100;
}

// Describe the tests
describe("Currency Converter", function () {
  describe("Dollars to Cents conversion", function () {
    it("converts dollars to cents correctly", function () {
      const cents = dollarsToCents(2.5);
      expect(cents).to.equal(250);
    });
  });

  describe("Cents to Dollars conversion", function () {
    it("converts cents to dollars correctly", function () {
      const dollars = centsToDollars(250);
      expect(dollars).to.equal(2.5);
    });
  });
});

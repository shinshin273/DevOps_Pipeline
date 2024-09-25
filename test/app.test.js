const { expect } = require("chai");
const converter = require("../app/converter");

describe("Ice Cream Sales Converter", function() {
  describe("Dollars to Cents conversion", function() {
    it("should convert dollars to cents correctly", function() {
      expect(converter.dollarsToCents(1)).to.equal(100);
      expect(converter.dollarsToCents(2.50)).to.equal(250);
      expect(converter.dollarsToCents(0)).to.equal(0);
    });
  });

  describe("Cents to Dollars conversion", function() {
    it("should convert cents to dollars correctly", function() {
      expect(converter.centsToDollars(100)).to.equal(1);
      expect(converter.centsToDollars(250)).to.equal(2.50);
      expect(converter.centsToDollars(0)).to.equal(0);
    });
  });
});

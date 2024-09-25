// Use ES module syntax for importing functions
import { expect } from "chai";
import { dollarsToCents, centsToDollars } from "../app/converter.js"; // Make sure to include the .js extension when importing ES modules

describe("Currency Converter", function() {
    describe("Dollars to Cents conversion", function() {
        it("converts dollars to cents correctly", function() {
            const cents = dollarsToCents(2.50);
            expect(cents).to.equal(250);
        });
    });

    describe("Cents to Dollars conversion", function() {
        it("converts cents to dollars correctly", function() {
            const dollars = centsToDollars(250);
            expect(dollars).to.equal(2.5);
        });
    });
});

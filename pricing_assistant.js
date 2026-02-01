//Step 1: Create and Initialize Variables
const productName = "Vanilla Cloud Fragrance";

let costPerUnit = 9.99;
let basePrice = 14.99;
let discountRate = 0.1; 
let salesTaxRate = 0.07;
let rent = 1200;
let utilities = 300;
let fixedMonthlyCosts = rent + utilities;

//Step 2: Calculate Pricing & Profit Metrics
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

//Step 3: Print to Console
console.log("Product Name: " + productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units per Month: " + breakEvenUnits);
console.log("Is the product profitable per unit? " + isProfitablePerUnit);
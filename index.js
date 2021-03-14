let initialAmount = Number(window.prompt("Please, enter amount of money:"));
console.log("initialAmount:", initialAmount, typeof initialAmount);

let yearsNumber = parseFloat(window.prompt("Please, enter number of years:"));
console.log("years:", yearsNumber, typeof yearsNumber);

let percentage = parseInt(window.prompt("Please, enter percentage of a year:"));
console.log("percentage:", percentage, typeof percentage);

let yearAmount = [];
let yearProfit = [];
let totalAmount;
let totalProfit;

if (
  initialAmount < 1000 ||
  yearsNumber < 1 ||
  percentage > 100 ||
  percentage < 0 ||
  isNaN(initialAmount) ||
  isNaN(yearsNumber) ||
  isNaN(percentage)
) {
  window.alert("Invalid input data");
  console.log("Invalid input data");
} else {
  for (let i = 1; i <= yearsNumber; i++) {
    yearAmount[0] = initialAmount;
    yearProfit[0] = 0;
    yearAmount[i] = parseFloat(
      (yearAmount[i - 1] * (1 + percentage / 100)).toFixed(2)
    );
    yearProfit[i] = parseFloat((yearAmount[i] - initialAmount).toFixed(2));
    console.log("yearAmount", i, ":", yearAmount[i]);
    console.log("yearProfit", i, ":", yearProfit[i]);
    totalAmount = yearAmount[yearsNumber];
    totalProfit = totalAmount - initialAmount;
  }

  window.alert(
    "Initial amount: " +
      initialAmount +
      "\n" +
      "Number of years: " +
      yearsNumber +
      "\n" +
      "Percentage of year: " +
      percentage +
      "\n \n \n" +
      "Total profit: " +
      totalProfit +
      " \n" +
      "Total amount: " +
      totalAmount
  );
}

console.log("totalAmount", totalAmount);
console.log("totalProfit", totalProfit);

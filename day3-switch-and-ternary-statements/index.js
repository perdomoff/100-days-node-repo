module.exports = tipCalculator = () => {
  const bills = [275, 40, 430];

  for (let i = 0; i < bills.length; i++) {
    bills[i] >= 50 && bills[i] <= 300
      ? console.log(`Bill #${i} is ${bills[i] * 0.15 + bills[i]}`)
      : console.log(`Bill #${i} is ${bills[i] * 0.2 + bills[i]}`);
  }
};
tipCalculator();

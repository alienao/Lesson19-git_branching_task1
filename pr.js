function oddDigits(number) {
  if (!number) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  return oddDigits(Math.floor(number / 10));
}

console.log(oddDigits(4211133));
console.log(oddDigits(7791));
console.log(oddDigits(5));

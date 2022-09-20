function NumberToString(n, base = 10) {
  let result = "";
  let sign = "";

  if (n < 0) {
    n = "-";
    n = -n;
  }

  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}

console.log(NumberToString(10, 10));

function PromptToQuestion(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) {
    return "Sorry your entry is not a number";
  }
  return result;
}

console.log(PromptToQuestion("What is your number"));

function lastElement(array) {
  if (array.length === 0) {
    return { failed: true };
  }
  return { element: array[array.length - 1] };
}

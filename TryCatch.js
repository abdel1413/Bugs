function direction(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "right") return "R";
  if (result.toLowerCase() == "left") return "L";
  throw new Error("invalid entry " + result);
}

function Look() {
  if (direction("which way ") == "R") {
    return "A house";
  } else {
    return "Opps!!, you are running into two bears' mouths";
  }
}

try {
  console.log("you see ", Look());
} catch (error) {
  console.log("someting went wrong" + error);
}

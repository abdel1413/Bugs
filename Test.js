function test(label, body) {
  if (!body()) {
    console.log(`failed to ${label}`);
  }
}

test("convert language to upper case", () => {
  return "France".toUpperCase() == "FRANCE";
});

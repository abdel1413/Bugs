class MultiplicatorUnitFailure extends Error {}
function primitiveMultiply(a, b) {
  if (Math.random() <= 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Tchumk");
  }
}

function multiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        throw error;
      }
    }
  }
}

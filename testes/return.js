function counter() {
  for (var count = 1; ; count++) {
    // loop infinito
    console.log(count + "A"); // até 5
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // até 4
  }
}

counter();

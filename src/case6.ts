class H {
  static main(): void {
    const L: number = 1000; // limit the seq of Harshad numbers
    for (let i = 1; i <= L; i++) {
      if (i % H.loop(i) === 0) {
        console.log(i);
      }
    }
  }

  static loop(N: number): number {
    let S: number = 0;
    while (N > 0) {
      let D: number = N % 10;
      S += D;
      N = (N - D) / 10;
    }
    return S;
  }
}

H.main();

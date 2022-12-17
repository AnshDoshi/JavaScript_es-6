function* generator(i) {
    yield i + 1;
    yield 2;
    yield 3;
    return "finished";
  }
  
  const gen = generator(10);
//   for (const iterator of gen) {
//     console.log(iterator);
//   }
  
//   console.log(gen.next().value); //11
//   console.log(gen.next().value); //2
//   console.log(gen.next().value); //3
//   console.log(gen.next().value); //finished
//   console.log(gen.next().value); //undefined

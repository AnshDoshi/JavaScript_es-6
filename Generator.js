function* generator(){
    yield 1;
    yield 2;
    yield 3;
    return 'finished'
};
const gen=generator();
for (const iterator of gen) {
    console.log(iterator);
    }




// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
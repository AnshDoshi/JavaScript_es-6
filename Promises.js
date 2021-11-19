// race
// all
// any
// allsettled

const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p1');
    }, 50);
  });

const login = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a');
    }, 100);
  });

const users = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('b');
    }, 200);
  });

const apiCalls = async () => {
  try {
    // console.time('noraml promise')
    // const r1 = await login();
    // console.log(r1);
    // const r2 = await users(r1);
    // console.timeEnd('noraml promise')
    // console.log(r2);
    console.time('promise all');
    const result = await Promise.allSettled([p1(), login(), users()]);
    console.log(result);
    console.log(result.filter(x => x.status === 'fulfilled'));
    console.timeEnd('promise all');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally call always');
  }
};

apiCalls();

// old javascript technic
// p1()
//   .then((value) =>
//     p2(value)
//       .then((val) => console.log(val))
//       .catch((err) => console.log(err))
//   )
//   .catch((err) => console.log("err", err));
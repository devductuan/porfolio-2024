async function test() {
  function job() {
    return new Promise((resolve, reject) => resolve());
  }

  let promise = job(); // Promise type, if console.log, it’s just a promise.

  promise
    .then(function () {
      console.log("Success 1");
      return new Promise((resolve, reject) => reject());
    })
    .then(function () {
      console.log("Success 2");
    })
    .catch(function () {
      console.log("Error 1");
    })
    .then(function () {
      console.log("Success 3");
    });

  async function f() {
    let result = "first!";
    promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000);
    });
  }

  result = await promise;
  console.log(result);

  f();
}

test();

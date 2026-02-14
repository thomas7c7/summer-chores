// promiseVersion.js

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve();
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;

      if (!fellAsleep) {
        console.log(`${name} finished using the weed eater.`);
        resolve();
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;

      if (!fellAsleep) {
        console.log(`${name} finished trimming the hedges.`);
        resolve();
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;

      if (!fellAsleep) {
        console.log(`${name} finished collecting wood.`);
        resolve();
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;

      if (!fellAsleep) {
        console.log(`${name} finished watering the garden.`);
        resolve();
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then(() => weedEat(name))
    .then(() => trimHedges(name))
    .then(() => collectWood(name))
    .then(() => waterGarden(name))
    .then(() => {
      console.log(`${name} finished all their chores!`);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function
doSummerChores("Thomas");

// create random number of array 
const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));

const reccuringArray = arr => {
  console.log(arr);
  //using hash map solution
  let map = {};
  arr.forEach(i => {
    if (i in map) {
      console.log(i + " is recurring")
    }
    const item = i;
    map[item] = true;
  })
  return false;
}

reccuringArray(array)
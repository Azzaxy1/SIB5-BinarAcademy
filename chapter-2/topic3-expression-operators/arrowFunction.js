// return function
const calculateCubeVolume = (length) => {
  return length ** 3; // Perpangkatan
};

const cubeVolume = calculateCubeVolume(11);
console.log("cubeVolume:", cubeVolume);

const helloYou = (name) => {
  console.log(`${name}, anak Serang`);
};

const azis = helloYou("Dwi");
console.log("azis:", azis);

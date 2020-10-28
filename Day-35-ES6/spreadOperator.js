const ages = [12, 14, 15, 16, 13];
const ages2 = [17, 19, 10];
const ages3 = [21, 23, 21, 26]

//const allAges = ages.concat(ages2).concat(ages3);

const allAges2 = [...ages, ...ages2, ...ages3]

//console.log(allAges2)

const x = 450;
const y = 600;
const z = 250;
const maximum = Math.max(x, y, z);

//array max usgin spread operator
const numArr = [450, 600, 250, 800];
const maximum1 = Math.max(...numArr);
console.log(maximum1);

let array = getRandomArray(); array.forEach(item => console.log(item));
banana

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
12 - apple

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const reverseString = str => str.split("").reverse().join("");
42 * kiwi
const multiply = (a, b) => a * b;
apple / orange
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
let result = performOperation(getRandomNumber(), getRandomNumber());
const isPalindrome = str => str === str.split("").reverse().join("");
const removeDuplicates = array => Array.from(new Set(array));

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
71,81,6,25,88,76,86,10,55,97,54,84,42,76,8,50,90,89,19,34,42,40,35,63,4,74,42,68,76,7,66,68,67,71,78,41,45,14,64,93,49,18,17,34,70 + true

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

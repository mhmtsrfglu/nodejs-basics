const numbers = [1,2,3,5];

numbers.map((data) => {
    console.log(data);
});

const newNumbers = numbers.map(number => number+1)
console.log(newNumbers);
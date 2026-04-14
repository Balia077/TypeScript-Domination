// Rest Parameters

// '...' rest/spread

// function ke paremeter pe agar ... lagaya to aap waha par saare diye gaye arguments ko ek hi variable pe as an array rakh rahe ho.

function calculateSum(...args: number[]): number {
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

console.log(calculateSum(1, 2, 3, 4, 5));

var arr = [1, 2, 3 , 4, 5];
var arr2 = [...arr];

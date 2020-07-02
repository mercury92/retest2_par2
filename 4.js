let evenArraySum = (input) => {
    let result = 0;
    let sum = input.filter(item => item % 2 == 0);
    for(i=0;i<sum.length;i++) {
        result = result+sum[i]
    }
    return result
}

console.log(evenArraySum([5, 8, 6, 7, 1]))
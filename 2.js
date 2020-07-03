let pow = () => {
    a = prompt("enter number")
    n = prompt("enter number")
    let result = 1;

    n = Number(n)
    a = Number(a)
    
    for(i=0;i<n;i++) {
        result = result*a
    }
    return result
}
console.log(pow());

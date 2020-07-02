let charCheck = () => {
    n= prompt("enter character")
    if(n == n.toUpperCase()) {
        return "All character are capital."
    }
    if(n == n.toLowerCase()) {
        return "All character are small."
    }
    else{
        return "All character are mix."
    }
}

console.log(charCheck())
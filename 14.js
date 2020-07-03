let numberOfJumpFrog = (speed,distance) => {
    if(distance%speed ===0) {
        return distance/speed
    }
    else{
        return Math.ceil(distance/speed)

    }
}
console.log(numberOfJumpFrog(3,12));
console.log(numberOfJumpFrog(5,23));

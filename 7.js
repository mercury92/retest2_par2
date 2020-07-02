let numberOfSquare = (height, width) => {
    let sum
    let c = 10
    let divisible = 0
    let n = [height, width]
    let area1
    let area2
    let area
    const max = Math.max.apply(Math, n)

    for (i = 2; i < max; i++) {
        divisible = 0
        for (j = 0; j < n.length; j++) {
            if (n[j] % i == 0) {
                divisible += 1
            }
            if (divisible == n.length) {
                sum = i
            }
        }
    }
    area = height * width
    area = area / (sum * sum)
    return area

}
console.log(numberOfSquare(20, 15));

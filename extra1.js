let sumVector = (v1, v2, v3) => {
    let result = []
    v1 = v1.join("");
    v2 = v2.join("");
    v3 = v3.join("");
    for (i = 0; i < v1.length; i++) {
        for (j = 0; j < v2.length; j++) {
            for (k = 0; k < v3.length; k++) {
                sum = v1[i] + v2[j] + v3[k];
                result.push(sum)
            }
        }
    }
    return result
}
console.log(sumVector([3, 5, 7], [2, 4, 8], [7, 9, 1, 2]))
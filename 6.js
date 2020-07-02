let isTheSameAnagram = (text1, text2) => {
    let count = 0;
    let result = "";
    if (text1.length < text2.length) {
        str1 = text1;
        str2 = text2;
    }
    else {
        str1 = text2;
        str2 = text1;
    }

    for (i = 0; i < str2.length; i++) {
        for (j = 0; j < str2.length; j++) {
            if (str2.charAt(i) == str1.charAt(j)) {
                count = count + 1
            }
        }
        if (count) {
            result = result + str2.charAt(i);
        }
    }
    if (result.length >= str1.length) {
        return true
    }
    else {
        return false
    }

}
console.log(isTheSameAnagram("I am Lord Voldemort", "Tom Marvolo Riddle"));

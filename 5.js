let changeToThaiDate = (input) => {
  sum = input.split("-")

  if (sum[2]>0) {
    sum[2] = Number(sum[2])
    sum[2] = sum[2] + 543
    sum[2] = `พ.ศ. ${sum[2]}`
  }

  else {
    return result = "error";
  }

  if (sum[1] === "01" || sum[1] === "02" || sum[1] === "05" || sum[1] === "07" || sum[1] === "08" || 
      sum[1] === "10" || sum[1] === "12" && sum[1] !== '11') {
        
    if (sum[0] > 31) {
      return result = "error"
    }

    if (sum[0] <= 31) {
      sum[0] = `วันที่ ${sum[0]}`
    }

  }

  if (sum[1] === "03" || sum[1] === "04" || sum[1] === "06" || sum[1] === "09" || sum[1] === "11") {
    
    if (sum[0] <= 30) {
      sum[0] = `วันที่ ${sum[0]}`
    }

    if (sum[0] > 30) {
      return result = "error"
    }

  }

  else {
    return result = "error"
  }

  if (sum[1] < 13) {

    switch (sum[1]) {
      case "01"
        : sum[1] = `เดือน มกราคม`
        break;
      case "02"
        : sum[1] = `เดือน กุมภาพันธ์`
        break;
      case "03"
        : sum[1] = `เดือน มีนาคม`
        break;
      case "04"
        : sum[1] = `เดือน เมษายน`
        break;
      case "05"
        : sum[1] = `เดือน พฤษภาคม`
        break;
      case "06"
        : sum[1] = `เดือน มิถุนายม`
        break;
      case "07"
        : sum[1] = `เดือน กรกฏาคม`
        break;
      case "08"
        : sum[1] = `เดือน สิงหาคม`
        break;
      case "09"
        : sum[1] = `เดือน กันยายน`
        break;
      case "10"
        : sum[1] = `เดือน ตุลาคม`
        break;
      case "11"
        : sum[1] = `เดือน พฤศจิกายน`
        break;
      case "12"
        : sum[1] = `เดือน ธันวาคม`
        break;
      default
        : result = "error"
        break;
    }

  }

  else {
    return result = "error"
  }

  return result = `${sum[0]} ${sum[1]} ${sum[2]}`
}
console.log(changeToThaiDate('12-11-1996'))
console.log(changeToThaiDate('31-11-2000'))
console.log(changeToThaiDate('12-13-1996'))
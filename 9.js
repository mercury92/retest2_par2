let maxPossibleNumber = (number) => {
    let dotIndex
    number = number.toString(); //แปลง Number เป็น string '12523.97'
    number = number.split("");  // แปลง string เป็น array = ['1','2','5','2','3','.','9','7']

    dotIndex = number.indexOf('.')

    if (number.indexOf('.') > -1) {                // หาตำแหน่ง index โดยเมธอดนี้จะ return เลข index แรกที่เจอตัวที่เราต้องการหา ถ้าไม่เจอจะ return -1
        number.splice(number.indexOf('.'), 1)      // ถ้าเจอว่าใน array มีตัว '.' อยู่ แสดงว่า number.indexOf('.') >-1  ให้ทำการ splice เพื่อลบค่า โดย
    }                                              //จะทำการลบค่าใน array ตำแหน่งที่เจอค่านั้่นออกไป 1 ตำแหน่ง

    for (i = 0; i < number.length; i++) {           // วนลูปเพื่อเช็กว่า array ตำแหน่งแรก และ ถัดมา น้อยกว่าใช่หรือไม่ ถ้าน้อยกว่า ให้สลับค่ามากวก่าไว้ตำแหน่งด้านซ้าย
        for (j = 0; j < number.length; j++) {       // โดยวนลูป 2 ลูป  ลูปในให้เช็กตั้งแต่ element ตำแหน่งที่ 1 ถึงตำแหน่งสุดท้าย
            if (number[j] < number[j + 1]) {        // และลูปนอกเพื่อให้มันทำงานซ้ำจำนวน array.length รอบ  
                maxNum = number[j + 1]
                number[j + 1] = number[j]
                number[j] = maxNum
            }
            console.log(number);
            
        }
    }
    if (dotIndex !== -1) {                             //ในกรณี array ไม่มีตัว '.' ตัวแปร dotIndex จะมีค่าเป็น -1 ซึ่ง จะทำให้โปรแกรมเพี้ยน เพราะ 
        number.splice(dotIndex, 0, ".")                 // splice สามารถรับค่า จำนวนเต็มลบได้ ex.-1 หมายถึงจำแหน่งรองสุดท้ายของ arrray 
    }
    return number = Number(number.join(""))


}
console.log(maxPossibleNumber(69523));
console.log(maxPossibleNumber(12523.97));
console.log(maxPossibleNumber(955));

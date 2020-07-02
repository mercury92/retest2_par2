let toChange = (money) => {
    let sum = '';
    let Thousand = 0;
    let fiveHundred = 0;
    let Hundred = 0;
    let fifty = 0;
    let ten = 0;
    let two = 0;
    let one = 0;
    if (money >= 1000) {
        Thousand = Math.floor(money / 1000);
        money = money % 1000;
    }
    if (money >= 500) {
        fiveHundred = Math.floor(money / 500);
        money = money % 500;
    }
    if (money >= 100) {
        Hundred = Math.floor(money / 100);
        money = money % 100;
    }
    if (money >= 50) {
        fifty = Math.floor(money / 50);
        money = money % 100;
    }
    if (money >= 20) {
        twenty = Math.floor(money / 20);
        money = money % 20;
    }
    if (money >= 10) {
        ten = Math.floor(money / 10);
        money = money % 10;
    }
    if (money >= 5) {
        five = Math.floor(money / 5);
        money = money % 5;
    }
    if (money >= 2) {
        two = Math.floor(money / 2);
        money = money % 2;
    }
    if (money >= 1) {
        one = Math.floor(money / 1);
        money = money % 1;
    }
    sum = `แบงค์พัน ${Thousand} ใบ / แบงค์ห้าร้อย ${fiveHundred} ใบ / แบงค์ร้อย ${Hundred} ใบ / แบงค์ห้าสิบ ${fifty} ใบ /
           แบงค์ยี่สิบ ${twenty} ใบ / เหรียญสิบ ${ten} เหรียญ / เหรียญห้า ${five} เหรียญ / เหรียญสองบาท ${two} เหรียญ / เหรียญบาท${one} เหรียญ`

    return sum;
}
console.log(toChange(788))
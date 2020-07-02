let thaiTypeof = (input) => {
    let message;
    switch (typeof (input)) {
        case "string":
            message = "ข้อความ";
            break;
        case "number":
            message = "ตัวเลข"
            console.log(message);
            break;
        case "object":
            message = "ออปเจ็คต์";
            break;
        default:
            message = "false"
            break;

    }
    return message

}
console.log(thaiTypeof({a:'b'}))
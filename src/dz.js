function aNum(num) {
    if (num > 0) {
        return num + 1
    } else {
        return num
    }
}

function bNum(num) {
    if (num > 0) {
        return num + 1
    } else {
        return num - 2
    }
}

function cNum(num) {
    if (num > 0) {
        return num + 1
    } else if (num === 0) {
        return num = 10
    } else {
        return num + 2
    }
}

function dNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1, num2);
    } else {
        console.log(num2, num1);
    }
}

function iNum(a, b, c) {
    if (a < b || a < c) {
        return a
    } else if (b < a || b < c) {
        return b
    } else if (c < a || c < b) {
        return c
    }
}
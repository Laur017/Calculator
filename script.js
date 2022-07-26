let numbers = [];
let sign = [];
let a = "";
let b = "";
let r = "";
let q = 0;
const text = document.getElementById("afisarea");
const raspuns = document.getElementById("raspuns");

function view() {
    text.innerHTML = a;
}

function clear() {
    a = "";
    b = "";
    r = "";
    q = 0;
    numbers = [];
    sign = [];
    text.innerHTML = a;
    raspuns.innerHTML = r;
}

function b0() {
    a += "0";
    b += "0";
    view();
}

function b1() {
    a += "1";
    b += "1";
    view();
}

function b2() {
    a += "2";
    b += "2";
    view();
}

function b3() {
    a += "3";
    b += "3";
    view();
}

function b4() {
    a += "4";
    b += "4";
    view();
}

function b5() {
    a += "5";
    b += "5";
    view();
}

function b6() {
    a += "6";
    b += "6";
    view();
}

function b7() {
    a += "7";
    b += "7";
    view();
}

function b8() {
    a += "8";
    b += "8";
    view();
}

function b9() {
    a += "9";
    b += "9";
    view();
}

function splus() {
    a += " + ";
    numbers.push(parseInt(b));
    b = "";
    sign.push(1);
    view();
}

function sminus() {
    a += " - ";
    numbers.push(parseInt(b));
    b = "";
    sign.push(2);
    view();
}

function sinmultit() {
    a += " * ";
    numbers.push(parseInt(b));
    b = "";
    sign.push(3);
    view();
}

function simpartit() {
    a += " / ";
    numbers.push(parseInt(b));
    b = "";
    sign.push(4);
    view();
}

function segal() {
    q++;
    if (q === 1) {
        numbers.push(parseInt(b));
        b = "";
        let s = numbers[0];
        r += "= "
        for (let j = 0; j < sign.length; j++) {
            if (sign[j] === 3) {
                numbers[j] *= numbers[j + 1];
                numbers.splice(j + 1, 1);
                sign.splice(j, 1);
                console.log(numbers);
                console.log(sign);
            }
            if (sign[j] === 4) {
                numbers[j] /= numbers[j + 1];
                numbers.splice(j + 1, 1);
                sign.splice(j, 1);
            }
        }
        for (let j = 0; j < sign.length; j++) {
            if (sign[j] === 1) {
                numbers[j] += numbers[j + 1];
                numbers.splice(j + 1, 1);
                sign.splice(j, 1);
                console.log(numbers);
                console.log(sign);
            }
            if (sign[j] === 2) {
                numbers[j] -= numbers[j + 1];
                numbers.splice(j + 1, 1);
                sign.splice(j, 1);
            }
        }
        s = numbers[0];
        r += s.toString();
        view();
        raspuns.innerHTML = r;
    } else {
        clear();
    }
}
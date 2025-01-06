const display = document.getElementById("display");

function calcButton(input) {
    display.value += input;
}

function calcClear() {
    display.value = display.value.slice(0, -1);
}

function calcClearall() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
        // 45+45=90
    }
    catch (error) {
        display.value = "Error";
    }
} 
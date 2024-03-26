let output = document.getElementById("result");

function display(num) {
    output.value += num;
}
function calculate() {
    try {
        output.value = eval(output.value);
    }
     catch (err) {
        alert("Invalid Input");
        output.value = "";
    }
}
let clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    output.value = "";
});

function del() {
    output.value = output.value.slice(0, -1);
}

document.addEventListener("keydown", function (e) {
    if (e.key !== "0" && e.key !== "1" && e.key !== "2" && e.key !== "3" && e.key !== "4" && e.key !== "5" && e.key !== "6" && e.key !== "7" && e.key !== "8" && e.key !== "9" && e.key !== "Backspace") {
        e.preventDefault();
        alert("only numbers are allowed")
    }
});

const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const result = document.querySelector("#resultPara");
const btn1 = document.getElementById("btnAdd");
const resetBtn = document.querySelector("#btnReset");

let sum = 0;

const reset = () => {
    n1.value = "";
    n2.value = "";
    sum = 0;
    result.classList.add("hide");
};

const add = () => {
    const getN1 = Number(n1.value);
    const getN2 = Number(n2.value);
    sum = getN1 + getN2;
    result.classList.remove("hide");
    result.innerHTML = `<p><strong>Result: </strong> ${sum} </p>`;
    console.log(sum);
};

btn1.addEventListener("click", add);
resetBtn.addEventListener("click", reset);
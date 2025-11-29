function freezeInputField(){
    document.getElementById("mainAmount").setAttribute("readonly", true);
    document.getElementById("percentage").setAttribute("readonly", true);
}

function calculateTotalAmount(amount,percentage){
    let total = amount + ( amount * (percentage/100));
    return total;
}

function formatNumber(num){
    return Number.isInteger(num) ? num : num.toFixed(2);
}

function showOutput(outputNumber){
    calculateBtnArea.classList.add("hidden");
    outputArea.classList.remove("hidden");
    outputArea.classList.add("flex");
    totalAmountShower.innerText = formatNumber(outputNumber);
}

function refreshAll(){
    location.reload();
}





let mainAmount, percentage;
let calculateBtn = document.getElementById("calculateBtn");
let refreshBtn = document.getElementById("refreshBtn");
let calculateBtnArea = document.getElementById("calculateBtnArea");
let outputArea = document.getElementById("outputArea");
let totalAmountShower = document.getElementById("totalAmountShower");



calculateBtn.addEventListener("click", function(){
    mainAmount = parseFloat(Number(document.getElementById("mainAmount").value));
    percentage = parseFloat(Number(document.getElementById("percentage").value));
    let getAns = calculateTotalAmount(mainAmount,percentage);
    showOutput(getAns);
    freezeInputField();
})

refreshBtn.addEventListener("click", function(){
    refreshAll();
})
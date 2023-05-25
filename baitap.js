// bai 1
var btnSalary = document.getElementById('btnSalary');
btnSalary.onclick = function(){
    var inputDate = document.getElementById('inputDate').value;
    inputDate = parseFloat(inputDate);
    var result =`Month salary of you:` + inputDate*100000;
    var presult = document.getElementById('presult');
    presult.innerHTML = result;
}
// bai 2
var btnMath = document.getElementById('btnMath');
btnMath.onclick = function(){
    var input1 = document.getElementById('input1').value*1;
    var input2 = document.getElementById('input2').value*1;
    var input3 = document.getElementById('input3').value*1;
    var input4 = document.getElementById('input4').value*1;
    var input5 = document.getElementById('input5').value*1;
    var average =`average value of you:`+ (input1 + input2 + input3 + input4 + input5)/5;
    paverage.innerHTML = average; 
}
// bai 3
var btnExchange = document.getElementById('btnExchange');
btnExchange.onclick = function(){
    var inputUSD = document.getElementById('inputUSD').value*1;
    var inputVND = document.getElementById('inputVND').value*1;
    var exchange =`the amount you have:`+ inputUSD*inputVND;
    pexchange.innerHTML = exchange;
}
// bai 4
var btnAP = document.getElementById('btnAP');
btnAP.onclick = function(){
    var inputLength = document.getElementById('inputLength').value*1;
    var inputWidth = document.getElementById('inputWidth').value*1;
    var acreage =`acreage you have:`+ inputLength*inputWidth;
    var perimeter =`perimeter you have:`+ (inputLength+inputWidth)*2;
    pAP.innerHTML = acreage +` and `+ perimeter
}
// bai 5
var btnTotal = document.getElementById('btnTotal');
btnTotal.onclick = function(){
    var inputNum = document.getElementById('inputNum').value;
    var tensUnit = parseInt((inputNum / 10));
    var Unit = inputNum % 10;
    var TotalTU = tensUnit + Unit;
    pTotalTU.innerHTML = `number final:` + TotalTU;
}
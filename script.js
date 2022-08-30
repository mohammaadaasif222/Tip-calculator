//grab all the elements
const percentage = document.getElementById('percentage');
const amountOfPeople = document.getElementById('amountOfPeople');
const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const total_amount = document.getElementById('total-amount');

let tipPercent = 0;

function thirty() {
  percentage.textContent = 30 + '%';
  tipPercent = 0.3;
}
function twentyFive() {
  percentage.textContent = 25 + '%';
  tipPercent = 0.25;
}
function twenty() {
  percentage.textContent = 20 + '%';
  tipPercent = 0.2;
}
function fifteen() {
  percentage.textContent = 15 + '%';
  tipPercent = 0.15;
}
function ten() {
  percentage.textContent = 10 + '%';
  tipPercent = 0.1;
}
function five() {
  percentage.textContent = 5 + '%';
  tipPercent = 0.05;
}

//once calculate button is pressed...
function getTip() {
  if (bill.value === '' || bill.value == 0) {
    alert('Please Enter Bill Amount');
    return;
  } else if (bill.value <= 0) {
    alert('Please Enter Valid Bill Amount');
    return;
  }
  tipAmount = ((bill.value * tipPercent) / 100) * 100;
  total_amount.value = '$' + tipAmount.toFixed(2);

  if (amountOfPeople.value === '') {
    tip.value = '$' + tipAmount.toFixed(2);
  } else {
    let finalTip = tipAmount / Math.round(amountOfPeople.value);
    tip.value = '$' + finalTip.toFixed(2);
  }
}
function resetCalculator() {
  percentage.textContent = '';
  amountOfPeople.value = '';
  tip.value = '$';
  bill.value = '';
  total_amount.value = '$';
}

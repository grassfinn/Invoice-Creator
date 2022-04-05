let servicesArr = [];
let totalPrice = 0;

const carWashBtn = document.querySelector('#car-wash');
const mowLawnBtn = document.querySelector('#mow-lawn');
const pullWeedsBtn = document.querySelector('#pull-weeds');
const invoice = document.querySelector('#invoice-list');
const totalPriceEl = document.querySelector('#total-amount');
const removeBtn = document.createElement('button');
const sendInvoice = document.querySelector('#send-invoice');


carWashBtn.addEventListener('click', () => {
  if (!servicesArr.includes('Car Wash')) {
    totalPrice += 10;
    servicesArr.push('Car Wash');
    invoice.innerHTML += `<div class='flex'><p>Car Wash</p><p>$10</p></div>`;
    totalPriceEl.innerHTML = `$${totalPrice}`;
  }

});

mowLawnBtn.addEventListener('click', () => {
  if (!servicesArr.includes('Mow Lawn')) {
    totalPrice += 20;
    servicesArr.push('Mow Lawn');
    invoice.innerHTML += `<div class='flex'><p>Mow Lawn</p> <p>$20</p></div>`;
    totalPriceEl.innerHTML = `$${totalPrice}`;
  }
});

pullWeedsBtn.addEventListener('click', () => {
  if (!servicesArr.includes('Pull Weeds')) {
    totalPrice += 30;
    servicesArr.push('Pull Weeds');
    invoice.innerHTML += `<div class='flex'><p>Pull Weeds</p> <p>$30</p></div>`;
    totalPriceEl.innerHTML = `$${totalPrice}`;
  }
});

sendInvoice.addEventListener('click', () => {
  servicesArr = [];
  totalPrice = 0
  invoice.innerHTML = '';
  totalPriceEl.innerHTML = '';
});


// check the array/ loop through it
// if array contain the service already do not execute the

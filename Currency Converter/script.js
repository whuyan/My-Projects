const currency = {
USD: 1,
PKR: 280,
EUR: 0.96,
GBP: 0.76 ,
INR: 74.57,
AED: 3.70, 
CNY: 7.32
        
}

 document.getElementById('Converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

let fromCurrency = document.getElementById('from').value 
let toCurrency = document.getElementById('to').value 
let amount = document.getElementById('amount').value 

let fromAmount = currency[fromCurrency]
let toAmount = currency[toCurrency]
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
 

document. getElementById('result').textContent = `Converted Amount: ${ Math.round (convertedAmount)}`;


 });
 


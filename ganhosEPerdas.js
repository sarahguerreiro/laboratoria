let income = prompt('Qual o valor da entrada?');
let costs = prompt('Qual o valor da saída?');
let taxPercent = prompt('Qual a porcentagem dos impostos?');
let grossProfit = income - costs;
let tax = grossProfit * taxPercent/100;
let netIncome = grossProfit - tax;
document.write('Sua renda líquida é de $' + netIncome);
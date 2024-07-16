let companies = [
    {
        id: 1,
        name: "Jaxa nosfrush",
        budget: 8300,
        tax: 12,
        expensesPerYear: [30, 200, 1400],
        taxPerMonth:0
    },
    {
        id: 2,
        name: "Ramiz mashennik",
        budget: 4590,
        tax: 18,
        expensesPerYear: [400, 600, 800],
        taxPerMonth:0
    },
    {
        id: 3,
        name: "Kama restorator",
        budget: 800,
        tax: 12,
        expensesPerYear: [200, 200, 400],
        taxPerMonth: 0
    },
]

let success = []
let unsuccess = []

let totalEarnGosudarstvoOtNalogov = 0
let maxTax = {}
let minTax = {}

for(let item of companies) {
    let totalPerMonth = 0
    let totalTaxOfAll = 0
    
    for(let expense of item.expensesPerYear) {
        totalPerMonth += expense        
    }

    item.expensesPerMonth = +(totalPerMonth / 12).toFixed(2)

    item.taxPerMonth = (item.tax * (item.budget / 12) / 100).toFixed(2)

    let totalMoneyPerMonth = item.budget / 12 - item.taxPerMonth - item.expensesPerMonth

    totalEarnGosudarstvoOtNalogov += +(item.taxPerMonth)

    // console.log(totalMoneyPerMonth);

    if(totalMoneyPerMonth < 0) {
        unsuccess.push(item.name)
    } else {
        success.push(item.name)        
    }

    if (!maxTax.tax || item.taxPerMonth > maxTax.taxPerMonth) {
        maxTax = {
          id: item.id,
          name: item.name,
          tax: item.tax,
          taxPerMonth: item.taxPerMonth
        };
      }
    
      if (!minTax.tax || item.taxPerMonth < minTax.taxPerMonth) {
        minTax = {
          id: item.id,
          name: item.name,
          tax: item.tax,
          taxPerMonth: item.taxPerMonth
        };
      }
    }

// console.log(`Те кто в плюсе: ${success}`);
// console.log(`Те кто в минусе: ${unsuccess}`);
// console.table(companies);
console.log(`Общий налог, собранный государством за месяц: ${totalEarnGosudarstvoOtNalogov}`);
console.log(`Компания с максимальным налогом: ${maxTax.name}`);
console.log(`Компания с минимальным налогом: ${minTax.name}`);
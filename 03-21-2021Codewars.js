// Salary provided, need to return salary in $0.00 format

// function formatMoney(amount){
//   return `$${amount.toFixed(2)}`
// }

const formatMoney = amount => `$${amount.toFixed(2)}`;

//Do I get a bonus?
function bonusTime(salary, bonus) {
    if (bonus == true) {
    let bonusPlusSalary = salary * 10;
    return `£${bonusPlusSalary}`;
    } else {
    return `£${salary}`
    }
  }
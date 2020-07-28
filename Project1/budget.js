
let money = prompt('Ваш бюджет на месяц', 12000);
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-07-28');
let answer1 = prompt('Введите обязательную статью расходов в этом месяце', 4500);
let answer2 = prompt('Во сколько обойдётся?', 3000);

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    [answer1]: answer2
  },
  optionalExpenses: {
  },
  income: [],
  savings: false,
}
//appData.expenses.answer1 = prompt('Введите обязательную статью расходов в этом месяце', 4500);
//appData.expenses.answer2 = prompt('Во сколько обойдётся?', 3000);

// console.log(appData);
// console.table(appData);
// ----------------------------------------------------------------

let oneDayBudget = (money / 30);
alert(oneDayBudget);
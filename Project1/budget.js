
let money = +prompt('Ваш бюджет на месяц?', 12000);                            //спрашивает у пользователя доход в месяц, унарный плюс переводит строку в число (по умолчанию 12000)
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-07-28');          //спрашивает дату (по умолчанию 28.07.2020)

const appData = {                                                               //создаём объект для просчёта
  budget: money,                                                               //свойство с ключом Бюджет, со значением куда попадают данные от пользователя из переменной Мани
  timeData: time,                                                              //свойство с ключом ДатаВремя, куда попадает переменная Тайм с указаными пользователем данными
  expenses: {},                                                                //объект расходы, в который будут попадать обновляемые данные
  optionalExpenses: {},
  income: [],
  savings: false,
}

// appData.expenses.reply1 = reply2;                                          // сначала, до использования цикла, так добавлял ответы
// appData.expenses.reply3 = reply4;                                          // пользователя в объект

for (let i = 0; i < 2; i++) {                                                    //цикл задает вопросы 1 и 2 по несколько раз (если i < 2 - 2 раза)
  let reply1 = prompt('Введите обязательную статью расходов в этом месяце', );    //вопрос 1, получает данные от пользователя и сохраняет в переменной 1
  let reply2 = prompt('Во сколько обойдётся?', );                                 //вопрос 2, получает данные от пользователя и сохраняет в переменной 2
  if ((typeof(reply1) === 'string') && (typeof(reply1) != null) && (reply1 != '') && (reply1.length < 50) && (reply2 != '') && (typeof(reply2) === 'string') && (typeof(reply2) != null) && (reply2.length < 50)) {
   //если тип данных ответов 1 и 2 - строка (проверка здесь не обязательна!), тип данных ответов не является null, то есть не ОТМЕНА, не пустая строка '', и длинна ответов не больше 50 символов
    appData.expenses[reply1] = reply2;  // то с каждой итерацией добавляем в объект изменённое свойство Expenses, с данными полученными от пользователя в вопрос 1 (ключ) и вопрос 2 (значение)
   
    console.log(typeof(reply1));         //узнаем для себя тип данных ответа 1 - строка
    console.log('Done!');                //просто проверяем что все вышло
  } else {
    console.log('Лажа');
    continue;
  }
};


/* let count = 0;                        // сделал с помощью while
while (count < 2) {
  let reply1 = prompt('Введите обязательную статью расходов в этом месяце', );
  let reply2 = prompt('Во сколько обойдётся?', );
  if ((typeof(reply1) === 'string') && (typeof(reply1) != null) && (reply1 != '') && (reply1.length < 50) && (reply2 != '') && (typeof(reply2) === 'string') && (typeof(reply2) != null) && (reply2.length < 50)) {
     appData.expenses[reply1] = reply2;
     console.log('Done!');
  }
  count++;
}
 */
/* let count = 0;                           // сделал с помощью do-while
do {
  let reply1 = prompt('Введите обязательную статью расходов в этом месяце', );
  let reply2 = prompt('Во сколько обойдётся?', );
  if ((typeof(reply1) === 'string') && (typeof(reply1) != null) && (reply1 != '') && (reply1.length < 50) && (reply2 != '') && (typeof(reply2) === 'string') && (typeof(reply2) != null) && (reply2.length < 50)) {
     appData.expenses[reply1] = reply2;
     console.log('Done!');
  }
  count++;
} while (count <2);
 */
alert(appData.budget / 30);                   //изначально так показывал бюджет на 1 день
alert(money / 30);                            //можно еще так показывать бюджет на 1 день
appData.moneyPerDay = appData.budget / 30;    // добавил в объект свойство бюджет на один день
alert('Ваш ежедневный бюджет составляет: ' + appData.moneyPerDay);  // выводим в алерт текст и свойство объекта, преобразовав его в число унарным плюсом
console.log(appData.moneyPerDay);

if (appData.moneyPerDay < 100) {                                              //Если ежедневный бюджет ниже 100, выводим в консоль Миним уровень достатка
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {          //Если ежедневный бюджет больше 100 но меньше 2000, выводим в консоль Средний уров дост
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {                                        // и т.д.
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');
}

console.log(appData);                         // ВЕСЬ ОБЪЕКТ В КОНСОЛИ
console.table(appData);                       // ВЕСЬ ОБЪЕКТ В ТАБЛИЦЕ
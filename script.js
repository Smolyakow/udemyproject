// console.log(4/0);
// console.log('string' / 2);


// let person = {
//     name: 'John',
//     age: 25,
//     isMarried: true
// };

// console.log(person.age);

// let array = ['plum.png', 'orange.jpeg', 'apple.bmp'];

// console.log(array[0]);

let money = +prompt ("Ваш бюджет на месяц?","");
let time = prompt ("Введите дату в формате YYYY-MM-DD","");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

const expensesArticle = prompt('Введите обязательную статью расходов в этом месяце', '');
const expensesCost = prompt('Во сколько обойдется?', '');
const expensesArticle2 = prompt('Введите обязательную статью расходов в этом месяце', '');
const expensesCost2 = prompt('Во сколько обойдется?', '');
appData.expenses[expensesArticle] = expensesCost;
appData.expenses[expensesArticle2] = expensesCost2;

alert(`Бюджет на 1 день: ${appData.budget / 30}`);

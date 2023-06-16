import courseImage1 from "../assets/img/Course/1.png";
import courseImage2 from "../assets/img/Course/2.png";
import courseImage3 from "../assets/img/Course/3.png";
import courseImage4 from "../assets/img/Course/4.png";
import courseImage5 from "../assets/img/Course/5.png";

export const courses = [
    {id:1, title: "Основы финансов: что такое деньги?", lessonsAmount: 3, image: courseImage1, progress: 100},
    {id:2, title: "Банковский счет: зачем он нужен?", lessonsAmount: 7, image: courseImage2, progress: 100},
    {id:3, title: "Вклады – правильный выбор", lessonsAmount: 6, image: courseImage3, progress: 70},
    {id:4, title: "Кредиты: как избежать проблем?", lessonsAmount: 1, image: courseImage4, progress: 10},
    {id:5, title: "Инвестиции – правильный выбор", lessonsAmount: 10, image: courseImage5, progress: 20},
];

export let parent = {
    id: 1, name: "Екатерина", surname: "Голяк", email: "golyak96@mail.ru"
}

export const children = [
    {id: 1, name: "Полина", surname: "Голяк", birthday: "08.12.2002", startSalary: "3000 ₽", maxSalary: "5000 ₽"},
    {id: 2, name: "Максим", surname: "Голяк", birthday: "08.12.2002", startSalary: "4000 ₽", maxSalary: "5000 ₽"},
    {id: 3, name: "Леонид", surname: "Голяк", birthday: "08.12.2002", startSalary: "5000 ₽", maxSalary: "5000 ₽"},
];

export const childrenBalance = [
    {id:1, balance: 5000},
    {id:2, balance: 4000},
    {id:3, balance: 3000},
];

export const currentTasks = [
    {id: 1, taskName: "Помыть посуду", deadline: Date.now(), child: "Максим", price: "20 руб."},
    {id: 2, taskName: "Помыть полы", deadline: Date.now(), child: "Максим", price: "20 руб."},
    {id: 3, taskName: "Помыть ванну", deadline: Date.now(), child: "Максим", price: "20 руб."}
]

export const completedTasks = [
    {id: 1, taskName: "Помыasdasть посуду", deadline: Date.now(), child: "Максим", price: "20 руб."},
    {id: 2, taskName: "Помытasdasь полы", deadline: Date.now(), child: "Максим", price: "20 руб."},
    {id: 3, taskName: "Помытasdasь ванну", deadline: Date.now(), child: "Максим", price: "20 руб."},
]

export const subscriptions = [
    {title: "DNKids – 1 месяц", price: "249 ₽"},
    {title: "DNKids – 3 месяца", price: "590 ₽", benefit: "20%", perMonth: "200 ₽", current: true},
    {title: "DNKids – 6 месяцев", price: "890 ₽", benefit: "25%", perMonth: "149 ₽"},
    {title: "DNKids – 1 год", price: "1140 ₽", benefit: "36%", perMonth: "95 ₽"},
];

export const exchangeRates = {
    'RUB': {name: 'в рублях', symbol: '₽', rate: 1},
    'USD': {name: 'в долларах', symbol: '$', rate: 0.0119},
    'EUR': {name: 'в евро', symbol: '€', rate: 0.0109},
};

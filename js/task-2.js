const invoice = 100;
const stock = 100;

const message = invoice <= stock? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';

console.log(message);






// let invoice = 100; 
// const stock = 100;
// //если invoice равен 100
// // то значение message будет равно
// // 'Заказ оформлен, с вами свяжется менеджер'
// const message = invoice === stock? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';

// console.log(message);


// //если invoice равен 50
// // то значение message будет равно
// // 'Заказ оформлен, с вами свяжется менеджер'  
// invoice = 50;
// const message2 = invoice < stock? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';

// console.log(message2);



// //если invoice равен 150
// // то значение message будет равно
// // 'На складе недостаточно товаров!'  
// invoice = 150;
// const message3 = invoice > stock? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';

// console.log(message3);
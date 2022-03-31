// Деструктуризация массивов
// Деструктуризация - это синтасксис присваивания, с помощью которого можно присвоить элементы массива или объекта сразу нескольким переменным.

// Синтаксис у деструктуризации массивов следующий:

// let [firstName, lastName] = ["John", "Snow"];
// console.log(firstName);
// console.log(lastName);
// Для начала, мы указываем ключевое слово let или const для объявления переменных.

// Затем, указываем что мы хотим деструктуировать именно массив, проставив квадратные скобки. Внутри, прописываем переменные в которые будут попадать элементы массива, в нашем случае это firstNameи lastName.

// Через знак равно указывается массив откуда мы выводим элементы в виде значений для наших переменных.

// В консоли получим:

// John
// Snow
// Задание 1
// Напишите функцию checkTask(fullName), принимающую в аргументы массив вида:

// ["Julius", "Caesar", "Consul", "of the Roman Republic"] 
// Вам надо поместить в переменную firstName первый элемент массива, а в переменную titul последний элемент.

// Выведите в консоль эти две переменные через запятую - console.log(firstName, titul):

// Julius of the Roman Republic 

// function checkTask (fullname){
//     let [firstName, , , fullName] = ["Julius", "Caesar", "Consul", "of the Roman Republic"] 
//     console.log(firstName,fullName)
    
// }
// checkTask()

// ? вариант 2
// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// function checkTask([firstName, , , titul]) {
//     console.log(firstName, titul);
// }

// checkTask(arr);
// =========================================================



// Задание 2
// Напишите функцию checkTask(fullName), принимающую в аргументы строку:

// Albert Einstein 
// Поместите в переменную firstName первое слово, в переменную lastName второе слово через деструктуризацию.

// Выведите в консоль эти две переменные через запятую: console.log(firstName, lastName)

// function checkTask (fullname){
//     let firstName = 'Albert';
//     let lastName = 'Einstein '
//     console.log(firstName, lastName);
    
// }
// checkTask()

// let fullName = 'Albert Einstein';

// function checkTask(fullName) {
//     let newStr = fullName.split(' ');
//     let [firstName, lastName] = newStr;
//     console.log(firstName, lastName);
// }

// checkTask(fullName)




// Задание 3
// Напишите функцию checkTask(fullName), принимающую в аргументы строку:

// Albert Einstein 
// Используя деструктуризацию, функция должна создать объект в переменной obj, в котором есть свойство firstName с первым словом строки, и свойство lastName со вторым словом строки.

// Выведите в консоль этот объект:


// function checkTask(fullName) {
//     console.log(fullName);
// }

// let obj= {
//     firstName: 'Albert',
//     lastName: 'Einstein'
// }
// checkTask(obj)


// let fullName = 'Albert Einstein';

// function checkTask(fullName) {
//     let newStr = fullName.split(' ');
//     let [firstName, lastName] = newStr;
//     let obj = {
//         firstName,
//         lastName
//     }
//     return console.log(obj);
// }
// checkTask(fullName)

// Деструктуризация объектов
// Деструктуризация объектов отличается от деструктуризации массивов тем, что в качестве переменных указываются названия свойств объекта:

// let user = {
//   username: 'John123',
//   password: 123456,
//   isAdmin: true
// }

// //здесь уже проставляются фигурные скобки - литералы объекта
// let {username, isAdmin} = user;
// Выведим в консоль переменные:

// console.log(username) //John123
// console.log(isAdmin) //true
// Задание 4
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:

// {name: 'Петр', surname: 'Петров', age: '20 лет'} 
// Функция должна записать соответствующие значения в переменные name, surname и age и вывести их в одном вызове консоли через запятую в таком виде:

// console.log(name, surname, age)  

    // let obj ={name: 'Петр', surname: 'Петров', age: '20 лет'} 
    // function checkTask (obj){
    //     let {name, surname, age}= obj;
    //     console.log(name,surname,age)
    // }


    
// let person = {
//     name: "Петр", 
//     surname: "Петров",
//      age: "20 лет" 
// }

// let {name, surname, age} = person;
// console.log(name, surname, age);
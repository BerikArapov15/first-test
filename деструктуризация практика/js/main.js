// let list = [
//     'milk',
//     'Sugar',
//     'salt',
//     'butter',
//     'bread',
// ]
// console.log(list);


// let list = [
//     'milk',
//     'Sugar',
//     'salt',
//     'butter',
//     'bread',
// ]
// console.log(list [0]);
// console.log(list[1]);
// console.log(list [2]);






// let list = [
//     'milk',
//     'Sugar',
//     'salt',
//     'butter',
//     'bread',
// ]
// let [first, second, ...other] = list;
// console.log( first, second, other);  // milk Sugar (3) ['salt', 'butter', 'bread']


// Задание №1
// Дан массив [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ];
// Запишите первый элемент этого массива впеременную elem1,
// второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.


// let arr = [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ]

// let [elem1, elem2, elem3, ...other] = arr;
// console.log(elem1, elem2, elem3, other);


// Задание №3
// Дан массив.
// let task3 = [
//     "первый",
//     "второй",
//     "третий",
//     "четвертый",
//     "пятый",
//     "шестой",
//     "седьмой"
// ];
// Запишите последний элемент этого массива в переменную elem1,
// а предпоследний - в переменную elem2.

// let task3 = [
//     "первый",
//     "второй",
//     "третий",
//     "четвертый",
//     "пятый",
//     "шестой",
//     "седьмой"
// ];
// let [ ,,,,, elem1, elem2] = task3
// console.log(elem1, elem2 );
// let arr =[
//     [1,2,3,4],
//     [5,6,7,8]
// ];


// let [[a,b,c,d],newArr] = arr; 
// console.log(a,b,c,d, newArr); //1 2 3 4 (4) [5, 6, 7, 8]


// let arr =[
//     [1,2,3,4],
//     [5,6,7,8]
// ];


// let [[a,b,c,d],[newArr, ...other]] = arr; 
// console.log(a,b,c,d, newArr, other); //1 2 3 4 5 (3) [6, 7, 8]


// let arr =[
//     [1,2,3,4 [9,0]],
//     [5,6,7,8]
// ];


// let [[a,b,c,d, [nine, zero]],[newArr, ...other]] = arr; 
// console.log(a,b,c,d, newArr, other);
// console.log(nine, zero);


// let person = {
//     age:30,
//     name : 'John',
//     lastname: 'Snow'
// };

// let name = person.name;
// let age = person.age;
// let lastname = person.lastname;
// console.log(name, age, lastname); //John 30 Snow


// let person = {
//     age:30,
//     name : 'John',
//     lastname: 'Snow'
// };

// let {age, name, lastname } = person;
// console.log(name, age, lastname); //John 30 Snow

// Задание №2
//  Дан объект { name: "Петр", surname: "Петров", age: "20 лет" }.
// Запишите соответствующие значения в переменные name, surname и age.

// let person = {
//     name: "Петр", 
//     surname: "Петров",
//      age: "20 лет" 
// }

// let {name, surname, age} = person;
// console.log(name, surname, age);

// ! Вложенный обьект
//  let obj1 ={
//      sumobj:{
//          name: 'Berik '
//      }
//  }
// let {sumobj: {name}} = obj1;
// console.log(name);   //berik





// let obj = {
//     arr:[
//         {
//             name: 'Makers'
//         }
//     ]
// };

// let {arr: [{name}]} = obj;
// console.log(name); // Makers





// ! Функцияда кандай иштейт коробуз

// function foo(obj) {
//     console.log(obj);
// }

// let person ={
//     name: 'Makers',
//     lastname: 'Bootcamp',
//     age:2
// }
// foo(person) //{name: 'Makers', lastname: 'Bootcamp', age: 2}

// function foo(obj) {
//     console.log(obj.name);
// }

// let person ={
//     name: 'Makers',
//     lastname: 'Bootcamp',
//     age:2
// }
// foo(person) //?  Makers - Аттын озун алыш учун консоль логго обжектке  точка (obj.name) кошуп туруп вывод чыгаганда макерстин озун эле алабыз


// function foo({name, age, lastname}) {
//         console.log(name);
//         console.log(age);
//         console.log(lastname);
//     }
    
//     let person ={
//         name: 'Makers',
//         lastname: 'Bootcamp',
//         age:2
//     }
//     foo(person) // Makers 2 bootcamp
 

// Задание №5
// Дан объект {name: 'Luck', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы если какое-то значение не задано - оно принимало значение по умолчанию.


let obj =  {name: 'Luck', 'age': '22', };
let newObj={...obj}
console.log(newObj);

// function arr({name, age}) {
//     console.log(name);
//     console.log(age);
// }
// let person ={
//     name: 'Luck',
//     age: 22
// }
// arr(person)


// ! spread оператор
// function foo(a,b,c) {
//     console.log(a,b,c);
// };
// let arr =[1,2,3,4,5]
// foo( ...arr)


let a = {
    age: 20
}
let b = {
    age:20
}
console.log(a === b);
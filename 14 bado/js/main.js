// ! Деструктуризация 

// const arr =[100,200,300,400, 500]
// let [a, b, c, d, e] = arr;
// console.log(a,b,c,d,e); //100 200 300 400

// ! rest operator
// const arr =[100,200,300,400, 500]
// let [a, ...rest  ] = arr;

// console.log(a);
// console.log(rest);
// console.log(arr);

// ! подменна переменных
// let zero = 2;
// let one =1;
// let two = 0;
// [zero,one,two]= [two, one, zero]
// console.log(zero,);
// console.log(one);
// console.log(two); //0
// main.js:21 1
// main.js:22 2


// ? обращение к элементу массива
// const colors = ['red'];
// const [firstcolors = 'blue'] = colors;
// console.log(firstcolors);



// ? деструктуризация обьекта
// let artist ={
//     name: 'Travis',
//     lastname: 'Scott',
//     position: 'rapper',

// };

// let {name, lastname, position} = artist;
// console.log(name);
// console.log(lastname);
// console.log(position);

// ? перезаписываем ключи в переменные

// let {name:hisname, lastname: hislastname , position: hisposition, wife = 'berik'} = artist;
// console.log(hisname);
// hisname = 'asap'
// console.log(hisname);

// console.log(hislastname);
// console.log(hisposition);
// console.log(wife);
// console.log(artist);



// ? деструктуризация строка
// let str = 'plus ultra' .split(' '); //['plus', 'ultra']
// let [str1,  str2] = str;
// console.log(str1);
// console.log(str2);


// ! spread operator


// let arr1 = ['hello', 'bye', 'spasibo'];
// let arr2 = [10,20, ... arr1, 30,40]; // [10, 20, 'hello', 'bye', 'spasibo', 30, 40]
// console.log(arr2);


// let arr3 = [...arr1]
// console.log(arr3);
// arr3.push(1000)
// console.log(arr3); //['hello', 'bye', 'spasibo', 1000]
// arr1.push(100)
// console.log(arr1);
// ? слияние массива
// let a = [20,30];
// let b = [400, 500]
// let arr = [...b, ...a]
// console.log(arr);  // [400, 500, 20, 30]


// let letters = 'abcd';
// let arr = [...letters]
// console.log(arr);


// ? слияние обьекта


// let obj1 = {name: 'Tyler', age: 33}
// let obj2 = {name1: 'Josh', age1: 32}
// let resobj = {...obj1, ...obj2}
// console.log(resobj);  //{name: 'Tyler', age: 33, name1: 'Josh', age1: 32}


// let obj3 = {...obj1, status: true }
// console.log(obj3);//{name: 'Tyler', age: 33, status: true}

// function f1(a, ...b) {
//     console.log(a);
//     console.log(b);
// }
// f1(1, 2)


// ? ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ SPREAD
// const car = {color: 'red', wheels:  {amout: 4,  shape: 'round'}};
// let car2 = {...car}
// console.log(car2);

// console.log(car2.wheels.amout);
// car2.wheels.amout = 5;
// console.log(car2);
// console.log(car);





//? ГЛУБОКОЕ КОПИРОВАНИЕ 

// const car = {color: 'red', wheels:  {amout: 4,  shape: 'round'}};

// let car2 = JSON.parse(JSON.stringify(car))
// console.log(car2);
// console.log(car2.wheels.amout);
// car2.wheels.amout = 5;
// console.log(car2);
// console.log(car);


// let user = {
//     name: 'Asap',
//     sayhello: function(){
//         console.log(this.name);
//     }
// }
// user.sayhello()

// let newuser = JSON.parse(JSON.stringify(user))
// let newuser = {...user}
// console.log(newuser);
// newuser.sayhello() 
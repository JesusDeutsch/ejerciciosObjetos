// // Ejercicio 1
// // Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores.

// const citizen1 = {
//     name: 'Jesus',
//     lastName: 'Aleman',
//     age: 30,
// }

// // Ejercicio 2
// // Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.

// citizen1.city = 'Madrid';

// console.log(citizen1);

// // Ejercicio 3
// // Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usála con el objeto citizen1.

// function checkCitizenship() {


//     if (citizen1.age> 18) {
//         citizen1.canVote = true;
//     } else {
//         citizen1.canVote = false;
//     }
// }
// checkCitizenship(citizen1);
// console.log(citizen1);

// Ejercicio 4
// Crea una función llamada createCitizenque acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto del tipo:

// {
// 	name: <<nombre>>,
// 	lastname: <<apellido>>,
// 	age: <<age>>
// }


let citizen = [];

function createCitizen(userName,lastName, age) {
    if (typeof userName === 'string'&& typeof lastName === 'string' && typeof age === 'string') {
        
        let newCitizen = {
            name: userName,
            lastName: lastName,
            age: age,
        }
        citizen.push(newCitizen);
        return newCitizen


    } else {
        alert('Parametros no validos')
    }
}

createCitizen( prompt('Ingrese su nombre'), prompt('Ingrese su apellido'), prompt('Ingrese su edad'));
console.log(citizen);

// Ejercicio 5
// Crea una variable citizen2 y asígnale como valor el resultado de la función anterior con los parámetros que desees.

let citizen2 = citizen;

console.log(citizen2);

// Ejercicio 6
// Crea una función checkVoting que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad canVote y retorne el resultado.

function checkVoting(object) {
    
}

// Ejercicio 7
// Modifica la función checkVoting para que, si el resultado es negativo (si el objeto no tiene la propiedad canVote), se llame a la función checkCitizenship. Úsala con citizen2 y comprueba que funciona.

// Ejercicio 8
// Dado el objeto de objetos que tienes aquí:

// Objeto de objetos
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
// Crea una función usersLogged que devuelva el número de usuarios que están logados (usuarios que tienen la propiedad isLoggedIn: true).
// Crea una función que imprima por consola los usuarios que tienen más de 50 puntos.
// Crea una función que muestre por consola los usuarios que sabenReact.
// Esto es para el 10
// Ejercicio 9
// Imagina que obtienes de la base de datos un array de objetos con los usuarios que están registrados en tu web (tienes el array al final del ejercicio). Crea los siguientes métodos:

// Una función llamada signUp que sirva para registrar a un usuario nuevo. Le pedirá name, email y password y creará un objeto con sus datos y un estado de logado (que por defecto será false). Si el email ya está registrado en la lista de usuarios, devolverá un mensaje informando de que el usuario ya está registrado. Si no, introducirá al usuario en la lista, e informará de que se ha completado el registro.
// Crea la función signIn que acepte un email y una contraseña, compruebe si son correctos, y si lo son, cambie el estado de logado del usuario a true.
// Crea la función logOut que acepte un email y cambie el estado de logado del usuario a false.
// Crea la función deleteAccount que reciba un email, busque al usuario en cuestión, y lo elimine del array de usuarios.
// Esta es la lista de usuarios:

// Array de objetos
// const users = [
//     {
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         isLoggedIn: false
//     },
//     {
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         isLoggedIn: true
//     },
//     {
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         isLoggedIn: true
//     },
//     {
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         isLoggedIn: false
//     },
//     {
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         isLoggedIn: false
//     }
// ];

const bind = (context,fn) => (...args) => fn.apply(context,args);

// function bind(context,fn) {
//     return function(...args){
//         fn.apply(context,args)
//     }
// }

function logPerson () {
    console.log(`${this.name},${this.age},${this.other}`)
}

const person1 = {name:'Maria', age:29, other: 'jj'}
const person2 = {name:'Aria', age:229, other: 'll'}

bind(person1,logPerson)()
bind(person2,logPerson)()

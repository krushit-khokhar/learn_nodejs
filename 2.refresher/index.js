// var name = 'krushit';
// var age = 23;
// var hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobbies){
//     return ('Name is '+userName+', age is '+userAge+',and the user has hobbies:'+userHasHobbies);
// }
// // console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name:"Max",
    age:23,
    greet(){
        console.log("Hii, i am "+ this.name)
    }
}

const printName = ({name}) => {
console.log(name)
}

printName(person)

const {name, age} = person;
console.log(name, age);



// const copiedPerson ={...person};
// // console.log(copiedPerson)

const hobbies = ["Sports","Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2)

// // for(let hobby of hobbies){
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(e => 'Hobby :'+e));


// // hobbies.push("Programming");
// const copiedArray = [hobbies];
// // console.log(copiedArray);


// const toArray = (...args) => {
//     return args
// }

// console.log(toArray(1,2,3,4,5))






// *----asnyc and Promise----*


const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Done!")
        }, 2000);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(text => {
        console.log(text)
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    })
},1000)

console.log("hii");
console.log("Hello!")
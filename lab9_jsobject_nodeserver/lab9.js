//July 25th , JS Object
//crfeate an object for student with properties of name,age, and school

let student1={
name : "ebboni M", 
age: 21, 
school: "Qcc"

}

// retreieve information in an object using squared bracket:

console.log(student1["name"])

//retrieve information using the dot:
//Note you can not use the dot notation if the key, property name starts with a number

console.log(student1.age.school)

////update data in an object can be done using "square brackets []"" or dot notation

student1.age = 30
student1["school"] = "SUNY"
console.log (`Updatd age ${student1.age}`)
console.log (`Updatd school ${student1.school}`)

//EXAMPLE 2:NESTED OBJECT AND ARRAY WITHIN AN OBJECT
console.log ("\n=========EXAMPLE2========")
let user1 = {

    name: "Jade",
    age: 35,
    //an array as property
    friends :["Ruby","Emerald", "Jewel"],
    //an object as property
    favorite: {
        food: "cake",
        color: "green"
    }
}
//access key inside an object
let favorite_food = user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

//Example 3
console.log ("\n=========EXAMPLE3========")

let schedule =[{

    day: "Monday",
    plan: " go to yoga",
    time: "6:30pm"
},
{
    day: "Tuesday",
    plan: " bootcamp lab",
    time: "11pm"
}
]

//access the plan for tuesday
console.log(`The plan for Tuesday is ${schedule[1].plan}`)

//Example 4: object methods

console.log ("\n=========EXAMPLE4========")
let item = {
    id: 123,
    name : "pencil",
    quantity : 200,
    color: ['red', 'black','blue'],
    //methods (methods have functions)
    sale : function(){
        return "sale! 50% off"
    },
    quantity_cart : function(){
        this.quantity -=1
    }
}

//access sale() method
console.log (`The sale message of ${item.name} is ${item.sale()}`)
console.log (`The remaining quantity of ${item.name} is ${item.quantity_cart()}`)

/*JSON, JAvaScript object NOtation, is popular text format that is used to store & exchange data

JSON data is stores as comma-separated list of key:value pairs within a JSON object 

We can convert a JS object to a JSON object by using the JSON.stringify() method

We can also convert from JSON tto JS object using 'JSON.parse() method
*/

//Example 5: JSON
let fashionshow ={
    category: "fasion",
    models: [
        {name: "Jade",
        age: 25,
        city:"NYC"
    },
    {
        name:"Kelly",
        age: 25,
        city:"NYC"
    }
    ]
}

//print the object 'fashionshow'
console.log("\n--------Example5-------")
console.log(fashionshow)

//create a JSON version of the Javscript object
let json_fashionshow = JSON.stringify(fashionshow)
console.log("JSON version: ")
console.log(json_fashionshow)



    
   

































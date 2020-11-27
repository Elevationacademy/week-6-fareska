/*
//Setup
//npm init //npm install mongoose //person.js

*/
const mongoose = require(`mongoose`)
mongoose.connect('mongodb://localhost/people', { useNewUrlParser: true })

const Schema = mongoose.Schema

// const computerSchema = new Schema({
//   maker: String,
//   price: Number
// })
// const Computer = mongoose.model('computer', computerSchema)

// let c1 = new Computer({ maker: "Hp", price: 2500 }) 
// let c2 = new Computer({ maker: "Dell", price: 5000 }) 

// let allComputers = [c1, c2]
// allComputers.forEach(c=> c.save())

const personSchema = new Schema({ //Schema
    firstName: String,
    lastName: String,
    age: Number,
    address : {  //or  address : addressSchema
      city : String,
      street: String,
      apartment : Number
    }
  })

//   const personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address : addressSchema
//   })

const Person = mongoose.model('person', personSchema) //Models
//<== mongoose will give "people" to the collection 

//const Person = mongoose.model('person', personSchema, 'persons');
//<== persons will be the name of the collection

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) 
//   Person.find({}, function (err, people) {
//     console.log(people)
// })
let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })
//p1.save() //CRUD - 1. Create

//let allTheShooberts = [p2, p3, p4, p5]
//allTheShooberts.forEach(s => s.save()) // 2. creat

//CRUD - Retrieve
// Person.find({}, function (err, people) {
//     console.log(people)
// }) 
// Person.find({firstName:"shoob"}, function(err, person){
//     person.remove(function(err){
//         console.log(err)
//     })
// })

// Person.find({firstName: "Shoo"}, function(err, person){
//     person.remove({},function(err){   
//         console.log(err)
//     })
// })

Person.count({}, function(err, res){
    console.log(res)
})


/*
//using promises:
let peoplePromise = Person.find({})

peoplePromise.then(function (people) {
    console.log(people)
})

//CRUD - Update
Person.findById("5fbfbeb7944a85227c628950", function (err, person) {//1. Find and Save
    person.age += 10 //how time flies
    person.save()
})
Person.findByIdAndUpdate("5fbfbd718f40e93c4047b903", { age: 70 }, function (err, person) {
    console.log(person) //2. findByIdAndUpdate shortcut
})
Person.findByIdAndUpdate("5fbfbd718f40e93c4047b902", { age: 70 }, { new: true }, function (err, person) {
    console.log(person) //See the val of the update object in the callback
})

//CRUD - Delete
Person.findById("5fbfbd718f40e93c4047b901", function (err, person) {
    person.remove(function (err) {//remove method like update and and findBy.. like findBy..
        console.log(err) //usually this will be `null`, unless something went wrong
    })
})
Person.find({ firstName: "Shoo"} , function (err, person) {
    person.remove(function (err) {
        console.log(err) 
    })
})


//Server & Mongoose
// Server setup
const express = require('express')
const app = express()

// Mongoose setup
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

// Schema/model setup
const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})
const Person = mongoose.model("person", personSchema)

//Routes
app.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
*/
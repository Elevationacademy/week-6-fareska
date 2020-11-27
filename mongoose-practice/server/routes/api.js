const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        console.log(err)
        res.send(people)
    })
})

//Exercise 1
router.post('/person', function (req, res) {
    const data = req.body
    let p1 = new Person(data) 
    p1.save()
    console.log('Got the Post request')
    //res.send()
    
     Person.find({}, function (err, people) {
     res.send(people)
    })
})

//Exercise 2
router.put('/person/:id', function (req, res) {
    const dataId = req.params.id
    console.log(dataId)
    console.log('Got the Put request')   
    Person.findByIdAndUpdate(dataId, {age:80},function (err, person) { 
        res.send(person)
    })
})

//Exercise 3
router.delete('/apocalypse', function (req, res) {
    console.log('Got the Delete request')   
    Person.find({}, function (err, person) { 
        person.forEach(p=> p.remove( function(err){
            console.log(err)
        }))
        
    })
})


module.exports = router
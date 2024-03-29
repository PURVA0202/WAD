const Employee = require('../models/Employee')

//show the list of  Employees
const index = (req,res,next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : 'An error Occured!'
        })
    })
}

const show = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : 'An error Occured!'
        })
    })
}
//add new employee
const store = (req,res,next) =>{
    let employee = new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    employee.save()
    .then(response =>{
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })
    })
}

//update an employee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name: req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set:updatedData})
    .then(()=> {
        res.json({
            message: 'Employee updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//delete
const destroy = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findOneAndRemove(employeeID)
    .then(() => {
        req.json({
            message:'Employee deleted successfully!'
        })
    })
    .catch(error => {
        req.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {
    index,show,store,update,destroy 
}
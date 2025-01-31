const express = require('express')
const {createEmployee, getEmployee, editEmployee, deleteEmployee} = require('../controllers/employeeController')

const router = express.Router()
router.post("/", createEmployee)
router.get("/EmployeeInfo", getEmployee)
router.put("/UpdateEmployeeInfo/:id", editEmployee)
router.delete("/DeleteEmployeeInfo/:id", deleteEmployee)

module.exports = router

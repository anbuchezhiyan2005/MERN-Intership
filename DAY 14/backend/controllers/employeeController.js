const Employee = require('../models/EmployeeModel')

exports.createEmployee = async(req, res) => {
   try {
        const {EmpID, EmpName} = req.body
        const newEmployee = new Employee({EmpID, EmpName})
        const savedEmployee = await newEmployee.save()
        res.status(201).json(savedEmployee)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

exports.getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    }
    catch(err) {
        res.status.json({error : err.message})
    }
}

exports.editEmployee = async(req, res) => {
    try {
        const {id} = req.params
        const {EmpID, EmpName} = req.body

        const updatedEmployee = await Employee.findByIdAndUpdate(id, {EmpID, EmpName})

        if(!updatedEmployee) {
            return res.status(404).json({message : "Employee Not Found!!"})
        }
        else {
            return res.status(200).json({message : `Employee Details Updated Successfully!! ${EmpID}, ${EmpName}`})
        }
    }
    catch(err) {
        res.status.json({error : err.message})
    }
}

exports.deleteEmployee = async(req, res) => {
    try {
        const {id} = req.params
        await Employee.findByIdAndDelete(id)
        res.status(200).json({message : "Employee Details Deleted Successfully"})
    }
    catch(err) {
        res.status.json({error : err.message})
    }
}
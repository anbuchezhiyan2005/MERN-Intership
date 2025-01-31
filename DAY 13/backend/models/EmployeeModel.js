const mgoose = require('mongoose')

const employeeSchema = new mgoose.Schema( {
    EmpID : Number,
    EmpName : String
})

module.exports = mgoose.model("Employee", employeeSchema, "Employee")
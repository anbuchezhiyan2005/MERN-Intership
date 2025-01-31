step 1 : create a new project folder and install (express, express-handlebars, body-parser)
step 2 : create a '.env' file and store the connection string along with the port that you want to use
step 3 : install dotenv in the project dependencies. (it deals with the configuration of the projects and all)
step 4 : install mongoose in the project dependencies
step 5 : create a file 'server.js' in your root directory
step 6 : create the following file structure

    root
        => backend
            => configs
                > db.js
            => controllers
                > employeeController.js
            => models
                > EmployeeModel.js
            => routes
                > employeeRoutes.js


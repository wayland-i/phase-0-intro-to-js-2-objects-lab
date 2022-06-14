// Write your solution in this file!


const employee = {
    name : "Bob",
    streetAddress : "11 Mill Rd",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};

    newEmployee[key] = value

    return newEmployee;
}

updateEmployeeWithKeyAndValue(employee, "name", "Bill")


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value

    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Brian")



function deleteFromEmployeeByKey(employee, key){
    const newEmployee1 = {...employee};
    
    delete newEmployee1[key]
    
    return newEmployee1
}

deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;

}
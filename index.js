// Write your solution in this file!
const employee = {
    name: "Aarow Epstein",
    streetAdress: "123 Elm Street",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...employee};
    newObj [key] = value;
    
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value; 

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj [key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key];
    return employee;
}
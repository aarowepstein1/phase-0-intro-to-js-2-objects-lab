const employee = {
    name: "Aarow Epstein", 
    streetAddress: "123 Elm Street"
};

function updateEmployeeWithKeyAndValue(newObj, key, value) {
    newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(newObj, key) {
    newObj = {...employee};
    delete newObj [key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key];
    return employee;
}
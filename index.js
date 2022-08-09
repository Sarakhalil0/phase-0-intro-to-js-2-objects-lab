// Write your solution in this file!


let employee = {
    name: "john",
    address: "london",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = { ...employee };
    newObj[key] = value;
    return newObj;

}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, name) {
    let newDeleteObj = { ...employee };
    delete newDeleteObj.name
    console.log(newDeleteObj);
    return newDeleteObj;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}





/* scope
updateEmployeeWithKeyAndValue(employee, key, value)

var customerName = 'bob';
var bestCustomer;

const leastFavoriteCustomer = "james"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}*/

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not james";
}

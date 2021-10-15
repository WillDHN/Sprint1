"use strict"
let checkNames = (name) => {
    if (nombres === "") {
        alert("Campo nombres es requerido!");
        return false;
    }
    return true;
}

let checkNumber = (valor) => {
    if (!isNaN(valor)) {
        alert("Error: Solo números");
        return false;
    }
    return true;
}
module.exports = { checkNames, checkNumber };
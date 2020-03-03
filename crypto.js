// Crypto 

const crypto = require('crypto');
const prompts = require('prompts');



function inputs(){ // Create unpit/prompt function!!!!!!!!!!!!!!!!!
    return 0 
    }

function password_check(password_attempt) {
    if (type(password_attempt) != str){
        throw "password input must be a string!"
        }
    // Uses a hard-coded password hash (insecure)
    password_hash = 'b946ccc987465afcda7e45b1715219711a13518d1f1663b8c53b848cb0143441' // From key store
    if ( crypto.createHmac('sha256', password_attempt) == password_hash) {
        return True
        }
    else {   
        return False
        }
    }

var p_attampt = prompt("Enter password:") // Use standard_input library, create own function !!!!!!!!!!!!!!!!11
console.log(password_check(p_attempt))

process.exit();

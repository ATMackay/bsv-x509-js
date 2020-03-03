// Crypto 

const crypto = require('crypto');
var prompt = require('syncprompt');


function password_check(password_attempt) {
    // Uses a hard-coded password hash (insecure)
    password_hash = '340d0244231807b9914bafeb77f55ca17a62339abee1f292f666979c3e1cfa9e' // From key store
    if ( crypto.createHmac('sha256', password_attempt).digest('hex') == password_hash) {
        return true
        ;
    } else {  
        return false
        };
    }




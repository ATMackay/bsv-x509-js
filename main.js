// Requires Bitcoin SV library 
const bsv = require("bsv")


// Hard coded parameters

function password_check(){
    // Copy over from bsv-x509 Python
    }

function passwd(){
    i = 0
    while(i < 4){
        pass_attempt = prompt("Password:")
        if (<>.password_check(pass_attempt) != True){ // Dependency on password check function
            if(i > 2){
                console.log("\nPassword authentication failed. Aborting....")  
                exit() 
                }           
            console.log("\nPassword attempt failed. You have "+str(3-i)+" remaining attempts.")
            i += 1
        } else {
            break
        }
    }


function create_certificate(){
    console.log("Creating a Bitcoin SV SSL certificate..")
    
    console.log("\nEnter Subject name:") // Use prompt to get input from terminal
    var subject_name = prompt("Name:")
    console.log(("\nEnter Subject company:")
    var subject_company = prompt("Company:")

    console.log("\nEnter Subject device type:")
    var device_type = prompt("Device type:")

    var device_id = x509_builder.gen_device_id(subject_name, device_type)
    var user_ID = x509_builder.user_id(subject_name, subject_company)
    console.log("\nEnter Issuer Username:")
    var issuer = prompt("Issuer:")
    // Execute password check
    passwd()

    var certificate_data = x509_builder.cert_data(subject_name, device_ID, user_ID) // Build x509 module !!!!!!!!!!!!!!!!!!
    var certificate_template = x509_builder.generate(certificate_data)
    var format_cert = x509_builder.json_format(certificate_template)
    console.log("################## CERTIFICATE ##################")
    console.log(format_cert)
    var input3 = prompt("Do you wish to procceed [Y/N]?")

    if input3 == 'y' or input3 == 'Y':
        console.log("################## CERTIFICATE TRANSACTION (RAW) ##################")
        //Dummy TX for PoC
        var tx = bsv.Transaction()
            .from(utxo)                                       // Must have utxo for signing key !!!!!!!!!!!
            .to(publicKey.toAddress().toString(), sat_value)  // Must send transaction to self !!!!!!!!!!!!!!!!
            .sign(privKey)                                    // Sign transaction !!!!!!!!!!!!!!!!!!
        var target = dummy_tx.get('vin')[0]
        var serialized = tx.toString()
        var txid = tx_getHash()
        console.log("\n\nTransaction ID:" + tx.toString())
        //var dumm_prefix = '01000000010000ffffffff1c03d7c6082f7376706f6f6c2e636f6d2'\ //replace with actual raw transaction generated using BSV library tools
        //                 +'f3edff034600055b8467f0040'
        //var dumm_spk =   'ffffffff01247e814a000000001976' +'914492558fb8ca71a3591316d095afc0f20ef7d42f788ac00000000'

    else:
        console.log("Terminating....")
        exit()
    console.log("\nWarning: The data you publish to the Bitcoin SV blockchain is immutable. Once broadcast it will remain there forever.")
    // Check password
    passwd()
    console.log("\n\nBroadcasting to the Bitcoin SV network...")
    // Broadcast raw transaction broadcast tx
    // Submit raw tx using WhatsOnChain API
    console.log("\n\nTransaction ID:" + txid.toString('hex'))

    }

function verify_certificate(){
    console.log("Enter certificate TXID")
    cert_txid = 
    console.log("Validating certificate..")
    
    }

function main(){
    
    console.log("Enter ..")
    var choice = prompt("Enter number:")

    if (choice != 1 || choice != 2){
        console.log("Exiting...")
        exit()
        }


    }



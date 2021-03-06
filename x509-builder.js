// Functions for building x509 end-entity certificate



// Hard coded parameters

    // Certificate formatting
var certificate_length = 7
var version = 3
var serial = 123456
var issuer = 'CT-AM Certificates'

    // Root certificate location
var root_loc = '5a743f68a759bda8fecfc4aab4af4d8e75e300d2c880ebbef25abbd21680eaec'
var root_vout = 0 

    // Intermediate certificate location
var int_cert_loc = '17a8b9994f1e89855b34660ea1d17061ae65833f1ded395c4c6a72d2d98832a6'
var int_cert_vout = 0 

    // Validity period 
var not_before = time.time()
var not_after = time.time() + 7776000 # Time + 90 days

    // Root CA
var root_ca = "CT-AM Certificates"
var root_not_after = time.time() + 630700000 # Time + 20 years
var root_key = ''   // fill with root key

/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    
    var shippingName = document.getElementById("shippingName").value;
    var billingName = document.getElementById("billingName");
    var shippingZip = document.getElementById("shippingZip").value;
    var billingZip = document.getElementById("billingZip");

    if(document.getElementById("same").checked){

        billingName.value = shippingName;
        billingZip.value = shippingZip;

    } else {
        
        billingName.value = "";
        billingZip.value = "";
    }

}
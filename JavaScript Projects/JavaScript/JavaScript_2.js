function validateForm() {
    var x = document.forms["myForm"]["fName"].value;
    if (x === ""){
        alert ("Please enter your first name.");
        return false;
    }
    console.log();
}
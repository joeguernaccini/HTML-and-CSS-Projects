
























function formValidate() {
    var a = document.forms["contactForm"]["phone"].value;
    if (a == "") {
        alert("Please fill out a valid phone number");
        return false;
    }
}


function open() {
    document.getElementById('newForm').style.display = "block";
    }

function close() {
    document.getElementById("newForm").style.display = "none";
}



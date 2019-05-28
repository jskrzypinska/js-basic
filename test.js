var myForm = document.forms.myForm;
var messege = document.getElementById("message");

myForm.onsubmit = function () {

    if(myForm.name.value == "") {
        messege.innerHTML = "Please enter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }

};
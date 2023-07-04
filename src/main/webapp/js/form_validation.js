function validation() {
    var userName = document.regForm.username.value;
    if (userName.trim().length <= 1) {
        alert("Incorrect User Name");
        //focus on lement
        document.regForm.username.focus();
        return false;
    }
    var pas1 = document.regForm.pwd1.value;
    var pas2 = document.regForm.pwd2.value;
    if (pas1.length < 8) {
        alert("Your password less then 8 symbols!");
        //focus on lement
        document.regForm.username.focus();
        return false;
    }
    if (pas1 != pas2) {
        alert("Your password 1 is not equal with password 2!");
        //focus on lement
        document.regForm.username.focus();
        return false;
    }
// email
    var email = document.regForm.email.value;
    if (email.trim().length <= 1) {
        alert("Empty email");
        //focus on lement
        document.regForm.email.focus();
        return false;

    } else {

        if (!validateEmail()) {
            return false;
        }
    }

    //     if (pwd1.trim().length < 8 || pwd2.trim().length < 8 && pwd1 != pwd2) {
    //         alert("Incorrect pwd");
    //         //focus on lement
    //         document.regForm.pwd2.focus();
    //         return false;
    //     }
    // all valid
    return true;
}

function validateEmail() {
    var email = document.regForm.email.value;
    pos1 = email.indexOf("@");
    pos1 = email.lastIndexOf("."); // John.Jhonson@gmail.com
    if (pos1 < 1 || (pos2 - pos1 < 2)) {
        alert("Incorrect email");
        document.regForm.email.focus();
        return false;
    }
    return true; // all good
}
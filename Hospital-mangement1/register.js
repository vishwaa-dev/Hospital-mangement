function clearErrors() {
    var errors = document.querySelectorAll("span");
    for (var i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
        errors[i].style.color = "red";
    }
}

function validateForm() {

    clearErrors();
    var valid = true;

    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var bloodGroup = document.getElementById("bloodGroup").value;
    var address = document.getElementById("address").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var emergencyPhone = document.getElementById("emergencyPhone").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');

    if (firstName === "") {
        document.getElementById("firstNameError").innerHTML = "First name is required";
        valid = false;
    }

    if (lastName === "") {
        document.getElementById("lastNameError").innerHTML = "Last name is required";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").innerHTML = "Select gender";
        valid = false;
    }

    if (age === "" || age <= 0 || age > 120) {
        document.getElementById("ageError").innerHTML = "Enter valid age";
        valid = false;
    }

    if (dob === "") {
        document.getElementById("dobError").innerHTML = "Select date of birth";
        valid = false;
    }

    if (bloodGroup === "") {
        document.getElementById("bloodGroupError").innerHTML = "Select blood group";
        valid = false;
    }

    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required";
        valid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    var phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Invalid phone number";
        valid = false;
    }

    if (username.length < 5) {
        document.getElementById("usernameError").innerHTML = "Minimum 5 characters";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Minimum 6 characters";
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (!phonePattern.test(emergencyPhone)) {
        document.getElementById("emergencyPhoneError").innerHTML = "Invalid emergency number";
        valid = false;
    }

    return valid;
}

// input variable initialization 
const Username = document.entryForm.username;
const Firstname = document.entryForm.firstname;
const Lastname = document.entryForm.lastname;
const Email = document.entryForm.email;
const Phonenumber = document.entryForm.phonenumber;
const Password = document.entryForm.password;
const ConfirmPassword = document.entryForm.confirmpassword;


//displaying errors picked from id of error element in form
const usernameError = document.getElementById('susername');
const firstnameError = document.getElementById('fname');
const lastnameError = document.getElementById('lname');
const emailError = document.getElementById('semail');
const phonenumberError = document.getElementById('sphonenumber');
const passwordError = document.getElementById('spassword');
const confirmpasswordError = document.getElementById('cpassword');

// eventlisteners from the declared constants
Username.addEventListener('blur', Username_verify, true);
Firstname.addEventListener('blur', Firstname_verify, true);
Lastname.addEventListener('blur', Lastname_verify, true);
Email.addEventListener('blur', Email_verify, true);
Phonenumber.addEventListener('blur', Phonenumber_verify, true);
Password.addEventListener('blur', Password_verify, true);
Confirmpassword.addEventListener('blur', Password_verify, true);

// validations
function validate(){
     //username validation, checking if its empty
     if(Username.value ===''){
        usernameError.textContent = 'Username is required';
        Username.focus();
        return false;
    }
    if(Firstname.value ===''){
        firstnameError.textContent = 'Username is required';
        Firstname.focus();
        return false;
    }
    if(Lastname.value ===''){
        lastnameError.textContent = 'Username is required';
        Lastname.focus();
        return false;
    }
    if(Email.value ===''){
        emailError.textContent = 'Email is required';
        Email.focus();
        return false;
    }
    if(Phonenumber.value ===''){
        phonenumberError.textContent = 'Username is required';
        Phonenumber.focus();
        return false;
    }
    if(Password.value ===''){
        passwordError.textContent = 'Password is required';
        Password.focus();
        return false;
    }
    if(Confirmpassword.value ===''){
        confirmpasswordError.textContent = 'Username is required';
        Confirmpassword.focus();
        return false;
    }
}

//regex
const numbers = /^[0-9]+$/
const alphabets = /^[a-zA-Z]+$/;
const nameRegex = /^.{2,20}[a-zA-Z]+$/; 
const alphaNumeric = /^[0-9a-zA-Z]+$/; 
const ninRegex = /^[0-9a-zA-Z]{13}$/; 
const phoneRegex = /^\d{10}$/;
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
const emailRegex = "^(.+)@(.+)$";


//event handlers for correct data
//username
function Username_verify(){
    if(Username.value !='' && Username.value.match(nameRegex)){
        usernameError.innerHTML = '';
        return true;
    }
    else{
        usernameError.textContent = 'Username should be 2-20 characters'
        Username.focus();
       return false;
       }
}
//firstname
function Firstname_verify(){
    if(Firstname.value !='' && Firstname.value.match(nameRegex)){
        usernameError.innerHTML = '';
        return true;
    }
    else{
        firstnameError.textContent = 'Firstname should be 2-20 characters'
        Firstname.focus();
       return false;
       }
}
//lastname
function Lastname_verify(){
    if(Lastname.value !='' && Lastname.value.match(nameRegex)){
        lastnameError.innerHTML = '';
        return true;
    }
    else{
        lastnameError.textContent = 'Lastname should be 2-20 characters'
        Lastname.focus();
       return false;
       }
}
//email
function Email_verify(){
    if(Email.value !='' && Email.value.match(emailRegex)){
        emailError.innerHTML = '';
        return true;
    }
    else{

        emailError.textContent = 'Email should contain @ & . notations'
        Email.focus();
        return false;
       }
}
//phonenumber
function Phonenumber_verify(){
    if(Phonenumber.value !='' && Phonenumber.value.match(phoneRegex)){
        phonenumberError.innerHTML = '';
        return true;
    }
    else{
        phonenumberError.textContent = 'Phonenumber should be 1-10 characters'
        Phonenumber.focus();
       return false;
       }
}

// password
function Password_verify(){
    if(Password.value !='' && Password.value.match(passwordRegex)){
        passwordError.innerHTML = '';
        return true;
    }
    else{

        passwordError.textContent = 'Password has to be greater than 7 characters & contain atleast alphanumeric symbols and characters'
        Password.focus();
        return false;
       }
}
//confirmpassword
function Confirmpassword_verify(){
    if(Confirmpassword.value !='' && Confirmpassword.value.match(passwordRegex)){
        usernameError.innerHTML = '';
        return true;
    }
    else{
        confirmpasswordError.textContent = 'Password has to be greater than 7 characters & contain atleast alphanumeric symbols and characters'
        Confirmpassword.focus();
       return false;
       }
}
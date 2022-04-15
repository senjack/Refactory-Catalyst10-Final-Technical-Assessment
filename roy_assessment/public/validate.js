//Accessing the dom by form name and element
const surname = document.loanForm.surname;
const given_name = document.loanForm.givenname;
const nin_number = document.loanForm.nin;
const birth_day = document.loanForm.birthday;
const job = document.loanForm.job;
const work_place = document.loanForm.workplace;
const gender = document.loanForm.gender;
const loan_amount = document.loanForm.loanamount;
const loan_security = document.loanForm.loansecurity;
const fallback_security = document.loanForm.fallbacksecurity;

//Displaying errors picked from id of error element in form
const surname_error = document.getElementById('sname');
const given_name_error = document.getElementById('gname');
const nin_number_error = document.getElementById('usernin');
const birth_day_error = document.getElementById('bday');
const job_error = document.getElementById('ujob');
const work_place_error = document.getElementById('uwplace');
const gender_error = document.getElementById('sgender');
const loan_amount_error = document.getElementById('sloan');
const loan_security_error = document.getElementById('loansec');
const fallback_security_error = document.getElementById('fallsec');

//Adding event listeners to the declared constants
surname.addEventListener('blur', surname_verify, true);
given_name.addEventListener('blur', given_name_verify, true);
nin_number.addEventListener('blur', nin_number_verify, true);
birth_day.addEventListener('blur', birth_day_verify, true);
job.addEventListener('blur', job_verify, true);
work_place.addEventListener('blur', work_place_verify, true);
gender.addEventListener('blur', gender_verify, true);
loan_amount.addEventListener('blur', loan_amount_verify, true);
loan_security.addEventListener('blur', loan_security_verify, true);
fallback_security.addEventListener('blur', fallback_security_verify, true);

//Validations
function Validate(){
    //Surname validation, checking if its empty
    if(surname.value ==='')
    {
        surname_error.textContent = 'Invalid field';
        surname.border = '1px solid red';
        surname.focus();
        return false;
    }
   
    if(given_name.value ===''){
        given_name_error.textContent = 'Invalid field';
        given_name.border = '1px solid red';
        given_name.focus();
        return false;
    }
    
    if(nin_number.value ===''){
        nin_number_error.textContent = 'Invalid field';
        nin_number.border = '1px solid red';
        nin_number.focus();
        return false;
    }

    if(birth_day.value ===''){
        birth_day_error.textContent = 'Invalid field';
        birth_day.border = '1px solid red';
        birth_day.focus();
        return false;
    }

    if(job.value ===''){
        job_error.textContent = 'Invalid field';
        job.border = '1px solid red';
        job.focus();
        return false;
    }

    if(work_place.value ===''){
        work_place_error.textContent = 'Invalid field';
        work_place.border = '1px solid red';
        work_place.focus();
        return false;
    }

    if(gender.value ===''){
        gender_error.textContent = 'Invalid field';
        gender.border = '1px solid red';
        gender.focus();
        return false;
    }

    if(loan_amount.value ===''){
        loan_amount_error.textContent = 'Invalid field';
        loan_amount.border = '1px solid red';
        loan_amount.focus();
        return false;
    }

    if(loan_security.value ===''){
        loan_security_error.textContent = 'Invalid field';
        loan_security.border = '1px solid red';
        loan_security.focus();
        return false;
    }

    if(fallback_security.value ===''){
        fallback_security_error.textContent = 'Invalid field';
        fallback_security.border = '1px solid red';
        fallback_security.focus();
        return false;
    }
   

}

//regex
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names btn (5-50)
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'

//Event handlers for correct data

//Register name
// function register_name_verify(){
//     if(register_name.value !='' && register_name.value.match(nameRegex)){
//         register_name.style.border ='1px solid green';
//         register_name_error.innerHTML = '';
//         return true;
//     }
//     else{
//         register_name.style.border = '1px solid red';
//         register_name_error.textContent = 'Your name should be between 5-50 characters'
//         register_name.focus();
//         return false;
//     }
// }

// //Email
//  function email_verify(){
//     if(email.value !='' && email.value.match(emailRegex)){
//         email.style.border ='1px solid green';
//         email_error.innerHTML = '';
//         return true;
//     }
//     else{
//         email.style.border = '1px solid red';
//         email_error.textContent = 'email shoud have "@"'
//         email.focus();
//        return false;
//     }
// }

// //User name
// function user_name_verify(){
//     if(user_name.value !='' && user_name.value.match(nameRegex)){
//         user_name.style.border ='1px solid green';
//         user_name_error.innerHTML = '';
//         return true;
//     }
//     else{
//         user_name.style.border = '1px solid red';
//         user_name_error.textContent = 'Your name should be between 5-50 characters'
//         user_name.focus();
//         return false;
//     }
// }

// //password
// function password_verify(){
//     if(password.value !='' && password.value.match(passwordRegex)){
//         password.style.border ='1px solid green';
//         password_error.innerHTML = '';
//         return true;
//     }
//     else{
//         password.style.border = '1px solid red';
//         password_error.textContent = 'Minimum eight characters, at least one letter and one number'
//         password.focus();
//        return false;
//     }
// }
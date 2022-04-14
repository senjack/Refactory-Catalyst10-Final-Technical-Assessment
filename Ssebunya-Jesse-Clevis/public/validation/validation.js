// accessing the dom by form name and element
const surname = document.entryForm.surname;
const givenname = document.entryForm.givenname;
const nationalidnumber = document.entryForm.nationalidnumber;
const dateofbirth = document.entryForm.dateofbirth;
const occupation = document.entryForm.occupation;
const placeofwork = document.entryForm.placeofwork;
const gender = document.entryForm.gender;
const loanamount = document.entryForm.loanamount;
const loansecurity = document.entryForm.loansecurity;
const fallbackamount = document.entryForm.fallbackamount;

// for the errors
// accessing the dom by form name and element
const surnameError = document.getElementById('vnin');
const givennameError = document.getElementById('vnin');
const nationalidnumberError = document.getElementById('vnin');
const dateofbirthError = document.getElementById('vdob');
const occupationError = document.getElementById('voccupation')
const placeofworkError = document.getElementById('vpow');
const genderErrorError = document.getElementById('vgen');
const loanamountError = document.getElementById('vloanamount');
const loansecurityError = document.getElementById('vloansecurity');
const fallbackamountError = document.getElementById('vfallback');


// eventlisteners from the declared constants
surname.addEventListener('blur', surname_verify, true);
givenname.addEventListener('blur', givenname_verify, true);
nationalidnumber.addEventListener('blur', nationalidnumber_verify, true);
dateofbirth.addEventListener('blur', dateofbirth_verify, true);
occupation.addEventListener('blur', occupation_verify, true);
placeofwork.addEventListener('blur', placeofwork_verify, true);
loanamount.addEventListener('blur', loanamount_verify, true);
loansecurity.addEventListener('blur', loansecurity_verify, true);
fallbackamount.addEventListener('blur', fallbackamount_verify, true);


// validations
function validate(){
    //nin validation, checking if its empty
    if(surname.value ===''){
       surnameError.textContent = 'Surname is required';
       surname.focus();
       return false;
   }
   if(givenname.value ===''){
       givennameError.textContent = 'Givenname is required';
       givenname.focus();
       return false;
   }
   if(nationalidnumber.value ===''){
       nationalidnumberError.textContent = 'NationalIdNumber is required';
       nationalidnumber.focus();
       return false;
   }
   if(dateofbirth.value ===''){
       dateofbirthError.textContent = 'Date of birth is required';
       // Charge.border = '1px solid red';
       dateofbirth.focus();
       return false;
   }
   if(occupation.value ===''){
       occupationError.textContent = 'occupation is required';
       // Charge.border = '1px solid red';
       Color.focus();
       return false;
   }
   if(placeofwork.value ===''){
       placeofworkError.textContent = 'Place of work?';
       placeofwork.focus();
       return false;
   }
   if(loanamount.value ===''){
    loanamountError.textContent = 'Loan Amount?';
    loanamount.focus();
    return false;
   }
if(loansecurity.value ===''){
    loansecurityError.textContent = 'Whats your Security?';
    loanamount.focus();
    return false;
   }
if(fallbackamount.value ===''){
       fallbackamountError.textContent = 'Enter Fall Back Amount';
       
       fallbackamount.focus();
       return false;
   }
}



function surname_verify(){
    if(surname.value !='' && surname.value.match(surnameRegex)){
        surnameError.innerHTML = '';
        return true;
    }
    else{
        surnameError.textContent = 'Surname should be a '
        Nin.focus();
       return false;
       }
}
//Given Name 
function givenname_verify(){
    if(givenname.value !='' && givenname.value.match(alphabets)){
        givennameError.innerHTML = '';
        return true;
    }
    else{

        givennameError.textContent = 'givenname should only be alphabets'
        givenname.focus();
        return false;
       }
}
// nationalidnumber
function nationalidnumber_verify(){
    if(nationalidnumber.value !='' && nationalidnumber.value.match(phoneRegex)){
        nationalidnumberError.innerHTML = '';
        return true;
    }
    else{
        nationalidnumberError.textContent = 'Nationalid number should be digits'
        nationalidnumber.focus();
        return false;
       }
}
// dob
function dateofbirth_verify(){
    if(dateofbirth.value !='' && dateofbirth.value.match(alphaNumeric)){
        dateofbirthError.innerHTML = '';
        return true;
    }
    else{

        dateofbirthError.textContent = 'date of birth should be a string'
        dateofbirth.focus();
        return false;
       }
}

function occupation_verify(){
    if(occupation.value !='' && occupation.value.match(alphaNumeric)){
        occupationError.innerHTML = '';
        return true;
    }
    else{

        occupationError.textContent = 'occupation should be a string'
        occupation.focus();
        return false;
       }
}

function placeofwork_verify(){
    if(placeofwork.value !='' && placeofwork.value.match(alphaNumeric)){
        placeofworkError.innerHTML = '';
        return true;
    }
    else{

        placeofworkError.textContent = 'date of birth should be a string'
        placeofwork.focus();
        return false;
       }
}
function placeofwork_verify(){
    if(placeofwork.value !='' && placeofwork.value.match(alphaNumeric)){
        placeofworkError.innerHTML = '';
        return true;
    }
    else{

        placeofworkError.textContent = 'date of birth should be a string'
        placeofwork.focus();
        return false;
       }
}




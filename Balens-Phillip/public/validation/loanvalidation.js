// input variable initialization 
const Surname = document.entryForm.surname;
const Givenname = document.entryForm.givenname;
const Nin = document.entryForm.nin;
const Dateofbirth = document.entryForm.dateofbirth;
const Occupation = document.entryForm.occupation;
const Placeofwork = document.entryForm.placeofwork;
const Loanamount = document.entryForm.loanamount;
const Loansecurity = document.entryForm.loansecurity;
const Fallbacksecurity = document.entryForm.fallbacksecurity;


//displaying errors picked from id of error element in form
const surnameError = document.getElementById('lsurname');
const givennameError = document.getElementById('lgivenname');
const ninError = document.getElementById('lnin');
const dateofbirthError = document.getElementById('ldateofbirth');
const occupationError = document.getElementById('loccupation');
const placeofworkError = document.getElementById('lplaceofwork');
const loanamountError = document.getElementById('lloanamount');
const fallbacksecurityError = document.getElementById('lfallbacksecurity');

// eventlisteners from the declared constants
Surname.addEventListener('blur', Surname_verify, true);
Givenname.addEventListener('blur', Givenname_verify, true);
Nin.addEventListener('blur', Nin_verify, true);
Dateofbirth.addEventListener('blur', Dateofbirth_verify, true);
Occupation.addEventListener('blur', Occupation_verify, true);
Placeofwork.addEventListener('blur', Placeofwork_verify, true);
Loanamount.addEventListener('blur', Loanamount_verify, true);
Fallbacksecurity.addEventListener('blur', Fallback_verify, true);

// validations
function validate(){
     
     if(Surname.value ===''){
        surnameError.textContent = 'Invalid Field';
        Surname.focus();
        return false;
    }
    if(Givenname.value ===''){
        givennameError.textContent = 'Invalid Field';
        Givenname.focus();
        return false;
    }
    if(Nin.value ===''){
        ninError.textContent = 'Invalid Field';
        Nin.focus();
        return false;
    }
    if(Dateofbirth.value ===''){
        dateofbirthError.textContent = 'Invalid Field';
        Dateofbirth.focus();
        return false;
    }
    if(Occupation.value ===''){
        occupationError.textContent = 'Invalid Field';
        Occupation.focus();
        return false;
    }
    if(Placeofwork.value ===''){
        placeofworkError.textContent = 'Invalid Field';
        Placeofwork.focus();
        return false;
    }
    if(Loanamount.value ===''){
        loanamountError.textContent = 'Invalid Field';
        Loanamount.focus();
        return false;
    }
    if(Fallbacksecurity.value ===''){
        fallbacksecurityError.textContent = 'Invalid Field';
        Fallbacksecurity.focus();
        return false;
    }
}

//regex
const numbers = /^\d+$/;
const alphabets = /^[a-zA-Z]+$/;
const nameRegex = /^.{2,20}[a-zA-Z]+$/; 
const alphaNumeric = /^[0-9a-zA-Z]+$/; 
const ninRegex = /^[0-9a-zA-Z]{13}$/; 
const phoneRegex = /^\d{100}$/;
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
const emailRegex = "^(.+)@(.+)$";


//event handlers for correct data
function Surname_verify(){
    if(Surname.value !='' && Surname.value.match(nameRegex)){
        Surname.style.border ='1px solid green';
        surnameError.innerHTML = '';
        return true;
    }
    else{
        surnameError.textContent = 'Invalid Field'
        Surname.focus();
       return false;
       }
}
function Givenname_verify(){
    if(Givenname.value !='' && Givenname.value.match(nameRegex)){
        Givenname.style.border ='1px solid green';
        givennameError.innerHTML = '';
        return true;
    }
    else{

        givennameError.textContent = 'Invalid Field'
        Givenname.focus();
        return false;
       }
}

function Nin_verify(){
    if(Nin.value !='' && Nin.value.match(ninRegex)){
        Nin.style.border ='1px solid green';
        ninError.innerHTML = '';
        return true;
    }
    else{
        ninError.textContent = 'Invalid Field'
        Nin.focus();
        return false;
       }
}

function Dateofbirth_verify(){
    if(Dateofbirth.value !='' && Dateofbirth.value.match(alphaNumeric)){
        Dateofbirth.style.border ='1px solid green';
        dateofbirthError.innerHTML = '';
        return true;
    }
    else{

        dateofbirthError.textContent = 'Invalid Field'
        Dateofbirth.focus();
        return false;
       }
}

function Occupation_verify(){
    if(Occupation.value !='' && Occupation.value.match(nameRegex)){
        Occupation.style.border ='1px solid green';
        occupationError.innerHTML = '';
        return true;
    }
    else{

        occupationError.textContent = 'Invalid Field'
        Occupation.focus();
        return false;
       }
}
function Placeofwork_verify(){
    if(Placeofwork.value !='' && Placeofwork.value.match(nameRegex)){
        Placeofwork.style.border ='1px solid green';
        placeofworkError.innerHTML = '';
        return true;
    }
    else{

        placeofworkError.textContent = 'Invalid Field'
        Occupation.focus();
        return false;
       }
}
function Loanamount_verify(){
    if(Loanamount.value !='' && Loanamount.value.match(phoneRegex)){
        Loanamount.style.border ='1px solid green';
        loanamountError.innerHTML = '';
        return true;
    }
    else{

        loanamountError.textContent = 'Invalid Field'
        Occupation.focus();
        return false;
       }
}
function Fallbacksecurity_verify(){
    if(Fallbacksecurity.value !='' && Fallbacksecurity.value.match(nameRegex)){
        Fallbacksecurity.style.border ='1px solid green';
        fallbacksecurityError.innerHTML = '';
        return true;
    }
    else{

        fallbacksecurityError.textContent = 'Invalid Field'
        Fallbacksecurity.focus();
        return false;
       }
}
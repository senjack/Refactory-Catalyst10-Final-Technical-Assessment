// accessing the dom by form name and element
const surName = document.register.surname; 
const giveName = document.register.givename; 
const nin = document.register.nin; 
//const dob = document.register.dob;
const occupation = document.register.occupation; 
const placeOfWork = document.register.placeofwork;
//const gender = document.register.gender; 
const loanAmount = document.register.loanamount; 
const loanSecurity = document.register.loansecurity; 
const fallBack = document.register.fallback; 




//displaying errors picked from id of error element in form
const surNameError = document.getElementById('surname');
const giveNameError = document.getElementById('givename'); 
const ninError = document.getElementById('nin');
const occupationError = document.getElementById('occupation'); 
const placeOfWorkError = document.getElementById('placeofwork');
const loanAmountError = document.getElementById('loanamount'); 
const loanSecurityError = document.getElementById('loansecurity');
const fallBackError = document.getElementById('fallback');



//event listners got from declared constant
surName.addEventListener('blur', surNameVerify,true); 
giveName.addEventListener('blur', giveNameVerify, true); 
nin.addEventListener('blur', ninVerify, true);
//dob.addEventListener('blur', dobVerify, true);
occupation.addEventListener('blur', occupationVerify, true);
placeOfWork.addEventListener('blur', placeOfWorkVerify, true);
//gender.addEventListener('blur', genderVerify, true);
loanAmount.addEventListener('blur', loanAmountVerify, true);
loanSecurity.addEventListener('blur', loanSecurityVerify, true);
fallBack.addEventListener('blur', fallBackVerify, true);





// validations
function registerValidate() {
    if (surName.value === '') {
        surNameError.textContent = 'invalid field';
        surName.style.border = '1px solid red';
        surName.focus();
        return false;    
    }
    if (giveName.value === '') {
        giveNameError.textContent = 'Invalid field'; 
        giveName.style.border = '1px solid red'; 
        giveName.focus(); 
        return false; 
        
    }
    if (nin.value === "") {
        ninError.textContent = 'Invalid field'; 
        nin.style.border = '1px solid red'; 
        nin.focus(); 
        return false; 
        
    }
    // if (dob.value === '') {
    //     dobError.textContent = 'Invalid field'; 
    //     dob.style.border = '1px solid red'
    //     dob.focus(); 
    //     return false;
        
    // }
    if (occupation.value === "") {
        occupationError.textContent = 'Invalid field'; 
        occupation.style.border = '1px solid red'; 
        occupation.focus(); 
        return false; 
        
    }
    if (placeOfWork.value === "") {
        placeOfWorkError.textContent = 'Invalid field'; 
        placeOfWork.style.border = '1px solid red'; 
        placeOfWork.focus(); 
        return false; 
    }
    if (loanAmount.value === "") {
        loanAmountError.textContent = 'Invalid field'; 
        loanAmount.style.border = '1px solid red'; 
        loanAmount.focus(); 
        return false; 
        
    }
    if (loanSecurity.value === "") {
        loanSecurityError.textContent = 'Invalid field'; 
        loanSecurity.style.border = '1px solid red'; 
        loanSecurity.focus(); 
        return false; 
        
    }
    if (fallBack.value === "") {
        fallBackError.textContent = 'Invalid field'; 
        fallBackError.style.border = '1px solid red'; 
        fallBack.focus(); 
        return false; 
        
    }
}


//regex
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const dobRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

// surname
function surNameVerify() {
    if (surName.value != '' && surName.value.match(nameRegex)) {
        surName.style.border ='1px solid green';
        surNameError.innerHTML = '';
        return true;   
    }
    else{
        surName.style.border = '1px solid red';
        surNameError.textContent = 'Surname should be between 1-20 characters'
        surName.focus();
       return false;
       }
    
}


// given name
function giveNameVerify() {
    if (giveName.value != '' && giveName.value.match(nameRegex)) {
        giveName.style.border = '1px solid green'; 
        giveNameError.innerHTML= ''; 
        return true;
        
    } 
    else {
         giveName.style.border = '1px solid red'; 
         giveNameError.textContent= 'Given name should be between 1-20 character'; 
         return false;  
    }
       
 }

// nin
function ninVerify() {
    if (nin.value != '' && nin.value.match(alphaNumeric)) {
        nin.style.border = '1px  solid green'; 
        ninError.innerHTML = ''; 
        return true;
    } else {
        nin.style.border = '1px solid red'; 
        ninError.textContent = 'incorrect nin'
    }
}

// // date of birth 
// function dobVerify() {
//     if (dob.value != '' && dob.value.match(dobRegex)) {
//         dob.style.border = '1px  solid green'; 
//         dobError.innerHTML = ''; 
//         return true;
//     } else {
//         dob.style.border = '1px solid red'; 
//         dobError.textContent = 'incorrect date of birth'
//     }
// }

// occupation
function occupationVerify() {
    if (occupation.value != '' && occupation.value.match(nameRegex)) {
        occupation.style.border = '1px  solid green'; 
        occupationError.innerHTML = ''; 
        return true;
    } else {
        occupation.style.border = '1px solid red'; 
        occupationError.textContent = 'incorrect occupation'
    }
}

// place of work
function placeOfWorkVerify() {
    if (placeOfWork.value != '' && placeOfWork.value.match(nameRegex)) {
        placeOfWork.style.border = '1px  solid green'; 
        placeOfWorkError.innerHTML = ''; 
        return true;
    } else {
        placeOfWork.style.border = '1px solid red'; 
        placeOfWorkError.textContent = 'incorrect place of work'
    }
}


// loan amount 
function loanAmountVerify() {
    if (loanAmount.value != '' && loanAmount.value.match(alphaNumeric)) {
       loanAmount.style.border = '1px  solid green'; 
        loanAmountError.innerHTML = ''; 
        return true;
    } else {
        loanAmount.style.border = '1px solid red'; 
        loanAmountError.textContent = 'incorrect amount'
    }
}

// loan security
function loanSecurityVerify() {
    if (loanSecurity.value != '' && loanSecurity.value.match(alphaNumeric)) {
        loanSecurity.style.border = '1px  solid green'; 
        loanSecurityError.innerHTML = ''; 
        return true;
    } else {
        loanSecurity.style.border = '1px solid red'; 
        loanSecurityError.textContent = 'incorrect field'
    }
}


// fall back 
function fallBackVerify() {
    if (fallBack.value != '' && fall.value.match(alphaNumeric)) {
        fallBack.style.border = '1px  solid green'; 
        fallBackError.innerHTML = ''; 
        return true;
    } else {
        fallBack.style.border = '1px solid red'; 
        fallBackError.textContent = 'incorrect field'
    }
}

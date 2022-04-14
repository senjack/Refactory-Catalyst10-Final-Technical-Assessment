const myFunction = () => {
    const surname = document.getElementById('surname');
    const givenname = document.getElementById('givenname');
    const nin = document.getElementById('nin');
    const date = document.getElementById('date');
    const occupation = document.getElementById('occupation');
    const work = document.getElementById('work');
    const gender = document.getElementById('gender');
    const loan = document.getElementById('loan')
    const security = document.getElementById('security');
    const fallback = document.getElementById('fallback');

    const surnameError = document.getElementById('surnameError');
    const givennameError = document.getElementById('givennameError');
    const ninError = document.getElementById('ninError');
    const dateError = document.getElementById('dateError');
    const occupationError = document.getElementById('occupationError');
    const workError = document.getElementById('workError');
    const genderError = document.getElementById('genderError');
    const loanError = document.getElementById('loanError');
    const securityError = document.getElementById('securityError');
    const fallbackError = document.getElementById('fallbackError');
    


    //Surname Validation
    if(surname.value == ""){
        surname.style.border = "1px solid red";
        surnameError.innerHTML = 'Invalid Field';
        surnameError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
        return false;
    }
    else {
        const surnameRegex = /^[A-Za-z]{2,255}$/; 
        if(surnameRegex.test(surname.value) == false) {
            surname.style.border = '1px solid red';
            surnameError.innerHTML = 'Surname should not contain numbers';
            surnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
  
        } 
        surname.style.border = "1px solid green"
        surnameError.textContent  = ""
  
  
    }


    //Givenname Validation
    if(givenname.value == ""){
        givenname.style.border = "1px solid red";
        givennameError.innerHTML = 'Invalid Field';
        givennameError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
        return false;
    }
    else {
        const givennameRegex = /^[A-Za-z]{2,255}$/; 
        if(givennameRegex.test(givenname.value) == false) {
            givenname.style.border = '1px solid red';
            givennameError.innerHTML = 'Surname should not contain numbers';
            givennameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
  
        } 
        givenname.style.border = "1px solid green"
        givennameError.textContent  = ""
  
  
    }


    //NIN Validation
    if(nin.value == ''){
        nin.style.border = '1px solid red';
        ninError.innerHTML = 'Invalid Input';
        ninError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const ninRegex = /^[C][MF][0-9A-Z]{10}[A-Z]{2}$/; 
        if(ninRegex.test(nin.value)== false){
            nin.style.border = '1px solid red';
            ninError.innerHTML = 'Enter correct NIN number';
            ninError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            nin.style.border = "1px solid green"
            ninError.textContent  = ""
    
            }
        }

        //Date Validation
    if(date.value == ''){
        date.style.border = '1px solid red';
        dateError.innerHTML = 'Invalid Input';
        dateError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
        if(dateRegex.test(date.value)== false){
            date.style.border = '1px solid red';
            dateError.innerHTML = 'Incorrect date of birth format';
            dateError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            date.style.border = "1px solid green"
            dateError.textContent  = ""
    
            }
        }


        //Occupation Validation
    if(occupation.value == ""){
        occupation.style.border = "1px solid red";
        occupationError.innerHTML = 'Invalid Field';
        occupationError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
        return false;
    }
    else {
        const occupationRegex = /^[A-Za-z]{2,255}$/; 
        if(occupationRegex.test(occupation.value) == false) {
            occupation.style.border = '1px solid red';
            occupationError.innerHTML = 'Enter correct occupation format';
            occupationError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
  
        } 
        occupation.style.border = "1px solid green"
        occupationError.textContent  = ""
  
  
    }


        //Place of work Validation
        if(work.value == ""){
            work.style.border = "1px solid red";
            workError.innerHTML = 'Invalid Field';
            workError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }
        else {
            const workRegex = /^[A-Za-z]{2,255}$/; 
            if(workRegex.test(work.value) == false) {
                work.style.border = '1px solid red';
                workError.innerHTML = 'Enter correct occupation format';
                workError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                return false;
      
            } 
            work.style.border = "1px solid green"
            workError.textContent  = ""
      
      
        }

         //Gender Validation
    if(gender.value == "Default"){
        gender.style.border = "1px solid red"
        genderError.textContent = "Invalid Field"
        genderError.style = "color: red"
        return false

    }else{
        gender.style.border = "1px solid green"
        genderError.textContent = ""
    }

    
        //Loan amount Validation
        if(loan.value == ""){
            loan.style.border = "1px solid red";
            loanError.innerHTML = 'Invalid Field';
            loanError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }
        else {
            const loanRegex = /^(50000000|5[0-9][0-9][0-9][0-9][0-9]|[1-9][0-9][0-9][0-9][0-9]|50000[0-9])$/; 
            if(loanRegex.test(loan.value) == false) {
                loan.style.border = '1px solid red';
                loanError.innerHTML = 'Incorrect loan figure';
                loanError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                return false;
      
            } 
            loan.style.border = "1px solid green"
            loanError.textContent  = ""
      
      
        }

        //Loan security Validation
        if(security.value == ""){
            security.style.border = "1px solid red";
            securityError.innerHTML = 'Invalid Field';
            securityError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }
        else {
            const securityRegex = /^[A-Za-z]{2,255}$/; 
            if(securityRegex.test(security.value) == false) {
                security.style.border = '1px solid red';
                securityError.innerHTML = 'Enter correct occupation format';
                securityError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                return false;
      
            } 
            security.style.border = "1px solid green"
            securityError.textContent  = ""
      
      
        }

        //fallback Validation
        if(fallback.value == ""){
            fallback.style.border = "1px solid red";
            fallbackError.innerHTML = 'Invalid Field';
            fallbackError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }
        else {
            const fallbackRegex = /^[A-Za-z]{2,255}$/; 
            if(fallbackRegex.test(fallback.value) == false) {
                fallback.style.border = '1px solid red';
                fallbackError.innerHTML = 'Enter correct occupation format';
                fallbackError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                return false;
      
            } 
            fallback.style.border = "1px solid green"
            fallbackError.textContent  = ""
        
      
        }

    
};
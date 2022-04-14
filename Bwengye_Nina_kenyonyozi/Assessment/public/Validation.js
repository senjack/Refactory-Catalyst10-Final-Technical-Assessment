const Form = () =>{

    const userN = document.getElementById('inputSurname')
    const userError = document.getElementById('userError');

    const givenN = document.getElementById('inputGivenname')
    const givenError = document.getElementById('givenError');

    const ninnumber = document.getElementById('inputNin')
    const ninnumberError = document.getElementById('ninError');

    const date = document.getElementById('inputDate') 
    const dateError = document.getElementById('dateError')

    const occupation = document.getElementById('inputOccupation')
    const occupationError = document.getElementById('occupationError');

    const work = document.getElementById('inputWork')
    const workError = document.getElementById('workError');

    const gender = document.getElementById('inputgender')
    const genderError = document.getElementById('genderError');

    const loanamount = document.getElementById('inputLoanamount')
    const loanamountError = document.getElementById('loanamountError');

    const loansecurity = document.getElementById('inputLoansecurity')
    const loansecurityError = document.getElementById('loansecurityError');

    const  fallback = document.getElementById('inputFallback')
    const fallbackError = document.getElementById('fallbackError');


    // regex
    const userRegex = /^.{2,255}[a-zA-Z]+$/; // 2-255 characters 
    const ninRegex = /^[A-Z]{2}[0-9A-Z]{12}$/; // for NIN exactly 14 alphanumric characters with first letter capital
    // const phoneRegex = /^\d{10}$/; // for phone number

    if(userN.value != "" && userN.value.match(userRegex)){
        userN.style.border = "1px solid green"
        userError.textContent = ""
    }else{
        userN.style.border = "1px solid red"
        userError.textContent = "Invalid Feild"
        userError.style = "color: red"
        return false
    };

    if(givenN.value != "" && givenN.value.match(userRegex)){
        givenN.style.border = "1px solid green"
        givenError.textContent = ""
    }else{
        givenN.style.border = "1px solid red"
        givenError.textContent = "Invalid Feild"
        givenError.style = "color: red"
        return false
    };

    if(ninnumber.value != "" && ninnumber.value.match(ninRegex)){
        ninnumber.style.border = "1px solid green"
        ninnumberError.textContent  = ""
    }else{
        ninnumber.style.border = "1px solid red"
        ninnumberError.textContent = "Invalid Feild"
        ninnumberError.style = "color: red"
        return false
    };

    if(date.value == ""){
        date.style.border = "1px solid red"
        dateError.textContent = "Invalid Feild"
        dateError.style = "color: red"
        return false

    }else{
        date.style.border = "1px solid green"
        dateError.textContent = ""
    };


    if(occupation.value != "" && occupation.value.match(userRegex)){
        occupation.style.border = "1px solid green"
        occupationError.textContent = ""
    }else{
        occupation.style.border = "1px solid red"
        occupationError.textContent = "Invalid Feild"
        occupationError.style = "color: red"
        return false
    };

    if(work.value != "" && work.value.match(userRegex)){
        work.style.border = "1px solid green"
        workError.textContent = ""
    }else{
        work.style.border = "1px solid red"
        workError.textContent = "Invalid Feild"
        workError.style = "color: red"
        return false
    };

    if(gender.value == 'Default'){
        gender.style.border = "1px solid red"
        genderError.textContent = "Invalid Feild"
        genderError.style = "color: red"
        return false
    }else{
        gender.style.border = "1px solid green"
        genderError.textContent = ""
    };

    if(loanamount.value == ""){
        loanamount.style.border = "1px solid red"
        loanamount.textContent = "Invalid Feild"
        loanamountError.style = "color: red"
        return false

    }else{
        loanamount.style.border = "1px solid green"
        loanamountError.textContent = ""
    };

    if(loansecurity.value != ""  && loansecurity.value.match(userRegex)){
        loansecurity.style.border = "1px solid green"
        loansecurityError.textContent = ""
    }else{
        loansecurity.style.border = "1px solid red"
        loansecurityError.textContent = "Invalid Feild"
        loansecurityError.style = "color: red"
        return false
    };

    if(fallback.value != "" && fallback.value.match(userRegex)){
        fallback.style.border = "1px solid green"
        fallbackError.textContent = ""

    }else{
        fallback.style.border = "1px solid red"
        fallbackError.textContent = "Invalid Feild"
        fallbackError.style = "color: red"
        return false
    };

   
    

}
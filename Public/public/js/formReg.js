const validform = () =>{
    const sirname = document.getElementById('sirname')
    const sirnameError = document.getElementById('sirnameError')
    const givename = document.getElementById('givename')
    const givenameError = document.getElementById('givenameError')
    const nin = document.getElementById('nin')
    const ninError = document.getElementById('ninError')
    const dateofbirth = document.getElementById('dateofbirth')
    const dateofbirthError = document.getElementById('dateofbirthError')
    const occupation = document.getElementById('occupation') 
    const occupationError = document.getElementById('occupationError')
    const placeofwork = document.getElementById('placeofwork')
    const placeofworkError = document.getElementById('placeofworkError')
    const gender = document.getElementById('gender')
    const genderError = document.getElementById('genderError')
    const loanamount = document.getElementById('loanamount')
    const loanamountError = document.getElementById('loanamountError')
    const loansecurity = document.getElementById('loansecurity')
    const loansecurityError = document.getElementById('loansecurityError')
    const fallbacksecurity = document.getElementById('fallbacksecurity')
    const fallbacksecurityError = document.getElementById('fallbacksecurityError')



    if(sirname.value == ""){
        sirname.style.border = "1px solid red"
        sirnameError.textContent = "Please provide a sirname"
        sirnameError.style = "color: red"
        return false
    }else{
        sirname.style.border = "1px solid green"
        sirnameError.textContent = ""
    }

    if(givename.value == ""){
        givename.style.border = "1px solid red"
        givenameError.textContent = "Please provide the givename"
        givenameError.style = "color: red"
        return false
    }else{
        givename.style.border = "1px solid green"
        givenameError.textContent = ""
    }

    if(nin.value == "Default"){
        nin.style.border = "1px solid red"
        ninError.textContent = "Please select a nin type"
        ninError.style = "color: red"
        return false
    }else{
        nin.style.border = "1px solid green"
        ninError.textContent = ""
    }

    if(dateofbirth.value == ""){
        dateofbirth.style.border = "1px solid red"
        dateofbirthError.textContent = "Please select a date of birth"
        dateofbirthError.style = "color: red"
        return false
    }else{
        dateofbirth.style.border = "1px solid greeen"
        dateofbirthError.textContent  = ""
    }

    if(occupation.value == ""){
        occupation.style.border = "1px solid red"
        occupationError.textContent = "Please select an occupation"
        occupationError.style = "color: red"
        return false
    }else{
        occupation.style.border = "1px solid greeen"
        occupationError.textContent  = ""
    }

    if(placeofwork.value == ""){
        placeofwork.style.border = "1px solid red"
        placeofworkError.textContent = "Please select a place of work"
        placeofworkError.style = "color: red"
        return false
    }else{
        placeofwork.style.border = "1px solid greeen"
        placeofworkError.textContent  = ""
    }

    if(gender.value == ""){
        gender.style.border = "1px solid red"
        genderError.textContent = "Please select a gender"
        genderError.style = "color: red"
        return false
    }else{
        gender.style.border = "1px solid greeen"
        genderError.textContent  = ""
    }

    if(loanamount.value == ""){
        loanamount.style.border = "1px solid red"
        loanamountError.textContent = "Please select a loan amount"
        loanamountError.style = "color: red"
        return false
    }else{
        loanamount.style.border = "1px solid greeen"
        loanamountError.textContent  = ""
    }

    if(loansecurity.value == ""){
        loansecurity.style.border = "1px solid red"
        loansecurityError.textContent = "Please select a loan security"
        loansecurityError.style = "color: red"
        return false
    }else{
        loansecurity.style.border = "1px solid greeen"
        loansecurityError.textContent  = ""
    }

    if(fallbacksecurity.value == ""){
        fallbacksecurity.style.border = "1px solid red"
        fallbacksecurityError.textContent = "Please select a fall back security"
        fallbacksecurityError.style = "color: red"
        return false
    }else{
        fallbacksecurity.style.border = "1px solid greeen"
        fallbacksecurityError.textContent  = ""
    }
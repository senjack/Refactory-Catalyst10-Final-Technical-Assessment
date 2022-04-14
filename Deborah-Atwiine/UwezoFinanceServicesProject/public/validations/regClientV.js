const validationForm = () =>{
    const Surname = document.getElementById('Surname')
    const SurnameError = document.getElementById('SurnameError')
    
    const Givenname = document.getElementById('Givenname')
    const GivennameError = document.getElementById('GivennameError')
    
    const Nin = document.getElementById('Nin')
    const NinError = document.getElementById('NinError')
    
    const Date = document.getElementById('Date')
    const DateError = document.getElementById('DateError')

    const Occupation = document.getElementById('Occupation')
    const OccupationError = document.getElementById('OccupationError')

    const Pwork = document.getElementById('Pwork')
    const PworkError = document.getElementById('PworkError')
    
    const Gender = document.getElementById('Gender')
    const GenderError = document.getElementById('GenderError')
    
    const Loan = document.getElementById('Loan')
    const LoanError = document.getElementById('LoanError')

    const Lsecurity = document.getElementById('Lsecurity')
    const LsecurityError = document.getElementById('LsecurityError')

    const Fsecurity = document.getElementById('Fsecurity')
    const FsecurityError = document.getElementById('FsecurityError')

    
    if(Surname.value == ""){
        Surname.style.border = "1px solid red"
        SurnameError.textContent = "Please provide your surname"
        SurnameError.style = "color: red"
        return false
    }else{
        Surname.style.border = "1px solid blue"
        SurnameError.textContent = ""
    }

    if(Givenname.value == ""){
        Givenname.style.border = "1px solid red"
        GivennameError.textContent = "Please provide your given name"
        GivennameError.style = "color: red"
        return false
    }else{
        Givenname.style.border = "1px solid blue"
        GivennameError.textContent = ""
    }

    if(Nin.value == ""){
        Nin.style.border = "1px solid red"
        NinError.textContent = "Please enter appropriate NIN"
        NinError.style = "color: red"
        return false
    }else{
        Nin.style.border = "1px solid blue"
        NinError.textContent = ""
    }

    if(Date.value == ""){
        Date.style.border = "1px solid red"
        DateError.textContent = "Please enter date in correct format"
        DateError.style = "color: red"
        return false
    }else{
        Date.style.border = "1px solid blue"
        DateError.textContent  = ""
    }

    if(Occupation.value == ""){
        Occupation.style.border = "1px solid red"
        OccupationError.textContent = "Invalid input"
        OccupationError.style = "color: red"
        return false
    }else{
        Occupation.style.border = "1px solid blue"
        OccupationError.textContent  = ""
    }

    if(Pwork.value == ""){
        Pwork.style.border = "1px solid red"
        PworkError.textContent = "Invalid input"
        PworkError.style = "color: red"
        return false
    }else{
        Pwork.style.border = "1px solid blue"
        PworkError.textContent  = ""
    }

    if(Gender.value == ""){
        Gender.style.border = "1px solid red"
        GenderError.textContent = "Invalid Entry"
        GenderError.style = "color: red"
        return false
    }else{
        Gender.style.border = "1px solid blue"
        GenderError.textContent  = ""
    }

    if(Loan.value == ""){
        Loan.style.border = "1px solid red"
        LoanError.textContent = "Invalid Entry"
        LoanError.style = "color: red"
        return false
    }else{
        Loan.style.border = "1px solid blue"
        LoanError.textContent  = ""
    }

    if(Lsecurity.value == ""){
        Lsecurity.style.border = "1px solid red"
        LsecurityError.textContent = "Invalid Entry"
        LsecurityError.style = "color: red"
        return false
    }else{
        Lsecurity.style.border = "1px solid blue"
        LsecurityError.textContent  = ""
    }

    if(Fsecurity.value == ""){
        Fsecurity.style.border = "1px solid red"
        FsecurityError.textContent = "Invalid Entry"
        FsecurityError.style = "color: red"
        return false
    }else{
        Fsecurity.style.border = "1px solid blue"
        FsecurityError.textContent  = ""
    }
   
}
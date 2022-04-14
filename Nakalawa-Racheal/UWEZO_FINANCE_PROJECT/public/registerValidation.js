 
const nameComp = /^[A-Z][a-z]{1,254}\$/ //names
const occupationComp = /^[A-Za-z]{1,255}$/; //coccupation place of work
const ninComp = /^[C][F|M]\d{7}[A-HJ-NP-Z]{2}\d{1}[A-HJ-NP-Z]{2}$/; //NIN
const securityComp = /^[A-Za-z]{5,255}$/; //security


const genderOption = document.register.genderoption;
// Function to determine error message
const errMessageProducer = (value, secondErrorMessage) => {
	let errorMessage = ""
	if (value == "") {
		errorMessage = "Field should not be empty"
	}else{
		errorMessage = secondErrorMessage;
	}
	return errorMessage;
}

const validateSurName = () => {
	const surName = document.register.surname;
	const errorLabel = document.querySelector(".sn-error");

	if(!(surName.value.match(nameComp))) {
		errorLabel.textContent = errMessageProducer(surnameName.value, "Sur Name should start with a capital letter,and should be between 2-255 letters");
		surName.classList.add('shadow-none');
		surName.style.borderColor = 'red';
		surName.focus();
		return false;
	}

	errorLabel.textContent = "";
	surName.classList.remove('shadow-none');
	surName.style.borderColor = 'lightgray';
	document.register.givenname.focus();
	return true;
}
const validateGivenName = () => {
	const givenName = document.register.givenname;
	const errorLabel = document.querySelector(".gn-error");

	if(!(givenName.value.match(nameComp))) {
		errorLabel.textContent = errMessageProducer(givenName.value, "Given Name should start with a capital letter and should be between 2-255 letters");
		givenName.classList.add('shadow-none');
		givenName.style.borderColor = 'red';
		givenName.focus();
		return false;
	}

	errorLabel.textContent = "";
	givenName.classList.remove('shadow-none');
	givenName.style.borderColor = 'lightgray';
	document.register.nin.focus();
	return true;
}


const validateNin = () => {
	const Nin = document.register.nin;
	const errorLabel = document.querySelector(".nin-error");

	if(!(Nin.value.match(ninComp))) {
		errorLabel.textContent = errMessageProducer(Nin.value, "Enter a valid nin and should be 14 characters long");
		Nin.classList.add('shadow-none');
		Nin.style.borderColor = 'red';
		Nin.focus();
		return false;
	}

	errorLabel.textContent = "";
	Nin.classList.remove('shadow-none');
	Nin.style.borderColor = 'lightgray';
	document.register.birthdate.focus();
	return true;
}

const validateBirthDate = () => {
	const birthDate = document.register.birthdate;
	const errorLabel = document.querySelector(".bd-error");

	if((Date.now()-birthDate.value)<18) {
		errorLabel.textContent = errMessageProducer(birthDate.value, "User accessing loan should be above 18yrs");
		birthDate.classList.add('shadow-none');
		birthDate.style.borderColor = 'red';
		birthDate.focus();
		return false;
	}

	errorLabel.textContent = "";
	birthDate.classList.remove('shadow-none');
	birthDate.style.borderColor = 'lightgray';
	document.register.occupation.focus();
	return true;
}

const validateOccupation = () => {
	const occupation = document.register.occupation;
	const errorLabel = document.querySelector(".occ-error");

	if(!(occupation.value.match(occupationComp))) {
		errorLabel.textContent = errMessageProducer(occupation.value, "Occupation entered should be between 2-255 letters")
		occupation.classList.add('shadow-none');
		occupation.style.borderColor = 'red';
		occupation.focus();
		return false;
	}

	errorLabel.textContent = "";
	occupation.classList.remove('shadow-none');
	occupation.style.borderColor = 'lightgray';
	document.register.workplace.focus();
	return true;
}

const validateWorkPlace = () => {
	const workPlace = document.register.workplace;
	const errorLabel = document.querySelector(".work-error");

	if(!(workPlace.value.match(occupationComp))) {
		errorLabel.textContent = errMessageProducer(workPlace.value, "Work Place should be between 5-255 letters")
		workPlace.classList.add('shadow-none');
		workPlace.style.borderColor = 'red';
		workPlace.focus();
		return false;
	}

	errorLabel.textContent = "";
	workPlace.classList.remove('shadow-none');
	workPlace.style.borderColor = 'lightgray';
	document.register.genderoption.focus();
	return true;
}

const validateGender = () => {
	const genderOption = document.register.genderoption;
	const errorLabel = document.querySelector(".gender-error");

	if(genderOption.value == "default") {
		errorLabel.textContent = "Please select a cgender";
		genderOption.classList.add('shadow-none');
		genderOption.style.borderColor = 'red';
		genderOption.focus();
		return false;
	}

	errorLabel.textContent = "";
	genderOption.classList.add('shadow-none');
	genderOption.style.borderColor = 'lightgray';
	document.register.loanamount.focus();
	return true;
}

const validateLoanAmount = () => {
	const loanAmount = document.register.loanamount;
	const errorLabel = document.querySelector(".lamt-error");

	if(!(loanAmount.value>500000 && loanAmount.value<50000000)){
		errorLabel.textContent = errMessageProducer(loanAmount.value, "User  loan should be between 500000 and 50000000");
		loanAmount.classList.add('shadow-none');
		loanAmount.style.borderColor = 'red';
		loanAmount.focus();
		return false;
	}

	errorLabel.textContent = "";
	loanAmount.classList.remove('shadow-none');
	loanAmount.style.borderColor = 'lightgray';
	document.register.loansecurity.focus();
	return true;
}
const validateLoanSecurity = () => {
	const loanSecurity = document.register.loansecurity;
	const errorLabel = document.querySelector(".lscty-error");

	if(!(loanSecurity.value.match(securityComp ))) {
		errorLabel.textContent = errMessageProducer(loanSecurity.value, "loanSecurity word should be between 5-255 letters")
		loanSecurity.classList.add('shadow-none');
		loanSecurity.style.borderColor = 'red';
		loanSecurity.focus();
		return false;
	}

	errorLabel.textContent = "";
	loanSecurity.classList.remove('shadow-none');
	loanSecurity.style.borderColor = 'lightgray';
	document.register.fallbacksecurity.focus();
	return true;
}
const validateFallBackSecurity = () => {
	const fallBackSecurity = document.register.fallbacksecurity;
	const errorLabel = document.querySelector(".lfbck-error");

	if(!(fallBackSecurity.value.match(securityComp ))) {
		errorLabel.textContent = errMessageProducer(fallBackSecurity.value, "Fall back Security word should be between 5-255 letters")
		fallBackSecurity.classList.add('shadow-none');
		fallBackSecurity.style.borderColor = 'red';
		fallBackSecurity.focus();
		return false;
	}

	errorLabel.textContent = ""
	return true;
}
	

// The validation function

const validateRegister = (e) => {
	if(!validateSurName()) {
		e.preventDefault();
		return
	}

	if(!validateGivenName()) {
		e.preventDefault();
		return
	}

	if(!validateNin()) {
		e.preventDefault();
		return
	}

	if(!validateBirthDate()) {
		e.preventDefault();
		return
	}

	if(!validateOccupation()) {
		e.preventDefault();
		return
	}

	if(!validateWorkPlace()) {
		e.preventDefault();
		return
	}

	if(!validateGender()) {
		e.preventDefault();
		return
	}

	if(!validateLoanAmount()) {
		e.preventDefault();
		return
	}
	if(!validateLoanSecurity()) {
		e.preventDefault();
		return
	}

	if(!validateFallBackSecurity()) {
		e.preventDefault();
		return
	}
}
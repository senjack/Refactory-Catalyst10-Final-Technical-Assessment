const form = document.querySelector("form");
const surName = document.getElementById("surname");
const givenName = document.getElementById("givenname");
const nin = document.getElementById("nin");
const dob = document.getElementById("dob");
const occupation = document.getElementById("occupation");
const work = document.getElementById("work");
const gender = document.getElementById("gender");
const amount = document.getElementById("amount");
const loanSecurity = document.getElementById("loanSecurity");
const fbSecurity = document.getElementById("fbSecurity");

//submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

//error function
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.className = "form-control error";
  small.textContent = message;
}

//success function
function setSuccessFor(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check inputs function
function checkInputs() {
  const surNameValue = surName.value.trim();
  const givenNameValue = givenName.value.trim();
  const ninValue = nin.value.trim();
  const dobValue = dob.value.trim();
  const occupationValue = occupation.value.trim();
  const workValue = work.value.trim();
  const genderValue = gender.value.trim();
  const amountValue = amount.value.trim();
  const securityValue = loanSecurity.value.trim();
  const fbValue = fbSecurity.value.trim();

  //sur name
  if (surNameValue === "") {
    setErrorFor(surName, "surname cannot be blank");
  } else if (!isChar255(surNameValue)) {
    setErrorFor(surName, "invalid number of characters");
  } else {
    setSuccessFor(surName);
  }

  //given name
  if (givenNameValue === "") {
    setErrorFor(givenName, "given name cannot be blank");
  } else if (!isChar255(givenNameValue)) {
    setErrorFor(givenName, "invalid number of characters");
  } else {
    setSuccessFor(givenName);
  }

  //nin

  //date of birth

  //occupation
  if (occupationValue === "") {
    setErrorFor(occupation, "occupation cannot be blank");
  } else if (!isChar255(occupationValue)) {
    setErrorFor(occupation, "invalid number of characters");
  } else {
    setSuccessFor(occupation);
  }

  //work value
  if (workValue === "") {
    setErrorFor(work, "place of work cannot be blank");
  } else if (!isChar255(workValue)) {
    setErrorFor(work, "invalid number of characters");
  } else {
    setSuccessFor(work);
  }

  //gender
  if (genderValue === "") {
    setErrorFor(gender, "please select your gender");
  } else {
    setSuccessFor(gender);
  }

  //security
  if (securityValue === "") {
    setErrorFor(loanSecurity, "loan security cannot be blank");
  } else if (!isChar255(securityValue)) {
    setErrorFor(loanSecurity, "invalid number of characters");
  } else {
    setSuccessFor(loanSecurity);
  }

  //loan amount
  if (amountValue === "") {
    setErrorFor(amount, "loan amount cannot be blank");
  } else if (amountValue < 500000) {
    setErrorFor(amount, "amount should be more than 500000");
  } else if (amountValue > 50000000) {
    setErrorFor(amount, "disbursable amount exceeded");
  } else {
    setSuccessFor(amount);
  }

  //fall back security
  if (fbValue === "") {
    setErrorFor(fbSecurity, "fall back security cannot be blank");
  } else if (!isChar255(fbValue)) {
    setErrorFor(fbSecurity, "invalid number of characters");
  } else {
    setSuccessFor(fbSecurity);
  }
}

//255 characters username
function isChar255(user) {
  return /^.{2,255}[a-zA-Z]+$/.test(user);
}

//nin regex
function isNin(NIN) {
  return /^[C][F|M]\d{7}[A-HJ-NP-Z]{2}\d{1}[A-HJ-NP-Z]{2}$/.test(NIN);
}

//date of birth regex
function isDate(dat) {
  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(dat);
}

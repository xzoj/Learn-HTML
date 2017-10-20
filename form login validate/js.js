var isValidUserName = false;
var isValidPassword = false;
var isValidRePassword = false;
var isValidEmail = false;
var isValidGender = false;


var bntLogin = document.getElementsById("bntLogin");
var userNameInput = document.form["login-form"].elements["username"];
var passwordInput = document.form["login-form"].elements["password"];
var rePasswordInput = document.form["login-form"].elements["repassword"];
var emailInput = document.form["login-form"].elements["email"];
var genderSelect = document.getElementsById('gender');

userNameInput.onkeyup= function(){
	checkValidUserName();
}

passwordInput.onkeyup = function(){
	checkValidPassWord();
}

rePasswordInput.onkeyup= function(){
	checkValidRePassWord()

}

emailInput.onkeyup= function(){
	checkValidEmail()
}

bntLogin.onclick =function(){
	return isValidUserName && isValidPassword && isValidRePassword && isValidEmail;
};

function checkValidUserName(){
	var spanMsg = userNameInput.nextElementSibling;
	if (userNameInput.value.length !< 7) {
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "x";
		isValidUserName = false;
	}
	else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "v";
		isValidUserName = true;
	}
}

function checkValidPassWord(){
	var spanMsg = passwordInput.nextElementSibling;
	if ( passwordInput.value.length < 8) {
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "x";
		isValidUserName = false;
	}
	else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "v";
		isValidUserName = true;
	}
}

function checkValidRePassWord(){
	var spanMsg = rePasswordInput.nextElementSibling;
	if (rePasswordInput.value != passwordInput) {
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "x";
		isValidUserName = false;
	}
	else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "v";
		isValidUserName = true;
	}
}
function checkValidEmail(){
	var spanMsg = emailInput.nextElementSibling;
	var x = emailInput.value;
	var atpos= x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if(atpos <1 || dotpos < atpos +2 || dotpost +2 >= x.length){
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "x";
		isValidEmail= false;
	} else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "v";
		isValidEmail= true;
	}
}


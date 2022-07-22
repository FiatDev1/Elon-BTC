function Login() {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  LoginRequest(email, password);
}

function checkPasswordLength(){
  let psw = document.getElementById('rgstpsw');

  if(psw.value.length < 8){
    showAlert("alert-caution", "Password must not be less than 8 characthers");
  }
}

function validatePassword(){
  let psw = document.getElementById('rgstpsw');
  let confirmpassword = document.getElementById('confirmpsw');

  if (psw.value != confirmpassword.value) {
    showAlert('alert-caution', "The passwords you provided do not match!");
  }
}
function SignUp() {
  let fullname = document.getElementById('fullname');
  let email = document.getElementById('email');
  let psw = document.getElementById('rgstpsw');
  let confirmpassword = document.getElementById('confirmpsw');
  let alert = document.getElementById('alert');

  if (psw.value.length >= 8) {
    if (psw.value != confirmpassword.value) {
      showAlert('alert-danger', "The passwords you provided do not match!");
    } else {
      SignupRequest(fullname.value, email.value, psw.value)
    }
  } else {
    alert.innerHTML = "<i class='fa fa-info-circle'></i> Password must not be less than 8 characters"
    alert.style.display = 'block'
    alert.classList.add('alert-danger')
  }
}

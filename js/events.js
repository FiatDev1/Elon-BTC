function Login() {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  LoginRequest(email, password);
}

function SignUp() {
  let fullname = document.getElementById('fullname')
  let email = document.getElementById('email');
  let psw = document.getElementById('rgstpsw')
  let confirmpassword = document.getElementById('confirmpsw')
  let alert = document.getElementById('alert')

  SignupRequest(fullname.value, email.value, psw.value)

  console.log(psw.length);
  if (psw.length < 8) {
    if (psw.value != confirmpassword.value) {
      SignupRequest(fullname, email, psw)
    } else {
      alert.innerHTML =
        "<i class='fa fa-info-circle'></i> Password does not match!"
      alert.style.display = 'block'
      alert.classList.add('alert-danger')
    }
  } else {
    alert.innerHTML = "<i class='fa fa-info-circle'></i> Password must not be less than 8 characters"
    alert.style.display = 'block'
    alert.classList.add('alert-danger')
  }
}

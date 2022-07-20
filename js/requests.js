function LoginRequest(email, password) {
  fetch('./api/login.php?email=' + email + '&password=' + password, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-type': 'application/json' },
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    if(!data.status){
      showalert('alert-danger', data.message);
    }else{
      if (createSession(data)) {
        redirect('./validate.html')
      }
    }
    
  })
}

function createSession(data){
  sessionStorage.setItem('id', data.id);
  sessionStorage.setItem('fullname', data.email);
  sessionStorage.setItem('id', data.id);
  sessionStorage.setItem('id', data.id);
  sessionStorage.setItem('id', data.id);
  sessionStorage.setItem('id', data.id);

}

function showalert(type, message){
  let alert = document.getElementById('alert')
  alert.innerHTML = "<i class='fa fa-info-circle'></i>" + message;
  alert.style.display = 'block'
  if(type == "alert-danger"){
    alert.classList.add('alert-danger');
  }
}

function redirect(url) {
  let home_url = document.createElement('a')
  let container = document.getElementById('loginContainer')

  home_url.hidden = true
  home_url.src = url
  container.append(home_url)
  home_url.click()
}


function SignupRequest(fullname, email, password) {
  $.post(
    './api/createAccount.php',
    { fullname: fullname, email: email, password: password },
    (e) => {
      console.log(e)
      redirect('')
    },
  )
}


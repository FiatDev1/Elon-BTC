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
      if (
        localStorage.getItem('login_data') != null ||
        localStorage.getItem('login_data') != undefined
      ) {
        let logindata = JSON.parse(localStorage.getItem('login_data'))

        let home_url = document.createElement('a')
        let container = document.getElementById('loginContainer')
        if (logindata.id == data.id) {
          home_url.hidden = true
          home_url.src = '/dashboard.html'
          container.append(home_url)
          home_url.click()
        } else {
          logindata.append({
            id: data.id,
            fullname: data.fullname,
            email: data.email,
            created: data.created,
            modified: data.modified,
            status: data.status,
            state: data.state,
          })
          localStorage.setItem('login_data', JSON.stringify(logindata))
          console.log('Data truncated!')
        }
      } else {
        console.log(data)
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

function Login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    LoginRequest(email, password);
}
window.addEventListener("load", ()=>{
    let sidebar_usernames = [document.getElementById("side_bar_username"), document.getElementById("profile_username")];
    let sidebar_email = document.getElementById("side_bar_email");
    let refferal_link = document.getElementById("refferalLink");

    sidebar_usernames.forEach(e=>{
        e.innerText = sessionStorage.getItem("fullname");
    })

    if(sessionStorage.getItem("email").length > 15){
        let text = sessionStorage.getItem("email");
        sidebar_email.innerText = text.substring(0, 15) + "...";
    }else{
        sidebar_email.innerText = sessionStorage.getItem("email");
    }

    let referral_url = "http://localhost/ElonBTC/";

    refferal_link.innerText = referral_url + "referral?user=" + sessionStorage.getItem("email");

})

function CopyReferralLink(e){
    navigator.clipboard.writeText(e.innerText)
    alert("Link has been copied to clipboard!");
}
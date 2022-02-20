
var Loginform = document.getElementById("Loginform")
var signupform = document.getElementById("signupform")
var Indicator = document.getElementById("Indicator")

function Signup(){
     signupform.style.transform = "translateX(0px)";
     Loginform.style.transform = "translateX(0px)";
     Indicator.style.transform = "translateX(65px)"
};

function Login(){
     signupform.style.transform = "translateX(300px)";
     Loginform.style.transform = "translateX(300px)";
     Indicator.style.transform = "translateX(-60px)"
};
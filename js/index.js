 
function hover(st){
    document.querySelector(".hover-menu").textContent=st;
}

var menus =document.querySelectorAll('.menu-selct')
menus.forEach((menu)=>{
    menu.addEventListener("click",()=>{
        var mainSection = document.querySelector(".banner");
        mainSection.classList.toggle('menu-active');
        document.querySelector('.nav-bar').classList.toggle('active');
        if( mainSection.classList.contains('menu-active')){
            document.querySelector('.fas').classList.remove('fa-stream');
            document.querySelector('.fas').classList.add('fa-times');
        }else{
            document.querySelector('.fas').classList.remove('fa-times');
            document.querySelector('.fas').classList.add('fa-stream');
        }
    })
})
 


//  validation number
var nameValidate = document.getElementById("fullname");
 
function nameChk(){
    document.getElementById('name-alert').innerHTML="Full Name is Required"
    if(nameValidate.value.length > 3){
        document.getElementById('name-alert').innerHTML=" ";
    }
}


function chekEmail(){
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailCheck = document.getElementById('email').value;
    var emailAlert = document.getElementById('email-alert');
    if(emailCheck.match(pattern)){
        emailAlert.innerHTML=" ";
    }else{
        emailAlert.innerHTML="Invalid Email Id";

    }
}


function numberCheck(){
    var patern = /^\d{10}$/;
    var phoneNumber = document.getElementById('phone').value;
    var phoneAlert = document.getElementById('phone-alert');
    if(phoneNumber.match(patern)){
        phoneAlert.innerHTML=""
    }else{
        phoneAlert.innerHTML="Enter A valid Phone Number";
        
    }
}
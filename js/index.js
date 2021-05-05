 
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
function nameChek(){
var fullName = document.getElementById("fullname").value;
var nameAlert = document.getElementById('name-alert');

 var letters = /^[a-z][a-z\s]*$/;
if(fullName.length ==0){
 nameAlert.innerHTML="Full Name is Required";
}else{
  if(fullName.match(letters))
   {
     nameAlert.innerHTML=" ";
   }
 else
   {
    nameAlert.innerHTML="Enter String Only";
   } 
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

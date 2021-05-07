 
 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

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

 






// validation
const validated ={
    name:false,
    email:false,
    phone:false
}
 

 function nameChek(){
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("fullname").value;
    var expression = /^[a-zA-Z\s]*$/;
   
    if(name == ""){
        validated.name= false;
        nameAlert.innerHTML="*Required"
        
    }else if(name.match(expression)){
        nameAlert.innerHTML="";
        validated.name= true;
    }else{
        nameAlert.innerHTML =" Enter Charecters only"
        validated.name=false
    }

    }
    // email check
    function chekEmail(){
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var emailCheck = document.getElementById('email').value;
        var emailAlert = document.getElementById('email-alert');
        if(emailCheck == ""){
            validated.email= false;
            emailAlert.innerHTML ="*Required"
        }else if(emailCheck.match(pattern)){
            emailAlert.innerHTML="";
            validated.email= true;
        }else{
            emailAlert.innerHTML ="Invalid E-mail"
            validated.email=false
        }
    }
    
    function numberCheck(){
        var phnPattern = /^\d{10}$/;
        var phoneNumber = document.getElementById('phone').value;
        var phoneAlert = document.getElementById('phone-alert');
        if(phoneNumber == ""){
            validated.phone= false;
            phoneAlert.innerHTML ="*Required"
        }else if(phoneNumber.match(phnPattern)){
            phoneAlert.innerHTML="";
            validated.phone= true;
        }else{
            phoneAlert.innerHTML ="Invalid Phone Number"
            validated.phone=false
            
        }
    }
   
    function myValidation(){
      
        if(validated.name && validated.phone && validated.email){
            return true;
        }else{
           alert("invalid form Details");
            return false;
        }
    }

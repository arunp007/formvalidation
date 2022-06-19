function validation(){
    var status = 1
    var user=document.getElementById('username')
    var email=document.getElementById('emailid')
    var phone=document.getElementById('phonenumber')
    var pass=document.getElementById('password')
    var address=document.getElementById('address')
    var dob1=document.getElementById('dateofbirth1')
    var dob2=document.getElementById('dateofbirth2')
    var dob3=document.getElementById('dateofbirth3')
    var edu1=document.getElementById('inlineFormCheck1')
    var edu2=document.getElementById('inlineFormCheck2')
    var edu3=document.getElementById('inlineFormCheck3')
    var edu4=document.getElementById('inlineFormCheck4')
    var gen1=document.getElementById('customRadioInline1')
    var gen2=document.getElementById('customRadioInline2')
    var gen3=document.getElementById('customRadioInline3')
   
   
    
    if(user.value==""){ 
        document.getElementById('username').style.borderColor="red"
        document.getElementById('user_error').innerHTML="Enter Your Username"
        document.getElementById('user_error').style.color="red"
        document.getElementById('user_error').style.display="block"
        status=1
    }
    else{
        document.getElementById('username').style.borderColor="black"
        document.getElementById('user_error').style.display="none"
        status=0
    }

    if(email.value==""){ 
        document.getElementById('emailid').style.borderColor="red"
        document.getElementById('email_error').innerHTML="Enter Your Email Id"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
        status=1
    }
    else{
        document.getElementById('emailid').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
        status=0
    }
    
    if(phone.value==""){
      document.getElementById('phonenumber').style.borderColor="red"
      document.getElementById('phone_error').innerHTML="Enter Your Phone Number"
      document.getElementById('phone_error').style.color="red"
      document.getElementById('phone_error').style.display="block"
      status=1
    }

    else{
      document.getElementById('phonenumber').style.borderColor="black"
      document.getElementById('phone_error').style.display="none"
      status=0
    }

    if(pass.value==""){
      document.getElementById('password').style.borderColor="red"
      document.getElementById('password_error').innerHTML="Enter Your Password"
      document.getElementById('password_error').style.color="red"
      document.getElementById('password_error').style.display="block"
      status=1
    }

    else{
      document.getElementById('password').style.borderColor="black"
      document.getElementById('password_error').style.display="none"
      status=0
    }

    if(address.value==""){
      document.getElementById('address').style.borderColor="red"
      document.getElementById('address_error').innerHTML="Enter Your Address"
      document.getElementById('address_error').style.color="red"
      document.getElementById('address_error').style.display="block"
      status=1
    }

    else{
      document.getElementById('address').style.borderColor="black"
      document.getElementById('address_error').style.display="none"
      status=0
    }

    if(dob1.value==""){
      document.getElementById('dateofbirth1').style.borderColor="red"
      document.getElementById('dob_error1').innerHTML="Enter Date"
      document.getElementById('dob_error1').style.color="red"
      document.getElementById('dob_error1').style.display="block"
      status=1
    }

    else{
      document.getElementById('dateofbirth1').style.borderColor="black"
      document.getElementById('dob_error1').style.display="none"
      status=0
    }

    if(dob2.value==""){
      document.getElementById('dateofbirth2').style.borderColor="red"
      document.getElementById('dob_error2').innerHTML="Enter Month"
      document.getElementById('dob_error2').style.color="red"
      document.getElementById('dob_error2').style.display="block"
      status=1
    }

    else{
      document.getElementById('dateofbirth2').style.borderColor="black"
      document.getElementById('dob_error2').style.display="none"
      status=0
    }

    if(dob3.value==""){
      document.getElementById('dateofbirth3').style.borderColor="red"
      document.getElementById('dob_error3').innerHTML="Enter Year"
      document.getElementById('dob_error3').style.color="red"
      document.getElementById('dob_error3').style.display="block"
      status=1
    }

    else{
      document.getElementById('dateofbirth3').style.borderColor="black"
      document.getElementById('dob_error3').style.display="none"
      status=0
    }

    if(status==0){
        return false;
    }
    else if(status==1){
        return true;
    }
}

function uservalid(){
   user=document.getElementById('username').value
  if (user.length<8)
    {
      document.getElementById('user_error').innerHTML="** Username Must Be 8 Characters"
      document.getElementById('user_error').style.color="red"
      
    }
  else if(user.length<=8){
    document.getElementById('user_error').innerHTML="** You Are Enter A Perfect Username"
    document.getElementById('user_error').style.color="green"
  }

  if(user.length>10){
    document.getElementById('user_error').innerHTML="**Username Must Be 8 Characters"
    document.getElementById('user_error').style.color="red"
  }
    
}

function passvalid(){
  var pass=document.getElementById('password').value

  if(pass.length<=6){
    document.getElementById('password_error').innerHTML="** Password Must Be 6 Characters"
    document.getElementById('password_error').style.color="red"
  }

  if(pass=="@#$%&*"){
    document.getElementById('password_error').innerHTML="** Your Password Is A Strong Password" 
    document.getElementById('password_error').style.color="green" 
  }

  if(pass=="Aa25Drj@2"){
    document.getElementById('password_error').innerHTML="** Your Password Is A Strong Password" 
    document.getElementById('password_error').style.color="green" 
  }


  if(pass.length>10){
    document.getElementById('password_error').innerHTML="** Password Must Be 6 Characters"
    document.getElementById('password_error').style.color="red"
  }

}
  
function emailvalid(){
  email=document.getElementById('emailid').value

  if(email.length<=5){
    document.getElementById('email_error').innerHTML="** Email Must Have @gmail.com"
    document.getElementById('email_error').style.color="red"
    
  }

  if(email.value=Number){
    document.getElementById('email_error').innerHTML="** Please Enter A Valid Email Id"
    document.getElementById('email_error').style.color="red"
  }
}

function phonevalid(){
  phone=document.getElementById('phonenumber').value

  if(phone.length<5){
    document.getElementById('phone_error').innerHTML="Phone Number Must Be 10 Digits"
    document.getElementById('phone_error').style.color="red"
  }

  if(phone.length>=11){
    document.getElementById('phone_error').innerHTML="Phone Number Must Be 10 Digits"
    document.getElementById('phone_error').style.color="red"
  }
}
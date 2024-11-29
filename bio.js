function emailIDvalidate(){
    txtEmail= document.getElementById("txtEmail");
    var dropDown = document.getElementById("dropDown");
    var reg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if(reg.test(txtEmail.value)==false){
        alert("invalid email");
        return false;
    }
}
function disperror(){
 var txtEmail=document.getElementById("txtEmail");
  txtEmail.style.backgroundColor="pink";
    
}
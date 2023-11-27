let emailLast="@gmail.com";

document.querySelector("button").addEventListener("click",function(){
    let name1=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    if(name1===""){
        alert("Name is empty.");
    }
    let emailSlice=email.slice(email.length-10,email.length+2);
    if(emailSlice!=emailLast){
        alert("Email not valid");
    }
});

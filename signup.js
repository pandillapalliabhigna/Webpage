func=()=>
{
var pw=document.getElementById("pwd").value;
var num=/\d/.test(pw);
var spec=/[!@#$%^&*]/.test(pw);
var min=pw.length >=8;
var cpwd=document.getElementById("cpwd").value;
if(!num && !spec && !min){
    document.getElementById("kar").textContent=("password must contain atleast one number,one special character and be atleast 8 characters long.");
return false;
}
if(!min){
    document.getElementById("kar").textContent=("Password must be atleast 8 characters long."); 
    return false;
}
if(pw!==cpwd)
{
document.getElementById("kar").textContent=("Please enter same Password");
return false;
}
document.getElementById("kar").textContent=("Password is saved");
window.open("./suc sign.html","_blank");
}
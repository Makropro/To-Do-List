var loginSubmit = document.getElementById('login-submit');
var startButton=document.getElementById('starter');

console.log(startButton);

document.getElementById('memori').addEventListener('click', function(){
    window.location.href='file:///C:/Users/User/Desktop/Memori/memori.html#';
    
    },true);

document.getElementById('starter').addEventListener('click', function(){
    
loginSubmit.removeAttribute("hidden");
document.getElementById("userName").removeAttribute("hidden");
document.getElementById("password").removeAttribute("hidden");
startButton.hidden=true;
document.getElementById("memori").hidden=true;
document.getElementById('picture').style.maxWidth="800%";
document.getElementById('picture').style.marginRight=105;
document.getElementById('picture').style.marginTop=205;
document.getElementById('picture').style.maxHeight="380%";
document.getElementById('picture').style.top=60;
document.getElementById('picture').style.left=25;

},true);

loginSubmit.addEventListener('click', event => { event.preventDefault();
 var userName = document.getElementById('userName'); 
 var password = document.getElementById('password'); 
 var storedName = localStorage.getItem('userName');
 var lozinka=localStorage.getItem('Password')

 if (userName.value !== '' && password.value !==null && password.value.length>3) { 
     localStorage.setItem('userName', userName.value);
     localStorage.setItem('Password',password.value);
  console.log(window.location.origin); 

  
  alert('You are loged in.'); window.location.href = 'ToDo.html';
  
 } 
  else if (userName.value == ''|| password.value==null || password.value.length<3) 
  { alert('Unesi barem nesto '); }});
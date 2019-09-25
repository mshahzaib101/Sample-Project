
  var config = {
    apiKey: "AIzaSyA9dfs_lR82kfVivTLqQf2mhZdnvjxf7lE",
    authDomain: "dua-app-cfc35.firebaseapp.com",
    databaseURL: "https://dua-app-cfc35.firebaseio.com",

  };
  firebase.initializeApp(config);
var emailInput=document.getElementById('getemail');
var passInput=document.getElementById('getpass');
database=firebase.database().ref('/');
auth=firebase.auth();

function signin(){
  var user={
    email:emailInput.value,
    password:passInput.value
  };
    auth.signInWithEmailAndPassword(user.email,user.password).catch(function(error){
    document.getElementById('Error').innerHTML=" <div class='alert alert-success Profile' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'>  <span aria-hidden='true'>&times;</span>  </button> <h4 class='alert-heading'>Error</h4> <hr>  <p class='mb-0'>"+error.message+ '</p></div>'  ;


}).then(function(usr){
user.name=usr.displayName;

var currentuser=JSON.stringify(user);
localStorage.setItem('CurrentUser',currentuser);
 emailInput.value='';
  passInput.value='';
location='Home.html';
});}


function sigup(){
  location='signup.html';
}






 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9dfs_lR82kfVivTLqQf2mhZdnvjxf7lE",
    authDomain: "dua-app-cfc35.firebaseapp.com",
    databaseURL: "https://dua-app-cfc35.firebaseio.com",
  };
  firebase.initializeApp(config);
database=firebase.database().ref('/');
auth=firebase.auth();
var sender=document.getElementById('sender');
var duatxt=document.getElementById('duatxt');
var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var Email=document.getElementById('email');
var number=document.getElementById('number');
var age=document.getElementById('age');
var Usrname=document.getElementById('Username');

var Allusers=localStorage.getItem('Users');
var CurrentUser=localStorage.getItem('CurrentUser');
Allusers=JSON.parse(Allusers);
CurrentUser=JSON.parse(CurrentUser);
console.log(Allusers);
console.log(CurrentUser.email);
for(i=0;i<Allusers.length;i++){
if(Allusers[i].email===CurrentUser.email){
 Usrname.innerHTML=Allusers[i].FirstName+' '+Allusers[i].LastName;
fname.innerHTML=Allusers[i].FirstName;
lname.innerHTML=Allusers[i].LastName;
Email.innerHTML=Allusers[i].email;
number.innerHTML=Allusers[i].Number;
age.innerHTML=Allusers[i].Age;
}
}

function submitpost(){
var post={
    Sender:sender.value,
    Dua:duatxt.value
};
sender.value='';
duatxt.value='';
auth.onAuthStateChanged(function(user) {
  if (user) {
database.child('Post').push(post);
  } else {
    // No user is signed in.
  }
});
}
function Logout(){
localStorage.removeItem('CurrentUser');
location.assign('index.html');
}


function Feeds(){
    location.assign("Allduas.html");
}
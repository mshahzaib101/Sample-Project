const auth = firebase.auth();
var InputEmailSignUp;
var InputPasswordSignUp;
var InputUserNameSignUp;
var InputEmailLogin;
var InputPasswordLogin;
// function signUp() {
//     InputUserNameSignUp = document.getElementById("InputUserNameSignUp");
//     InputEmailSignUp = document.getElementById("InputEmailSignUp");
//     InputPasswordSignUp = document.getElementById("InputPasswordSignUp");
    
    

//  var submitbtn = document.getElementById("submitbtn");
// // username
// var fakeUsername = true;
// if (InputUserNameSignUp.value.length === 0) {

//     var fakeUsername = false;
// }
//     if (fakeUsername === false) {
//     InputUserNameSignUp.value = "Please enter your name";
//     InputUserNameSignUp.style.color = "red";
//     return false;
//     }
    
// // firebase auth create user
// var email = InputEmailSignUp.value;
// var  password = InputPasswordSignUp.value;
// var promise = firebase.auth().createUserWithEmailAndPassword(email, password);
// promise.catch(e => console.log(e.message)); 
// // (function(error) {
// //   // Handle Errors here.
// //   var errorCode = error.code;
// //   var errorMessage = error.message;
// //   // ...
// //   console.log(errorCode);
// //   console.log(errorMessage);
// //   console.log(error);
// // });



// // firebase auth





//      console.log(InputEmailSignUp.value);
//     console.log(InputPasswordSignUp.value);
   
//  console.log(InputUserNameSignUp.value);
//  $('#myModal').modal('hide');

// //  copy email password to login

// InputEmailLogin = document.getElementById("InputEmailLogin");
// InputPasswordLogin = document.getElementById("InputPasswordLogin");

// InputEmailLogin.value = InputEmailSignUp.value;
// InputPasswordLogin.value = InputPasswordSignUp.value;
// }


// username

//  submitbtn.setAttribute("data-dismiss", "modal")










// console.log(auth);



function signUp() {
    InputUserNameSignUp = document.getElementById("InputUserNameSignUp");
    InputEmailSignUp = document.getElementById("InputEmailSignUp");
    InputPasswordSignUp = document.getElementById("InputPasswordSignUp");

    var email = InputEmailSignUp.value;
var  password = InputPasswordSignUp.value;
var promise = firebase.auth().createUserWithEmailAndPassword(email, password);
promise.catch(e => console.log(e.message));

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    }
    else {
        console.log("not logged in");
    }
})}
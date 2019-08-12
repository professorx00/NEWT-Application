var firebaseConfig = {
  apiKey: "AIzaSyDVpY3OhYYA8xAK3fti97EzGnAqKcgoVC4",
  authDomain: "cbc-nutrition.firebaseapp.com",
  databaseURL: "https://cbc-nutrition.firebaseio.com",
  projectId: "cbc-nutrition",
  storageBucket: "",
  messagingSenderId: "642726904018",
  appId: "1:642726904018:web:aeefcac3e06e052e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const userLogin = $("#loginForm");
const emailInput = $("#email");
const passInput = $("#password");
const btnLogIn = $("#btnSubmit");
const btnCreate = $("#createNew");
const btnLogOut = $("#logout");
const forgotPass = $("#forgotPass");
const error = $("#error");

btnLogIn.on("click", e => {
  error.addClass("hide")
  e.preventDefault();

  console.log("Signing in User")

  const email = emailInput.val().trim();
  const password = passInput.val().trim();
  const auth = firebase.auth()
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e => {
    error.text(e.message);
    error.removeClass("hide");
  });

});

btnCreate.on("click", e => {
  e.preventDefault();

  console.log("creating User")
  //TODO: Check 4 valid email address and Password
  const email = emailInput.val().trim();
  const password = passInput.val().trim();
  const auth = firebase.auth()
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(e => {
    error.text(e.message);
    error.removeClass("hide");
  });
});

btnLogOut.on("click", e => {
  console.log("Signing Out User")
  firebase.auth().signOut();
});

validEmail = true;

forgotPass.on("click", e => {
  e.preventDefault();
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  console.log("forgot Pass")
  userLogin.addClass("hide");
  $("#title").text("Reset Your Password");
  $("#passwordRest").removeClass("hide");
  $("#passSend").on("click", e => {
    e.preventDefault();
    let resetemail = $("#emailPass").val().trim();
    let resetPromise = firebase.auth().sendPasswordResetEmail(resetemail)
    resetPromise.catch(e => {
      console.log("catching error of password reset")
      console.log(e.code)
      if (e.code == "auth/user-not-found") {
        console.log("error not vaild email")
        error.text("Please enter valid email address")
        error.removeClass("hide")
        validEmail = false;
      }
      else{
        console.log(e.message)
      }
    }).then(e=>{
      if(validEmail){
        $('#myModal').modal('hide')
        console.log("Maybe she loves me")
        error.text("Please check your email for the reset password email.")
        error.removeClass("hide")
        $("#passwordRest").addClass("hide");
        userLogin.removeClass("hide")
      }
      else{
        validEmail =false;
        return false;
      }

      validEmail=true;
    })
  })
})

function StayLogIn(){
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
}

// firebase.auth().onAuthStateChanged(firebaseUser => {
  
//   if (firebaseUser) {
//     btnLogOut.removeClass("hide");
//     btnLogIn.addClass("hide");
//     btnCreate.addClass("hide")
//     error.addClass("hide");
//     StayLogIn();
//     window.location.href ="./trains.html"
//   }
//   else {
//     btnLogOut.addClass("hide");
//     btnLogIn.removeClass("hide");
//     btnCreate.removeClass("hide");
//     error.addClass("hide");
//     console.log("Logged Out");
//   }
// });
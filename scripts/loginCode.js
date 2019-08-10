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

const userLogin = $("#loginPage");
const emailInput = $("#email");
const passInput = $("#password");
const btnLogIn = $("#login");
const btnCreateUser = $("#create");
const forgotPass = $("#forgot");
const error = $("#error");

//button Login

btnLogIn.on("click", e => {
    // error.addClass("hide")
    e.preventDefault();
    console.log("Signing in User")
    const email = emailInput.val().trim();
    const password = passInput.val().trim();
    const auth = firebase.auth()
    const promise = auth.signInWithEmailAndPassword(email, password);
    console.log(promise)
    promise.catch(e => {
      error.text(e.message);
      error.removeClass("hide");
    });
  });
  
  btnCreateUser.on("click", e => {
    e.preventDefault();
    console.log("creating User")
    //TODO: Check 4 valid email address and Password
    const email = emailInput.val().trim();
    console.log(email)
    const password = passInput.val().trim();
    const auth = firebase.auth()
    const promise = auth.createUserWithEmailAndPassword(email, password);
    console.log(promise)
    promise.catch(e => {
      error.text(e.message);
      error.removeClass("hide");
    });
  });
  
//   btnLogOut.on("click", e => {
//     console.log("Signing Out User")
//     firebase.auth().signOut();
//   });
  
  forgotPass.on("click", e => {
    e.preventDefault();
    console.log("forgot Pass")
    userLogin.addClass("hide");
    $("#title").text("Reset Your Password");
    $("#passwordRest").removeClass("hide");
    $("#passSend").on("click", e => {
      let resetemail = $("#email").val().trim();
      let resetPromise = firebase.auth().sendPasswordResetEmail(resetemail)
      resetPromise.catch(e => {
        console.log(e)
        console.log(e.code)
        if (e.code == "auth/user-not-found") {
          error.text("Please enter valid email address")
        }
        else{
          console.log(e.message)
        }
      }).then(()=>{
          error.text("Please check your email for the reset password email.")
          error.removeClass("hide")
          $("#passwordRest").addClass("hide");
        //   userLogin.removeClass("hide")
      });
    })
  })
  
//   function StayLogIn(){
//     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//     .then(function() {
//       return firebase.auth().signInWithEmailAndPassword(email, password);
//     })
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//     });
//   }
  
//   firebase.auth().onAuthStateChanged(firebaseUser => {
    
//     if (firebaseUser) {
//     //   btnLogOut.removeClass("hide");
//       btnLogIn.addClass("hide");
//       btnCreate.addClass("hide")
//       error.addClass("hide");
//       StayLogIn();
//       window.location.href ="./trains.html"
//     }
//     else {
//     //   btnLogOut.addClass("hide");
//       btnLogIn.removeClass("hide");
//       btnCreate.removeClass("hide");
//       error.addClass("hide");
//       console.log("Logged Out");
//     }
//   });
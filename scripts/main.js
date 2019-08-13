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


const mealBtn = $("#mealBtn");
const productBtn = $("#productBtn")

mealBtn.on("click",e=>{
    console.log("meal Plan Button Clicked")
    $("#foodFacts").addClass("hide");
    $("#productSearch").addClass("hide");
    $("#mealPlans").removeClass("hide");
});

productBtn.on("click",e=>{
    console.log("product Search Button Clicked")
    $("#foodFacts").addClass("hide");
    $("#productSearch").removeClass("hide");
    $("#mealPlans").addClass("hide");
});

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

firebase.auth().onAuthStateChanged(firebaseUser => {
  
    if (firebaseUser) {
      StayLogIn();
      $("#user").text(firebaseUser.email)
    }
    else {
      console.log("No User Login");
    }
  });

$("#logOut").on("click", e => {
        console.log("Signing Out User")
        firebase.auth().signOut();
        window.location.href ="./index.html"
      });
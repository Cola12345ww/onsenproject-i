

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsiJYA0mBsvqTuftMIYUDIvlHeDfkilsU",
  authDomain: "food21guns.firebaseapp.com",
  databaseURL: "https://food21guns.firebaseio.com",
  projectId: "food21guns",
  storageBucket: "food21guns.appspot.com",
  messagingSenderId: "876571733109",
  appId: "1:876571733109:web:60dba40002f4e070595c3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();


// ดูสถานะการ login
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    //var displayName = user.displayName;
    var email = user.email;
    console.log(email + "signed in");
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
  } else {
    console.log("sign out");
    // User is signed out.
    // ...
  }
});


document.addEventListener('init', function (event) {
  var page = event.target;

  console.log(page.id);


  if (page.id === 'homePage') {
    console.log("homePage");

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#carousel").empty();
    db.collection("ecommeded").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `
        <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUI}')">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>`

        $("#carousel").append(item);


      });
    });

  }

  if (page.id === 'Rest') {




    $("#rest1").empty();
    db.collection("home").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item1 = `
        <ons-list-item class="ziseimf" >
        <div class="left">
          <img class="list-item__thumbnail" style="background-image: url('${doc.data().url}')">
        </div>
        <div class="center">
          <span class="list-item__title" id="itname">
            <h2>${doc.data().name}</h2>
          </span><span class="list-item__subtitle">
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star-half" fixed-width="false"></ons-icon>
  
          </span>
        </div>
      </ons-list-item>`

        $("#rest1").append(item1);


      });
    });

  }
  if (page.id === 'Rest') {




    $("#rest2").empty();
    db.collection("home2").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item2 = `
        <ons-list-item class="ziseimf" >
        <div class="left">
          <img class="list-item__thumbnail" style="background-image: url('${doc.data().url}')">
        </div>
        <div class="center">
          <span class="list-item__title" id="itname">
            <h2>${doc.data().name}</h2>
          </span><span class="list-item__subtitle">
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star-half" fixed-width="false"></ons-icon>
  
          </span>
        </div>
      </ons-list-item>`

        $("#rest2").append(item2);


      });
    });

  }
  if (page.id === 'Rest') {




    $("#rest3").empty();
    db.collection("home3").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item3 = `
        <ons-list-item class="ziseimf" >
        <div class="left">
          <img class="list-item__thumbnail" style="background-image: url('${doc.data().url}')">
        </div>
        <div class="center">
          <span class="list-item__title" id="itname">
            <h2>${doc.data().name}</h2>
          </span><span class="list-item__subtitle">
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star-half" fixed-width="false"></ons-icon>
  
          </span>
        </div>
      </ons-list-item>`

        $("#rest3").append(item3);


      });
    });

  }
  if (page.id === 'Rest') {




    $("#rest4").empty();
    db.collection("home4").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item4 = `
        <ons-list-item class="ziseimf" >
        <div class="left">
          <img class="list-item__thumbnail" style="background-image: url('${doc.data().url}')">
        </div>
        <div class="center">
          <span class="list-item__title" id="itname">
            <h2>${doc.data().name}</h2>
          </span><span class="list-item__subtitle">
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star-half" fixed-width="false"></ons-icon>
  
          </span>
        </div>
      </ons-list-item>`

        $("#rest4").append(item4);


      });
    });

  }
  if (page.id === 'Rest') {




    $("#rest5").empty();
    db.collection("home5").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item5 = `
        <ons-list-item class="ziseimf" >
        <div class="left">
          <img class="list-item__thumbnail" style="background-image: url('${doc.data().url}')">
        </div>
        <div class="center">
          <span class="list-item__title" id="itname">
            <h2>${doc.data().name}</h2>
          </span><span class="list-item__subtitle">
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star" fixed-width="false"></ons-icon>
            <ons-icon icon="fa-star-half" fixed-width="false"></ons-icon>
  
          </span>
        </div>
      </ons-list-item>`

        $("#rest5").append(item5);


      });
    });

  }


  if (page.id === "homePage") {

    $("#Select1").click(function () {
      content.load('Rest.html')
    });
  }




  if (page.id === 'menurest') {
    var category = localStorage.getItem("id");
    console.log("categoryPage:" + category);



    $("#list").empty();
    db.collection("imgmenu").where("typ", "==", category).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          var item1 = `
        <div>
        <center>
        <h1>${doc.data().name}</h1>
        <div class= "idsd">
        <img class="item" style="background-image: url('${doc.data().url}')">
        </div>
        </center>                
       </div>


       
       <ons-list modifier="inset">
       <ons-list-header>Menu</ons-list-header>
       <div class="toolbar toolbar--material">
      
       <div class="toolbar__center ">
       ${doc.data().menu1}
       </div>
       <div class="toolbar__right toolbar--material__right">
         <span class="toolbar-button toolbar-button--material">
          
         </span>
         <span class="toolbar-button ">
        ฿50.<ons-icon  icon="fa-plus" ></ons-icon>
         </span>
       
       </div>
     </div>
     <div class="toolbar toolbar--material">
      
     <div class="toolbar__center ">
     ${doc.data().menu2}
     </div>
     <div class="toolbar__right toolbar--material__right">
       <span class="toolbar-button toolbar-button--material">
        
       </span>
       <span class="toolbar-button ">
      ฿50.<ons-icon  icon="fa-plus" ></ons-icon>
       </span>
     
     </div>
   </div>
     
         
      </ons-list> `

          $("#list").append(item1);
          console.log(doc.data().name);


        });
      });

  }

  if (page.id === "Rest") {

    $("#rest1").click(function () {
      localStorage.setItem("id", "sum");
      $("#content")[0].load("menurest.html");
    });
  }
  if (page.id === "Rest") {

    $("#rest2").click(function () {
      localStorage.setItem("id", "tes");
      $("#content")[0].load("menurest.html");
    });
  }


  if (page.id === "Rest") {

    $("#rest3").click(function () {
      localStorage.setItem("id", "cre");
      $("#content")[0].load("menurest.html");
    });
  }

  if (page.id === "Rest") {

    $("#rest4").click(function () {
      localStorage.setItem("id", "der");
      $("#content")[0].load("menurest.html");
    });
  }

  if (page.id === "Rest") {

    $("#rest5").click(function () {
      localStorage.setItem("id", "all");
      $("#content")[0].load("menurest.html");
    });
  }



  if (page.id === 'menuPage') {
    console.log("menuPage");


    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        $("#content")[0].load("login.html");
        $("#sidemenu")[0].close();
      }).catch(function (error) {
        // An error happened.
        console.log(error.message);
      });
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });


    $("#ordertotal").click(function () {
      $("#content")[0].load("order.html");
      $("#sidemenu")[0].close();
    });
  }
  if (page.id === 'logind') {
    console.log("loginPage");

    $("#signinbtn").click(function () {

      $("#login").click(function () {
        $("#content")[0].load("login.html");
        $("#sidemenu")[0].close();
      });

      var username = $("#username").val();
      var password = $("#password").val();

      firebase.auth().signInWithEmailAndPassword(username, password).then(function (result) {


        content.load('home.html')
      })



        .catch(function (error) {
          alert('username and password incorrect ');

          console.log(error.message);
        });

    })
  }



  if (page.id === "logind") {

    $("#gool").click(function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        content.load('home.html')
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    });
  }











  if (page.id === "logind") {

    $("#gister").click(function () {
      content.load('Register.html')
    });
  }
  if (page.id === "Register") {

    $("#Backlog").click(function () {
      content.load('login.html')
    });
  }
  if (page.id === "Register") {


    $("#sabmit").click(function () {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('the password is too weak');

        } else {
          alert(errorMessage)
        }
        console.log(error);
      })
    });



    $("#sabmit").click(function () {
      content.load('login.html')
    });
  }

  
  if (page.id === "homePage") {

    $("#Select").click(function () {
      content.load('Rest.html')
    });
  }

  if (page.id === "homePage") {

    $("#Select3").click(function () {
      content.load('Rest.html')
    });
  }
  if (page.id === "homePage") {

    $("#Select4").click(function () {
      content.load('Rest.html')
    });
  }
  if (page.id === "homePage") {

    $("#Select5").click(function () {
      content.load('Rest.html')
    });
  }









  if (page.id === "Rest") {

    $("#back1").click(function () {
      content.load('home.html')
    });
  }
  if (page.id === "menurest") {

    $("#back2").click(function () {
      content.load('Rest.html')
    });
  }

  if (page.id === "menurest") {

    $("#confirm").click(function () {
      content.load('order.html')
    });
  }
  if (page.id === "Order") {

    $("#Backhome1").click(function () {
      content.load('home.html')
    });
  }

  if (page.id === "logind") {

    $("#Backhomepage").click(function () {
      content.load('home.html')
    });
  }
});







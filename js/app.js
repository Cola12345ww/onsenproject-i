

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
    console.log("Rest");

   

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

 
 




  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");  
      $("#sidemenu")[0].close();   
    });

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $("#content")[0].load("login.html");  
        $("#sidemenu")[0].close();   
      }).catch(function(error) {
        // An error happened.
        console.log(error.message);
      });
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");  
      $("#sidemenu")[0].close();   
    });
  }
  if (page.id === "logind") {

    $("#gool").click(function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        content.load('home.html')
      }).catch(function(error) {
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

    $("#Register").click(function () {
      content.load('Register.html')
    });
  }
  if (page.id === "con") {

    $("#sabmit").click(function () {
      content.load('login.html')
    });
  }
  
  if (page.id === 'homePage') {
    page.querySelector('#Select').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT' }});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  if (page.id === 'homePage') {
    page.querySelector('#Select1').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT'}});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }


  if (page.id === 'homePage') {
    page.querySelector('#Select3').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT'}});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  if (page.id === 'homePage') {
    page.querySelector('#Select4').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT'}});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  if (page.id === 'homePage') {
    page.querySelector('#Select5').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT'}});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }


  if (page.id === 'homePage') {
    page.querySelector('#Select5').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT'}});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  if (page.id === 'homePage') {
    page.querySelector('#Select6').onclick = function() {
      document.querySelector('#myNavigator').pushPage('Rest.html', {data: {title: 'RESTAURANT'}});
    }; 
  } else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }


  if (page.id === 'Rest') {
    page.querySelector('#rest1').onclick = function() {
      document.querySelector('#myNavigator').pushPage('menurest.html');
    }; 
  }  else if (page.id === 'Rest') {
    page.querySelector('ons-toolbar .center');
  }

 

  
  if (page.id === "menurest") {

    $("#back2").click(function () {
      content.load('Rest.html')
    });
  }

  if (page.id === "menurest") {

    $("#confirm").click(function () {
      content.load('Order.html')
    });
  }
  if (page.id === "Order") {

    $("#back3").click(function () {
      content.load('Rest.html')
    });
  }
});


var login = function () {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === '111' && password === '222') {
    content.load('tabbar.html')
  } else {
    ons.notification.alert('Incorrect username or password.');
  }



};

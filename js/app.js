document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
    }

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#homebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
        });
    }

    
    if (page.id === "Regis") {
   
        $("#Register").click(function () {
            content.load('Register.html')
        });
    }
    if (page.id === "con") {
   
        $("#sabmit").click(function () {
            content.load('login.html')
        });
    }
    if (page.id === "tabbar") {
   
        $("#Select").click(function () {
            content.load('Rest.html')
        });
    }

    if (page.id === "tabbar") {
   
        $("#Select1").click(function () {
            content.load('Rest.html')
        });
    }

    if (page.id === "tabbar") {
   
        $("#Select3").click(function () {
            content.load('Rest.html')
        });
    }

    if (page.id === "tabbar") {
   
        $("#Select4").click(function () {
            content.load('Rest.html')
        });
    }
    if (page.id === "tabbar") {
   
        $("#Select5").click(function () {
            content.load('Rest.html')
        });
    }
    if (page.id === "tabbar") {
   
        $("#Select6").click(function () {
            content.load('Rest.html')
        });
    }

    if (page.id === "Rest") {
   
        $("#back").click(function () {
            content.load('tabbar.html')
        });
    }
    if (page.id === "Rest") {
   
        $("#rest").click(function () {
            content.load('menurest.html')
        });
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



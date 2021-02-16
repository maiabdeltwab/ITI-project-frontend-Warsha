if (sessionStorage.username) {
    var username = sessionStorage.username;
    $('#login').attr("href", "/public/profile.html")
    $('#user-login').text(username);
}
///////////////////////////////////////////////////////////
let collapse = document.querySelector(".collaps--sign");
let collapseMenu = document.querySelector(".collaps--menu");
var emergancyButton = document.querySelector(".emergancy--btn");
var popup = document.querySelector(".display");
var submit = document.querySelector("#submit");
var cross = document.querySelector("#cross");


var firebaseConfig = {
    apiKey: "AIzaSyAC0G0nvAK7KbKx2qgkyGJ16jORzlzyE-Y",
    authDomain: "carworkshop-7ec37.firebaseapp.com",
    databaseURL: "https://carworkshop-7ec37-default-rtdb.firebaseio.com",
    projectId: "carworkshop-7ec37",
    storageBucket: "carworkshop-7ec37.appspot.com",
    messagingSenderId: "640153744311",
    appId: "1:640153744311:web:27c8a4e0fe189c40136e32",
    measurementId: "G-641RNWK139",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

collapse.addEventListener("click", () => {
    console.log(collapseMenu.classList);
    collapseMenu.classList.toggle("appered");
});

window.onscroll = function navObacity(event) {
    var element = document.documentElement.scrollTop;
    document.querySelector(".header--main").onmouseover = function() {
        document.querySelector(".header--main").style.opacity = "1";
    };
    document.querySelector(".header--main").onmouseout = function() {
        document.querySelector(".header--main").style.opacity = "0.7";
    };

    if (element > 100) {
        document.querySelector(".header--main").style.opacity = "0.7";
    } else {
        document.querySelector(".header--main").style.opacity = "1";
    }
};

$(".card--slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

function removeIcon(input) {
    var icon = input.previousSibling.previousElementSibling; //get icon element
    icon.style.display = "none";
}

function resetIcon(input) {
    var icon = input.previousSibling.previousElementSibling;
    icon.style.display = "inline";
}

emergancyButton.onclick = function popUp() {
    popup.style.display = "block";
};
cross.onclick = function remove() {
    popup.style.display = "none";
};
submit.onclick = function remove() {
    popup.style.display = "none";
};

$("input").focus(function() {
    $(this).prev().fadeOut();
});
//get  back icon when blur
$("input").blur(function() {
    $(this).prev().fadeIn();
    validate(this);
});
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $("#alert-error").hide();
});

function validate(input) {
    var pattern = new RegExp(input.pattern);
    if (input.id == "WorkShopName") pattern = /^([a-z0-9]|[-._](?![-._])){3,}$/;
    else if (input.id == "Fristname" || input.id == "Lastname")
        pattern = /^[A-Za-z -]{3,}$/;
    else if (input.id == "workShopNumber")
        pattern = /^(012||011||015||010)\d{8}$/;
    else if (input.id == "password1")
        pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    else if (input.id == "password2") pattern = new RegExp($("#password1").val());

    if (!pattern.test(input.value.trim()) ||
        (input.id == "password2" && input.value == "")
    ) {
        $(input).css("borderColor", "#e43b3b");
        $(input).next().show();
        $(input).next().removeClass("fa-check");
        $(input).next().addClass("fa-times");
        $(input).next().css("color", "#e43b3b");

        //custom tooltip error messages
        if (input.id == "WorkShopName")
            $(input)
            .next()
            .text(
                "Enter 3 or more charcter (no special chars or space and start with letter)"
            );
        else if (input.id == "Firstname")
            $(input)
            .next()
            .text("Enter 3 or more letters (special characters not allowed");
        else if (input.id == "Lastname") {
            $(input)
                .next()
                .text("Enter 3 or more letters (special characters not allowed");
        } else if (input.id == "workShopNumber")
            $(input).next().text("Inavlid Phone number");
        else if (input.id == "password1")
            $(input)
            .next()
            .text(
                "Password should be at least 8 characters contains numbers, upper and lowercase letters"
            );
        else if (input.id == "password2")
            if (input.value == "") $(input).next().text("Enter password");
            else $(input).next().text("password not matched");

        return false;
    } else {
        $(input).css("borderColor", "#3bcc60");
        $(input).next().show();
        $(input).next().removeClass("fa-times");
        $(input).next().addClass("fa-check");
        $(input).next().css("color", "#3dcc60");
        $(input).next().text("");
        $(input).next().attr("data-original-title", "looks good!");
        return true;
    }
}

var wsfristname;
var wslastname;
var wsworkshopname;
var wsWorkshopNumbre;
var wspassword;
var wsgoverment;
var wscity;
var wsadressindetails;

function btnAdd() {
    wsfristname = document.getElementById("Fristname").value;
    wslastname = document.getElementById("Lastname").value;
    wsworkshopname = document.getElementById("WorkShopName").value;
    wsWorkshopNumbre = document.getElementById("workShopNumber").value;
    wspassword = document.getElementById("password1").value;
    wsgoverment = document.getElementById("Goverment").value;
    wscity = document.getElementById("city").value;
    wsadressindetails = document.getElementById("adressIndetails").value;
    console.log(`${wsfristname} + ${wslastname} + ${wsworkshopname}`);

    db.collection("regwarsha")
        .add({
            adress: wsadressindetails,
            city: wscity,
            goverment: wsgoverment,
            lastname: wslastname,
            fristname: wsfristname,
            password: wspassword,
            workshopname: wsworkshopname,
            workshopnumbre: wsWorkshopNumbre,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
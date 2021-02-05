window.onscroll = function navObacity(event) {
    var element = document.documentElement.scrollTop;
    document.querySelector(".header").onmouseover = function () {
        document.querySelector(".header").style.opacity = "1";
    };
    document.querySelector(".header").onmouseout = function () {
        document.querySelector(".header").style.opacity = "0.7";
    };

    // if (element > 100) {
    //   console.log(element);
    //   document.querySelector(".header").style.opacity = "0.7";
    //   document.querySelector(".header").onmouseover = function () {
    //     document.querySelector(".header").style.opacity = "1";
    //   };
    // } else {
    //   document.querySelector(".header").style.opacity = "1";
    // }
}


var comment = document.getElementById("commentsbox");
var Service = document.getElementById("serviceTable");

var btncomment = document.getElementById("commentButton");
var btnservice = document.getElementById("ServicetButton");

btncomment.onclick = function () {

    comment.style.display = "inline-flex";
    Service.style.display = "none";
    btncomment.style.color = "#8c0909";
    btnservice.style.color = "#3A3535 ";
    btncomment.style.fontWeight = "bolder";
    btnservice.style.fontWeight = "normal";
}
btnservice.onclick = function () {
    comment.style.display = "none";
    Service.style.display = "table";
    btnservice.style.color = "#8c0909";
    btnservice.style.fontWeight = "bolder";
    btncomment.style.color = "#3A3535";

    btncomment.style.fontWeight = "normal";


}

var obj = [
    {
        "id": 1,
        "location": "Fayoum",
        "name": "The local work shop",
        "phonenumber": "010234938532",
        "rate": 4,
        "address": "Egpy - ElFayoum , Mesala street behind Rosana Resturant Below ElSeha Clinic",
        "image": "url('/resources/workShop1.jpg')",
        "icon": "url('/resources/workShop3.jpg')"
    },
    {
        "id": 2,
        "location": "Itsa",
        "name": "The Race work shop",
        "phonenumber": "010555638510",
        "rate": 2,
        "address": "Egpy - Itsa , family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop2.jpg')",
        "icon": "url('/resources/workShop4.jpg')"
    },
    {
        "id": 3,
        "location": "Maadi",
        "name": "The Bos work shop",
        "phonenumber": "010234938532",
        "rate": 2,
        "address": "Egpy - Maadi ,family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop5.jpg')",
        "icon": "url('/resources/workShop2.jpg')"
    },
    {
        "id": 4,
        "location": "Mohandesen",
        "name": "The Race work shop",
        "phonenumber": "010555638510",
        "rate": 2,
        "address": "Egpy - Mohandesen ,  Mesala street behind Rosana Resturant Below ElSeha Clinic ",
        "image": "url('/resources/workShop4.jpg')",
        "icon": "url('/resources/workShop2.jpg')"
    },

    {
        "id": 5,
        "location": "Fayoum",
        "name": "The local work shop",
        "phonenumber": "010234938532",
        "rate": 4,
        "address": "Egpy - ElFayoum , Mesala street behind Rosana Resturant Below ElSeha Clinic",
        "image": "url('/resources/workShop2.jpg')",
        "icon": "url('/resources/workShop3.jpg')"
    },
    {
        "id": 6,
        "location": "Itsa",
        "name": "The Race work shop",
        "phonenumber": "010555638510",
        "rate": 2,
        "address": "Egpy - Itsa , family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop3.jpg')",
        "icon": "url('/resources/workShop5.jpg')"
    },

    {
        "id": 7,
        "location": "Damares",
        "name": "Master work shop",
        "phonenumber": "010938532145",
        "rate": 2,
        "address": "Egpy - Minya ,family street after zad bank the third house at the left side ",
        "image": "url('/resources/workShop4.jpg')",
        "icon": "url('/resources/workShop1.jpg')"
    },
    {
        "id": 8,
        "location": "Minya",
        "name": "The Bos work shop",
        "phonenumber": "010555638510",
        "rate": 5,
        "address": "Egpy - Minya ,  Mesala street behind Rosana Resturant Below ElSeha Clinic ",
        "image": "url('/resources/workShop2.jpg')",
        "icon": "url('/resources/workShop3.jpg')"
    }
];
// console.log(obj[3].name);
window.onload = function () {
    btnservice.style.color = "#8c0909";
    btnservice.style.fontWeight = "bolder";
    var dis = document.getElementById("commentsbox");
    dis.style.display = "none";
    var id =  parseInt(window.location.href.split('=')[1]) - 1;;

    document.getElementById("workshopName").innerHTML = obj[id].name;
    document.getElementById("workshopPhone").innerHTML = obj[id].phonenumber;
    document.getElementById("workshopAddress").innerHTML = obj[id].address;
    document.getElementById("workshopRate").innerHTML = obj[id].rate;

}
////////from here
// var done;
// function post() {
//     var review = document.getElementById("txtArea").value;
//     var thanking = document.getElementById("Thanks")

//     if (review && starValue) {
//         var para = document.createElement("p");
//         var sp = document.createElement("span"); 
        
//         var node = document.createTextNode(review);
//         var node2 = document.createTextNode(name);
//         sp.appendChild(node2);
//         para.appendChild(node);

//         var element = document.getElementById("Comments");
//         var y=element.appendChild(sp);
//         var z = element.appendChild(para);

//         document.getElementById("txtArea").value = "";
       
//         thanking.innerHTML = "Thanks "+name+" For Your Review";

//         done = 0;
//         document.getElementById("txtArea").readOnly = true;

//         // console.log(para);
//         // console.log(node);

//     }
//     else if (done == 0) {

//         thanking.innerHTML = "Your Review have been already Recorded";

//     }
//     else if (review) {
//         thanking.innerHTML = "Please Rate our Services";

//     }
//     else if (starValue) {
//         thanking.innerHTML = "Please Write your Review";

//     }
//     else {
//         thanking.innerHTML = "Please Write your Review and Rate our Services";

//     }

// }
// let star = document.querySelectorAll('input');
// let showValue = document.querySelector('#rating-value');
// var starValue;
// for (let i = 0; i < star.length; i++) {
//     star[i].addEventListener('click', function () {
//         i = this.value;
//         starValue = i;
//         showValue.innerHTML = i + " out of 5";

//     });


// }


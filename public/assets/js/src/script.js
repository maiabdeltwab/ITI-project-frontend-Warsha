

// var obj = [
//     {
//         "id": 1,
//         "location": "Fayoum",
//         "name": "The local work shop",
//         "phonenumber": "010234938532",
//         "rate": 4,
//         "address": "Egpy - ElFayoum , Mesala street behind Rosana Resturant Below ElSeha Clinic",
//         "image": "url('/resources/workShop1.jpg')",
//         "icon": "url('/resources/workShop3.jpg')"
//     },
//     {
//         "id": 2,
//         "location": "Itsa",
//         "name": "The Race work shop",
//         "phonenumber": "010555638510",
//         "rate": 2,
//         "address": "Egpy - Itsa , family street after zad bank the third house at the left side ",
//         "image": "url('/resources/workShop2.jpg')",
//         "icon": "url('/resources/workShop4.jpg')"
//     },
//     {
//         "id": 3,
//         "location": "Maadi",
//         "name": "The Bos work shop",
//         "phonenumber": "010234938532",
//         "rate": 2,
//         "address": "Egpy - Maadi ,family street after zad bank the third house at the left side ",
//         "image": "url('/resources/workShop5.jpg')",
//         "icon": "url('/resources/workShop2.jpg')"
//     },
//     {
//         "id": 4,
//         "location": "Mohandesen",
//         "name": "The Race work shop",
//         "phonenumber": "010555638510",
//         "rate": 2,
//         "address": "Egpy - Mohandesen ,  Mesala street behind Rosana Resturant Below ElSeha Clinic ",
//         "image": "url('/resources/workShop4.jpg')",
//         "icon": "url('/resources/workShop2.jpg')"
//     },

//     {
//         "id": 5,
//         "location": "Fayoum",
//         "name": "The local work shop",
//         "phonenumber": "010234938532",
//         "rate": 4,
//         "address": "Egpy - ElFayoum , Mesala street behind Rosana Resturant Below ElSeha Clinic",
//         "image": "url('/resources/workShop2.jpg')",
//         "icon": "url('/resources/workShop3.jpg')"
//     },
//     {
//         "id": 6,
//         "location": "Itsa",
//         "name": "The Race work shop",
//         "phonenumber": "010555638510",
//         "rate": 2,
//         "address": "Egpy - Itsa , family street after zad bank the third house at the left side ",
//         "image": "url('/resources/workShop3.jpg')",
//         "icon": "url('/resources/workShop5.jpg')"
//     },

//     {
//         "id": 7,
//         "location": "Damares",
//         "name": "Master work shop",
//         "phonenumber": "010938532145",
//         "rate": 2,
//         "address": "Egpy - Minya ,family street after zad bank the third house at the left side ",
//         "image": "url('/resources/workShop4.jpg')",
//         "icon": "url('/resources/workShop1.jpg')"
//     },
//     {
//         "id": 8,
//         "location": "Minya",
//         "name": "The Bos work shop",
//         "phonenumber": "010555638510",
//         "rate": 5,
//         "address": "Egpy - Minya ,  Mesala street behind Rosana Resturant Below ElSeha Clinic ",
//         "image": "url('/resources/workShop2.jpg')",
//         "icon": "url('/resources/workShop3.jpg')"
//     }
// ];
// // console.log(obj[3].name);
// window.onload = function () {
//     btnservice.style.color = "#8c0909";
//     btnservice.style.fontWeight = "bolder";
//     var dis = document.getElementById("commentsbox");
//     dis.style.display = "none";
//     var id =  parseInt(window.location.href.split('=')[1]) - 1;;

//     document.getElementById("workshopName").innerHTML = obj[id].name;
//     document.getElementById("workshopPhone").innerHTML = obj[id].phonenumber;
//     document.getElementById("workshopAddress").innerHTML = obj[id].address;
//     document.getElementById("workshopRate").innerHTML = obj[id].rate;

// }
////////from here
var name = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
var done;
post = () => {
    var review = document.getElementById("txtArea").value;
    var thanking = document.getElementById("Thanks")

    if (review && starValue) {
        document.getElementById("txtArea").value = "";

        thanking.innerHTML = "Thanks " + name + " For Your Review";
        var LInode = document.createElement("li");
        LInode.dataset.target = "#demo2";
        LInode.className = "Warshacircle";
        LInode.setAttribute('data-slide-to', 3);
        document.getElementById("commentsList").appendChild(LInode);

        var inp = document.getElementById("inp");

        var carousalITem = document.createElement("div");
        carousalITem.classList.add('WarshaCurosal', 'carousel-item');


        var cardeck = document.createElement("div");
        cardeck.className = "card-deck";
        carousalITem.appendChild(cardeck);

        var clientFeedbackCard = document.createElement("div");
        clientFeedbackCard.classList.add('card', 'border', 'p-3', 'clientFeedbackCard')

        cardeck.appendChild(clientFeedbackCard);


        //awl div
        var commentIconBackground = document.createElement("div");
        commentIconBackground.className = "commentIconBackground";
        //span in awl div
        var Warshaspan = document.createElement("span");
        Warshaspan.classList.add('fa', 'fa-quote-left', 'commentIcon');
        commentIconBackground.appendChild(Warshaspan);
        clientFeedbackCard.appendChild(commentIconBackground);



        //
        var flexdiv = document.createElement('div');
        flexdiv.style.display = "flex";
        flexdiv.className = "row";

        var warshImage = document.createElement('img');
        warshImage.src = 'assets/images/Myprofile.jpeg';
        warshImage.classList.add('mt-3', 'rounded-circle', 'clientImage', 'ml-1');
        //
        var mediaBody = document.createElement("div");
        mediaBody.classList.add('media-body', 'pl-3', 'mt-3', 'userInfo');
        //
        var WarshaH5 = document.createElement('h5');
        var nameNode = document.createTextNode(name);
        WarshaH5.className = "userName";
        WarshaH5.appendChild(nameNode);
        //
        var warshaParagraph = document.createElement('p');
        var d = new Date();
        var todayDate = d.getDate() + "/" + parseInt(d.getMonth() + 1) + "/" + d.getFullYear();
        console.log(todayDate);

        var dateNode = document.createTextNode(todayDate);

        warshaParagraph.className = "date";
        warshaParagraph.appendChild(dateNode);
        //
        mediaBody.appendChild(WarshaH5);
        mediaBody.appendChild(warshaParagraph);
        flexdiv.appendChild(warshImage);

        flexdiv.appendChild(mediaBody);

        var userComment = document.createElement('p');
        var commentNode = document.createTextNode(review);
        userComment.classList.add('pl-2', 'pt-4', 'userComment');
        userComment.appendChild(commentNode);

        clientFeedbackCard.appendChild(flexdiv);
        clientFeedbackCard.appendChild(userComment);

        inp.appendChild(carousalITem);
        done = 0;
        document.getElementById("txtArea").readOnly = true;



    }
    else if (done == 0) {

        thanking.innerHTML = "Your Review have been already Recorded";

    }
    else if (review) {
        thanking.innerHTML = "Please Rate our Services";

    }
    else if (starValue) {
        thanking.innerHTML = "Please Write your Review";

    }
    else {
        thanking.innerHTML = "Please Write your Review and Rate our Services";

    }

}

AddServices = () => {
    var LInode = document.createElement("li");
    LInode.dataset.target = "#demo";
    LInode.className = "Warshacircle";
    LInode.setAttribute('data-slide-to', 3);
    document.getElementById("serviceList").appendChild(LInode);
    var service_price = document.getElementById("service_price");
    var carousalITem = document.createElement("div");
    carousalITem.classList.add('WarshaCurosal', 'carousel-item');


    var cardeck = document.createElement("div");
    cardeck.className = "card-deck";
    carousalITem.appendChild(cardeck);

    var cardService = document.createElement("div");
    cardService.classList.add('card','cardService')

    cardeck.appendChild(cardService);

    var cardBody = document.createElement("div");
    cardBody.classList.add= ('card-body','text-center');
    //span in awl div
    var serviceNameSpan = document.createElement("span");
    serviceNameSpan.classList.add('serviceName');
    cardBody.appendChild(serviceNameSpan);
    cardService.appendChild(cardBody);

    service_price.appendChild(carousalITem);
}



let star = document.querySelectorAll('.star');
let showValue = document.querySelector('#rating-value');
console.log(star.length);
var starValue;
for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function () {
        // i = this.value;
        starValue = this.value;
    });


}
//addtocard counter
var warshaCount = 0;

function warshaCounte() {

    warshaCount += 1;

    document.getElementById("warshaBadge").innerHTML = warshaCount;
}
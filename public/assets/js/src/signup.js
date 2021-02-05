function removeIcon(input) {
    var icon = input.previousSibling.previousElementSibling; //get icon element
    icon.style.display = 'none';
}

function resetIcon(input) {
    var icon = input.previousSibling.previousElementSibling;
    icon.style.display = 'inline';
}


function validate(input) {
    var pattern = new RegExp(input.pattern);

    if (input.type == 'email') {
        pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    } else if (input.id == 'password1') {
        pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    } else if (input.id == 'password2') {
        pattern = new RegExp(document.getElementById('password1').value);
    }

    var errorIcon = input.nextSibling.nextElementSibling;
    console.log(errorIcon)

    if (!pattern.test(input.value)) {
        input.style.borderColor = "#e43b3b";
        errorIcon.classList.remove('fa-check-circle');
        errorIcon.classList.add('fa-times-circle');
        errorIcon.style.display = 'inline-block';
        errorIcon.style.color = '#e43b3b';
        // input.select();

        return false;
    } else {
        input.style.borderColor = "#3bcc60";
        errorIcon.style.display = 'none';
        errorIcon.classList.remove('fa-times-circle');
        errorIcon.classList.add('fa-check-circle');
        errorIcon.style.display = 'inline-block';
        errorIcon.style.color = '#3bcc60';

        return true;
    }
}




function save() {

    var form = document.forms[0];
    console.log('hiiii here!')

    for (let i = 1; i < (form.length - 1); i++) {
        if (!validate(form[i])) {
            return false;
        }
    }

    localStorage.username = form.username.value;
    localStorage.firstName = form['first-name'].value;
    localStorage.lastName = form['last-name'].value;
    localStorage.email = form.email.value;
    localStorage.phone = form.phone.value;
    localStorage.password = form.password1.value;

    return true;
}



var name = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');

var done;
function post() {
    var review = document.getElementById("txtArea").value;
    var thanking = document.getElementById("Thanks")

    if (review && starValue) {
        var para = document.createElement("p");
        var sp = document.createElement("span"); 
        
        var node = document.createTextNode(review);
        var node2 = document.createTextNode(name);
        sp.appendChild(node2);
        para.appendChild(node);

        var element = document.getElementById("Comments");
        var y=element.appendChild(sp);
        var z = element.appendChild(para);

        document.getElementById("txtArea").value = "";
       
        thanking.innerHTML = "Thanks "+name+" For Your Review";

        done = 0;
        document.getElementById("txtArea").readOnly = true;

        // console.log(para);
        // console.log(node);

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
let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');
var starValue;
for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function () {
        i = this.value;
        starValue = i;
        showValue.innerHTML = i + " out of 5";

    });


}

$('.invalid-login').hide();


//check if user input is valid or not 
async function validateForm() {

    var form = document.forms[0];

    var email = $('#email').val();
    var password = $('#password').val();
    var user;

    var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;


    // get user form db
    if (emailPattern.test(email.trim())) {
        console.log("Hello!!!")
        await db.collection("users").where("email", "==", email)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    user = doc.data();
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    } else {
        await db.collection("users").where("userame", "==", email)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    user = doc.data();
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }

    if (user && password.trim() == user.password) {
        saveLogin(user.userame, user.email, user.password);
        form.submit(); //submit form when finish
    } else {
        $('.invalid-login').show();
        return;
    }
}

//save user input if 'remember me' be chosen
function saveLogin(username, email, password) {

    var remeberCheck = document.getElementById('remeber-me');

    if (remeberCheck.checked) {
        localStorage.username = username;
        localStorage.email = email;
        localStorage.password = password;
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }

    sessionStorage.username = username;
    sessionStorage.email = email;
    sessionStorage.password = password;
}
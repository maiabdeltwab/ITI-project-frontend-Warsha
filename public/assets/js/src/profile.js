// get user
var user, userPref, infoId, prefId;

$(document).ready(function() {
    // get user
    getUser();
    getUserPref();
})


async function getUser() {
    var username = sessionStorage.username;
    await db.collection("users").where("userame", "==", username)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                user = doc.data();
                docId = doc.id;
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    $('#full-name').text(user.firstName + " " + user.lastName);
    $('#username').text("@" + user.userame);
    $('#first-name').val(user.firstName);
    $('#last-name').val(user.lastName);
    $('#email').val(user.email);
    $('#phone').val(user.phone);
}


async function getUserPref() {
    var username = sessionStorage.username;
    await db.collection("user_pref").where("username", "==", username)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                userPref = doc.data();
                prefId = doc.id;
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    $('#car-brand').val(userPref.carBrand);
    $('#car-model').val(userPref.carModel);
    $('#location').val(userPref.Location);
    $('#region').val(userPref.Region);
}


// ===> udate info
$('#editInfo').click(function() {
    if ($(this).text() == 'Edit') {
        $(this).removeClass("btn-dark")
        $(this).addClass("btn-primary");
        $(this).text("Save");
        $('#first-name').prop("disabled", false);
        $('#last-name').prop("disabled", false);
        $('#email').prop("disabled", false);
        $('#phone').prop("disabled", false);
    } else {
        $(this).addClass("btn-dark")
        $(this).removeClass("btn-primary");
        $(this).text("Edit");
        $('#first-name').prop("disabled", true);
        $('#last-name').prop("disabled", true);
        $('#email').prop("disabled", true);
        $('#phone').prop("disabled", true);


        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

        db.collection("users").doc(infoId).update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            })
            .then((docRef) => {
                console.log("Updated successfuly");
            })
            .catch((error) => {
                console.error("Error ");
            });
    }
})




// ===> update user pref
$('#editPref').click(function() {
    if ($(this).text() == 'Edit') {
        $(this).removeClass("btn-dark")
        $(this).addClass("btn-primary");
        $(this).text("Save");
        $('#car-brand').prop("disabled", false);
        $('#car-model').prop("disabled", false);
        $('#location').prop("disabled", false);
        $('#region').prop("disabled", false);
    } else {
        $(this).addClass("btn-dark")
        $(this).removeClass("btn-primary");
        $(this).text("Edit");
        $('#car-brand').prop("disabled", true);
        $('#car-model').prop("disabled", true);
        $('#location').prop("disabled", true);
        $('#region').prop("disabled", true);


        let carBrand = $('#car-brand').val();
        let carModel = $('#car-model').val();
        let location = $('#location').val();
        let region = $('#region').val();

        db.collection("user_pref").doc(prefId).update({
                carBrand: carBrand,
                carModel: carModel,
                Location: location,
                Region: region
            })
            .then((docRef) => {
                console.log("Updated successfuly");
            })
            .catch((error) => {
                console.error("Error ");
            });
    }
})
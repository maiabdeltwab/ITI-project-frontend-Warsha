// remove icon when focus 
$('input').focus(function() {
    $(this).prev().fadeOut()
});
//get  back icon when blur 
$('input').blur(function() {
    $(this).prev().fadeIn();
    validate(this);
});

function validate(input) {

    var pattern = new RegExp(input.pattern);
    if (input.id == 'username')
        pattern = /^([a-z0-9]|[-._](?![-._])){3,}$/
    else if (input.id == 'first-name' || input.id == 'last-name')
        pattern = /^[A-Za-z -]{3,}$/;
    else if (input.id == 'phone')
        pattern = /^(012||011||015||010)\d{8}$/
    else if (input.type == 'email')
        pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    else if (input.id == 'password1')
        pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    else if (input.id == 'password2')
        pattern = new RegExp($('#password1').val());


    if (!pattern.test(input.value.trim()) || (input.id == 'password2' && input.value == '')) {
        $(input).css('borderColor', '#e43b3b');
        $(input).next().show();
        $(input).next().removeClass('fa-check');
        $(input).next().addClass('fa-times');
        $(input).next().css('color', '#e43b3b');

        //custom tooltip error messages
        if (input.id == 'username')
            $(input).next()
            .attr('data-original-title', 'Enter 3 or more charcter (no special chars or space and start with letter)')

        else if (input.id == 'first-name' || input.id == 'last-name')
            $(input).next()
            .attr('data-original-title', 'Enter 3 or more letters (special characters not allowed)')

        else if (input.id == 'email')
            $(input).next().attr('data-original-title', 'Invalid email format')

        else if (input.id == 'phone')
            $(input).next().attr('data-original-title', 'Inavlid Phone number')

        else if (input.id == 'password1')
            $(input).next()
            .attr('data-original-title', 'Password should be at least 8 characters contains numbers, upper and lowercase letters')

        else if (input.id == 'password2')
            if (input.value == '')
                $(input).next().attr('data-original-title', 'Enter password')
            else
                $(input).next().attr('data-original-title', 'password not matched')

        return false;

    } else {
        $(input).css('borderColor', '#3bcc60');
        $(input).next().show();
        $(input).next().removeClass('fa-times');
        $(input).next().addClass('fa-check');
        $(input).next().css('color', '#3dcc60');
        $(input).next().attr('data-original-title', 'looks good!')

        return true;
    }
}


function save() {
    var form = document.forms[0];
    for (let i = 1; i < (form.length - 1); i++) {
        if (!validate(form[i])) {
            $('#alert-error').fadeIn();

            let promise1 = (new Promise((resolve, reject) => {
                    setTimeout(() => resolve("Welcome !!"), 6000);
                }))
                .then(() => $('#alert-error').fadeOut())

            return false;
        }
    }

    return true;

}
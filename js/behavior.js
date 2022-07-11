/********** Photos Click Listener script ************/
document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementsByClassName("small");
    let arrayOfElements = Array.from(thumbnailElement);
    arrayOfElements.forEach(element => {
        element.addEventListener("click", function () {
            if (element.className == "") {
                element.className = "small";
            } else
                element.className = "";
        });
    });
});

/************* Facebook Share script *****************/
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/************* Check Form of Contact script *****************/
function checkForm() {
    var inputname = document.form.name;
    var inputemail = document.form.email;
    if (inputname.value.length == 0 || inputemail.value.length == 0) {
        inputname.style.borderColor = 'red';
        inputemail.style.borderColor = 'red';
        return false;
    }
    return true;
}

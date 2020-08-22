const menuToggle = document.querySelector("#menu-toggle");
const mobileNavContainer = document.querySelector("#mobile-nav");

menuToggle.onclick = () => {
    menuToggle.classList.toggle("menu-icon-active");
    mobileNavContainer.classList.toggle("mobile-nav--active");
};

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
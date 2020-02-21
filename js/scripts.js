// jQuery for Carousel Buttons
$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

// jQuery for activating Modals for Reserve and Login Buttons
$(function () {
    $('#reserveButton').click(function () {
        $('#reserveModal').modal('show');
    })
});
$(function () {
    $('#loginButton').click(function () {
        $('#loginModal').modal('show');
    })
});


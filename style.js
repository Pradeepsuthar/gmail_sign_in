$(".email").show();
$(".password").hide();
$("#next").show();
$("#submit").hide();

$(document).ready(function () {
    $("#next").click(function () {
        $(".password").show();
        $(".email").hide();
        $("#submit").show();
        $("#next").hide();
    });
    $("#submit").click(function () {
        $(".form-signin").submit()
    });
});




 
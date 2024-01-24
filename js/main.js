/*leftbar*/ 
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'270px'}, 50);
    $("#home-content").animate({marginLeft :'270px'}, 50);
});

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'}, 50);
    $("#home-content").animate({marginLeft :'0px'}, 50);
});

/*scrollmenu*/
$("#leftMenu a").click(function(){
    let sectionId = $(this).attr("href");
    let positionOfSection = $(sectionId).offset().top;
    $("html, body").animate({scrollTop: positionOfSection}, 2000);
});

/*details*/
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

/*counter*/
window.onload = function() {
    countDownToTime("4 February 2024 12:59:59");
};
function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = futureDate.getTime() / 1000;
    let now = new Date();
    now = now.getTime() / 1000;
    let timeDifference = futureDate - now;
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60);
    let secs = Math.floor(timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60);
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`);

    setInterval(function() { countDownToTime(countTo); }, 1000);
}

/*textarea*/
let maxLength = 100;
$('textarea').keyup(function() {
    let length = $(this).val().length;
    let AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");
    } 
    else {
        $("#chars").text(AmountLeft);
    }
});

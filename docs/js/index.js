function birthdayWishPosition(){
    $('#birthdayWishBtn').css("top", "calc((100vh / 2) - (" + $('#birthdayWishBtn').height() + "px / 2)");
}
birthdayWishPosition();
window.onresize = function(){
    birthdayWishPosition();
}
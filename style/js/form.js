/*Click Function*/
$(document).ready(function () {
  $("#menuIcon").on('click', function (e) {
    e.preventDefault();
    $("#menuIcon").toggleClass("menuIconIntro");
    $(".menuIconBar").toggleClass("menuIconBarInto");
    $(".menuBarOne").toggleClass("menuBarOneIntro");
    $(".menuBarTwo").toggleClass("menuBarTwoIntro");
    $("#headerMenuSection").toggleClass("headerMenuSectionIntro");
    $("#menuSection").toggleClass("menuSectionIntro");
    $("body").toggleClass("bodyIntro");
  });
  $(".mainMenu").on('click', function (e) {
    e.preventDefault();
    var elem = $(this);
    elem.closest(".menuDiv").find(".subMenu").toggleClass("subMenuIntro");
  });
  $(".menuCloseBg").on('click', function (e) {
    e.preventDefault();
    $(".subMenu").removeClass("subMenuIntro");
  });
});
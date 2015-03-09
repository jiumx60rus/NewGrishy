(function() {
  $("#buttonMenu").on("click", function() {
    $("#buttonMenu").toggleClass("buttonMenuOpen");
    return $("#menu").toggleClass("menuOpen");
  });

}).call(this);

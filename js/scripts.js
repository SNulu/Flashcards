$(document).ready(function() {
  $("#js .clickable").click(function() {
    $("#js #initially-hidden").toggle();
    $("#js #initially-showing").toggle();
    $("#js #definition").fadeToggle("slow");
  });

  $("#op .clickable").click(function() {
    $("#op #initially-hidden").toggle();
    $("#op #initially-showing").toggle();
    $("#op #definition").fadeToggle("slow");
  });

  $("#va .clickable").click(function() {
    $("#va #initially-hidden").toggle();
    $("#va #initially-showing").toggle();
    $("#va #definition").fadeToggle("slow");
  });

  $("#co .clickable").click(function() {
    $("#co #initially-hidden").toggle();
    $("#co #initially-showing").toggle();
    $("#co #definition").fadeToggle("slow");
  });

  $("#as .clickable").click(function() {
    $("#as #initially-hidden").toggle();
    $("#as #initially-showing").toggle();
    $("#as #definition").fadeToggle("slow");
  });
});

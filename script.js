$(document).ready( function() {
    $("#project1").on("click", function() {
      document.getElementById("picture").src ="https://hdwallsource.com/img/2014/5/free-kung-fu-panda-2-wallpaper-33353-34110-hd-wallpapers.jpg";
      console.log("printing pic1");
      $("#context").html("Random Text testing");
      });
    $("#project2").on("click", function() {
      document.getElementById("picture").src = "";
      console.log("printing pic2");
      $("#context").html("Changing the text");
      });
  });
  
$(document).ready( function() {
  $("#project1").on("click", function() {
    document.getElementById("proj_link").href ="https://pche3.github.io/quote_machine/";
    document.getElementById("picture").src ="https://github.com/pche3/quote_machine/blob/gh-pages/preview1.png?raw=true";
    document.getElementById("picture").alt ="Quote Machine";
    $("#context").html("Utilize an API to retrieve quotes. The user can tweet a quote through a dedicated Twitter button.");
    });
  $("#project2").on("click", function() {
    document.getElementById("proj_link").href ="https://pche3.github.io/theremin/";
    document.getElementById("picture").src ="https://github.com/pche3/theremin/blob/master/preview_theremin.png?raw=trues";
    document.getElementById("picture").alt ="Digital Theremin";
    $("#context").html("ECE 445 Senior Project: A modern take on the classic analog theremin");
    });
})
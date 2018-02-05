$(document).ready( function() {
  $("#project1").on("click", function() {
    document.getElementById("picture").src ="https://github.com/pche3/quote_machine/blob/gh-pages/preview1.png?raw=true";
    document.getElementById("picture").alt ="Quote Machine";
    $("#context").html("Come checkout this quote generator that utilizes an API to retrieve quotes. Once a JSON object is retrieved, the author and quote can be parsed. The user can tweet the quote through Twitter through a dedicated Twitter button.");
    });
  $("#project2").on("click", function() {
    document.getElementById("picture").src ="https://github.com/pche3/theremin/blob/master/preview_theremin.png?raw=trues";
    document.getElementById("picture").alt ="Digital Theremin";
    $("#context").html("This website is dedicated to a project that me and friends worked on. Also, it is the first website I made to pratice front-end development. The project is all about developing a new product that eliminates previous generation design challenges.");
    });
}
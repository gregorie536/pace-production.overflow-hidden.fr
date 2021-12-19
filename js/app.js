document.querySelector("#trigger").addEventListener("mouseover", function(){
    var txt = document.querySelector("#dynamicContent").innerHTML;
    document.querySelector("#dynamicContent").innerHTML = "<h2>pace</h2> <h1>production</h1>";

    this.addEventListener("mouseout", function(){
        document.querySelector("#dynamicContent").innerHTML = txt;
    });
});
document.querySelector("#trigger-1").addEventListener("mouseover", function(){
  var txt = document.querySelector("#dynamicContent").innerHTML;
  document.querySelector("#dynamicContent").innerHTML = "<h2>pace</h2> <h1>production</h1>";

  this.addEventListener("mouseout", function(){
      document.querySelector("#dynamicContent").innerHTML = txt;
  });
});


var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)
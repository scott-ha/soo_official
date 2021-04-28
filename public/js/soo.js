function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.border = "";
    tablinks[i].style.color = "";
    tablinks[i].style.boxShadow = "";
    tablinks[i].style.borderRadius = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.border = "solid 1px #9e1f24";
  elmnt.style.color = "#9e1f24";
  elmnt.style.boxShadow = "0 3px 6px 0 rgba(96, 84, 63, 0.3)";
  elmnt.style.borderRadius = "28px";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
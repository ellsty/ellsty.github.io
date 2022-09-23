
// tab funtion
function openTab(evt, tabName) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
  
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
  
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



// galtab function

function openGal(evt, galName) {

    var i, galcontent, gallinks;
  
    galcontent = document.getElementsByClassName("galcontent");
  
    for (i = 0; i < galcontent.length; i++) {
      galcontent[i].style.display = "none";
    }
  
    gallinks = document.getElementsByClassName("gallinks");
  
    for (i = 0; i < gallinks.length; i++) {
      gallinks[i].className = gallinks[i].className.replace(" active", "");
    }
  
    document.getElementById(galName).style.display = "block";
    evt.currentTarget.className += " active";
  
  }

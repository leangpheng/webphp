
function specialinputconvertamount() {
document.getElementById("inputscalevalue").type = "textbox";

}
var  measuretypevalue =100;
function changescale(){
var specialscale = document.getElementById("inputscalevalue").value; 
document.getElementById("typescale").innerText = "1/" + specialscale;
}
function convert() {
  var inputnum = document.getElementById("inputvalue").value;
 var getscale = document.getElementById("typescale").innerText;
var getmeasuretype = document.getElementById("measuretype").innerText;
var measureamount = getmeasuretype.split("/").pop();

 var scaleamount = getscale.split("/").pop();
  var realvalue = inputnum * measureamount;
  var resultvalue = realvalue / scaleamount;
  document.getElementById("resultmm").value = resultvalue;
  document.getElementById("resultcm").value = resultvalue /10 ;
}

function changemeasureinput(mnum) {
document.getElementById("measuretype").innerText = document.getElementById("measureinput" + mnum).innerText;
measuretypevalue = document.getElementById("measureinput" + mnum).value;
}
function measurefunction() {
  document.getElementById("mymeasure").classList.toggle("show");
}

function changeconverttype(num) {

document.getElementById("typescale").innerText = document.getElementById("menu" + num).innerText;
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */



function dropdownfunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.measurebtn')) {
    var dropdowns = document.getElementsByClassName("measure-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


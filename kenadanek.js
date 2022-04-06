
var name = ""
// vowels
var vo = ["a","e","i","u"]
// consonants
var co = ["d","k","l","m","n","r","s","t","v"]

function forestname() {
  conum1 = Math.floor(Math.random() * 9);
  co1 = co[conum1];
  conum2 = Math.floor(Math.random() * 9);
  co2 = co[conum2];
  conum3 = Math.floor(Math.random() * 9);
  co3 = co[conum3];

  vonum1 = Math.floor(Math.random() * 4);
  vo1 = vo[vonum1];
  vonum2 = Math.floor(Math.random() * 4);
  vo2 = vo[vonum2];

  name = co1+vo1+co2+vo2+co3+vo2+co2+vo1+co1;

  return name;

}

function kenadanek() {
  document.getElementById("nam").value = forestname();
}

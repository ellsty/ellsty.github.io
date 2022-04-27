// SCORE AND ATTRIBUTE GENERATOR FUNCTION STUFF

// FUNCTION VARIABLES
// d6 result
var result = 0;
// array of scores
var scorerolls = [0]
// inividual score output
var score = 0



// EASY MODE (6-18)
// d6 ROLLER - REROLL 1s BUILT IN
function d6rero() {
  result = 2 + Math.floor(Math.random() * 5)
  return result;
}
// INDIVIDUAL SCORE GENERATOR - 4d6 DROP-LOWEST RE
function rollscore() {
  scorerolls = [d6rero(),d6rero(),d6rero(),d6rero()];
  scorerolls.sort(function(a, b){return a-b});
  score = scorerolls[1]+scorerolls[2]+scorerolls[3];
  return score
}
// BUTTON FILL IN
function scoregen(destination) {
  document.getElementById(destination).value = rollscore();
}
// ALL 6 SCORES GENERATORS
function allscores() {
  scoregen("strsco");
  scoregen("dexsco");
  scoregen("consco");
  scoregen("intsco");
  scoregen("wissco");
  scoregen("chasco");
}



// HARD MODE (3-18)
// d6 ROLLER - NO REROLL
function d6() {
  result = 1 + Math.floor(Math.random() * 6)
  return result;
}
// INDIVIDUAL SCORE GENERATOR - 3d6 FLAT - oof
function rollscorehardmode() {
  scorerolls = [d6(),d6(),d6()];
  score = scorerolls[0]+scorerolls[1]+scorerolls[2];
  return score
}
// BUTTON FILL IN - HARD MODE (FLAT 3d6)
function hardscoregen(destination) {
  document.getElementById(destination).value = rollscorehardmode();
}
// ALL 6 SCORES - HARD
function hardallscores() {
  hardscoregen("strsco");
  hardscoregen("dexsco");
  hardscoregen("consco");
  hardscoregen("intsco");
  hardscoregen("wissco");
  hardscoregen("chasco");
}



// EXTRA HARD MODE - d7 EDITION (3-21 - tends higher than HARD MODE)
// d7 ROLLER - NO REROLL
function d7() {
  result = 1 + Math.floor(Math.random() * 7)
  return result;
}
// INDIVIDUAL SCORE GENERATOR - 3d7 FLAT - OOOOOF
function rollscoreextrahard() {
  scorerolls = [d7(),d7(),d7()];
  score = scorerolls[0]+scorerolls[1]+scorerolls[2];
  return score
}
// BUTTON FILL IN - EXTRA HARD MODE (FLAT 3d7)
function extrahardscoregen(destination) {
    document.getElementById(destination).value = rollscoreextrahard();
}
// ALL 6 SCORES - EXTRA HARD
function extrahardallscores() {
  extrahardscoregen("strsco");
  extrahardscoregen("dexsco");
  extrahardscoregen("consco");
  extrahardscoregen("intsco");
  extrahardscoregen("wissco");
  extrahardscoregen("chasco");
}



// ARMOR/RACE/CLASS GENERATORS
// ARMOR GEN
function armorgen() {
  result = 1 + Math.floor(Math.random() * 12);
  document.getElementById("arm").value = result;
}
// RACE GEN
function racegen() {
  result = 1 + Math.floor(Math.random() * 9);
  document.getElementById("rac").value = result;
}
// CLASS GEN
function classgen() {
  result = 1 + Math.floor(Math.random() * 13);
  document.getElementById("cla").value = result;
}


// THE GENERATE BUTTON
function generate() {
  document.getElementById("lvl").value = 1;
  namewrite();
  suffixgen();
  extrahardallscores();
  armorgen();
  racegen();
  classgen();
}

// CALCULATOR STUFF

// PROFICIENCY
// converts lvl to proficiency mod, inputs with "+" with class to adjust spacing
function calcpro() {
  lvl = document.getElementById("lvl").value;
  pro = (lvl / 4) + 1 ;
  pro = Math.ceil(pro);
  document.getElementById("pro").innerHTML = '<span class="txt2">+</span>' + pro;
}

// INDIVIDUAL MODIFIERS CALCULATION
function calcmod(score) {
  sco = document.getElementById(score).value;
  mod = (sco - 10) / 2;
  if (mod >= 0) {
    mod = mod >> 0;
    return mod;
  }
  else {
    mod = Math.floor(mod);
    return mod;
  }
}

// MODIFIER INSERT (input in the form of "calcmod(score)")
function instmod(mod,slot) {
  if (mod >= 0) {
    document.getElementById(slot).innerHTML = '<span class="txt2">+</span>' + mod;
  }
  else {
    mod *= -1;
    document.getElementById(slot).innerHTML = '<span class="txt2">-</span>' + mod;
  }
}


// MODIFERS - ALL
function calcmos() {
  instmod(calcmod("strsco"),"str");
  instmod(calcmod("dexsco"),"dex");
  instmod(calcmod("consco"),"con");
  instmod(calcmod("intsco"),"int");
  instmod(calcmod("wissco"),"wis");
  instmod(calcmod("chasco"),"cha");
}


// COMBAT CALCS
// INITIATIVE
function calcin() {
  instmod(calcmod("dexsco"),"in");
}

// HIT POINTS
function calchp() {
  dienum = document.getElementById("lvl").value;
  conmod = calcmod("consco")
  document.getElementById("dienum").innerHTML = dienum;

  if      (document.getElementById("cla").value == 2) {
    die = 12
  }
  else if (document.getElementById("cla").value == 11||
           document.getElementById("cla").value == 13) {
    die = 6
  }
  else if (document.getElementById("cla").value == 6||
           document.getElementById("cla").value == 8||
           document.getElementById("cla").value == 9) {
    die = 10
  }
  else {
    die = 8
  }
  document.getElementById("die").innerHTML = die;

  hp = die+((dienum-1)*((die/2)+1))+(dienum*conmod);
  if (hp < 10) {
    document.getElementById("hp").innerHTML = '<span class="txt1"> </span>' + hp;
  }
  else {
  document.getElementById("hp").innerHTML = hp;
  }
}

// ARMOR CLASS CALC
function calcac() {
  arm = document.getElementById("arm").value;
  dexmod = calcmod("dexsco");

  if      (arm == 1) {
    document.getElementById("ac").innerHTML = 11 + dexmod;
  }
  else if (arm == 2) {
    document.getElementById("ac").innerHTML = 11 + dexmod;
  }
  else if (arm == 3) {
    document.getElementById("ac").innerHTML = 12 + dexmod;
  }
  else if (arm == 4) {
    document.getElementById("ac").innerHTML = 12 + dexmod;
  }
  else if (arm == 5) {
    document.getElementById("ac").innerHTML = 13 + dexmod;
  }
  else if (arm == 6) {
    document.getElementById("ac").innerHTML = 14 + dexmod;
  }
  else if (arm == 7) {
    document.getElementById("ac").innerHTML = 14 + dexmod;
  }
  else if (arm == 8) {
    document.getElementById("ac").innerHTML = 15 + dexmod;
  }
  else if (arm == 9) {
    document.getElementById("ac").innerHTML = 14;
  }
  else if (arm == 10) {
    document.getElementById("ac").innerHTML = 16;
  }
  else if (arm == 11) {
    document.getElementById("ac").innerHTML = 17;
  }
  else if (arm == 12) {
    document.getElementById("ac").innerHTML = 18;
  }
  else {
    document.getElementById("ac").innerHTML = "--";
  }
}

// SPEED CALC
function calcsp() {
  dexmod = calcmod("dexsco");
  rac = document.getElementById("rac").value;
  if (rac == 2||
      rac == 4||
      rac == 5||
      rac == 7) {
    sp = 25 + (5 * dexmod);
    document.getElementById("sp").innerHTML = sp;
  }
  else {
    sp = 30 + (5 * dexmod);
    document.getElementById("sp").innerHTML = sp;
  }
}


// PRIMARY ABILITY AND SPELL SAVE DC
function calcdc() {
  if      (document.getElementById("cla").value == 2) {
    document.getElementById("pri").innerHTML = "str";
    pri = calcmod("strsco");
  }
  else if (document.getElementById("cla").value == 6) {
    document.getElementById("pri").innerHTML = "str][dex";
    if (calcmod("strsco") > calcmod("dexsco")) {
      pri = calcmod("strsco");
    }
    else {
      pri = calcmod("dexsco");
    }
  }
  else if (document.getElementById("cla").value == 8) {
    document.getElementById("pri").innerHTML = "str][cha";
    pri = calcmod("chasco");
  }
  else if (document.getElementById("cla").value == 7||
           document.getElementById("cla").value == 9) {
    document.getElementById("pri").innerHTML = "dex][wis";
    if (calcmod("dexsco") > calcmod("wissco")) {
      pri = calcmod("dexsco");
    }
    else {
      pri = calcmod("wissco");
    }
  }
  else if (document.getElementById("cla").value == 10) {
    document.getElementById("pri").innerHTML = "dex";
    pri = calcmod("dexsco");
  }
  else if (document.getElementById("cla").value == 13) {
    document.getElementById("pri").innerHTML = "int";
    pri = calcmod("intsco");
  }
  else if (document.getElementById("cla").value == 4||
           document.getElementById("cla").value == 5) {
    document.getElementById("pri").innerHTML = "wis";
    pri = calcmod("wissco");
  }
  else if (document.getElementById("cla").value == 3||
           document.getElementById("cla").value == 11||
           document.getElementById("cla").value == 12) {
    document.getElementById("pri").innerHTML = "cha";
    pri = calcmod("chasco");
  }
  else {
    document.getElementById("pri").innerHTML = "---";
    pri = 0
  }

  dc = 8 + Math.ceil((document.getElementById("lvl").value / 4) + 1) + pri;
  if (dc < 10) {
    document.getElementById("dc").innerHTML = '<span class="txt1"> </span>' + dc;
  }
  else {
    document.getElementById("dc").innerHTML = dc;
  }
}




function calccom() {
  calcin();
  calchp();
  calcac();
  calcsp();
  calcdc();
}

// CALCULATE BUTTON
function calcall() {
  if (document.getElementById("lvl").value < 1) {
    document.getElementById("lvl").value = 1;
  }
  calcpro();
  calcmos();
  calccom();
}

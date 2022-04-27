// NAME AND SUFFIX GENERATOR (suffix is waaaay at the end)

// NAME GENERATOR FUNCTION STUFF

// LETTER GROUPS
// vowels
var vo = ["a","e","i","o","u","y"]
// consonants
var co = ["b","c","d","f","g","h","j","k","m","n","p","q","t","v","w","x","z"]
// soft consonants
var sc = ["l","r","s"]
// compound consonants
var cc = ["kn","ch","rh","gh","sh","th"]

// FUNCTION VARIABLES
// what comes out in the end - built as the fuction loops
var output = ""
// name length
var len = 0
// letter nubmer - for array id
var letternum = 0
// number for determining consonant group/number of consonants to pull from
// (2 is just "l" and "r", 8 would get you to "g", so on through "th")(scans sc then co then cc)
var num = 0
// letter to add/most recent
var currentletter = ""
// consonant counter
var conso = 0
// vowel counter
var vowlo = 0
// letterpicker roll
var rollout = 0

// VOWEL GENERATOR - sets currentletter, updates "output", adjusts counters
function vowel() {
  letternum = Math.floor(Math.random() * 6)
  currentletter = vo[letternum];
  output += currentletter
  conso = 0
  vowlo++
}

// CONSONANT GENERATOR - adjusts letternum for relevant consonant list, sets currentletter, updates "output", adjusts counters
function consonant(num) {
  letternum = Math.floor(Math.random() * num)
  if (letternum < 3) {
    currentletter = sc[letternum];
  }
  else if (letternum < 20) {
    currentletter = co[letternum-3];
  }
  else {
    currentletter = cc[letternum-20];
  }
  output += currentletter
  vowlo = 0
  conso++
}

// CONSONANT OR VOWEL LETTERPICKER - rolls random 0-4, 0-1 generates a vowel, 2-4 generates a consonant
function roll(num) {
  rollout = Math.floor(Math.random() * 5);
  if (rollout == 0||
      rollout == 1) {
    vowel();
  }
  else {
    consonant(num);
  }
}


// where I think "function namegen()" should go
function namegen() {

  output = ""

// FIRST LETTER
  roll(26);

// SECOND LETTER
  if (currentletter == "a"||
      currentletter == "e"||
      currentletter == "i"||
      currentletter == "o"||
      currentletter == "u"||
      currentletter == "y") {
    roll(26);
  }
  else if (currentletter == "l"||
           currentletter == "r"||
           currentletter == "rh"||
           currentletter == "ch"||
           currentletter == "kn") {
    vowel();
  }
  else if (currentletter == "s") {
    roll(22);
  }
  else {
    roll(2);
  }

// REMAINING LETTERS
  len = 1 + Math.floor(Math.random() * 5);
  for (var i=0; i<len; i++) {
    if (vowlo > 1) {
      consonant(26);
    }
    else if (conso > 1) {
      vowel();
    }
    else if (currentletter == "a"||
             currentletter == "e"||
             currentletter == "i"||
             currentletter == "o"||
             currentletter == "u"||
             currentletter == "y"||
             currentletter == "l"||
             currentletter == "r"||
             currentletter == "s") {
      roll(26);
    }
    else if (currentletter == "kn"||
             currentletter == "ch"||
             currentletter == "rh"||
             currentletter == "gh"||
             currentletter == "sh"||
             currentletter == "th") {
      roll(2);
    }
    else {
      rollout = Math.floor(Math.random() * 5);
      if (rollout == 0) {
        output += currentletter
        vowlo = 0
        conso++
      }
      else {
        roll(3);
      }
    }
  }

// PUMP OUT "OUTPUT"
  return output + " ";
}

// ADDS TO HTML - FIRST AND SECOND NAME
function namewrite() {
  document.getElementById("nam").value = namegen() + namegen();
}







// SUFFIX GEN
var suffix = ""
var suffnum = 0
var suf = ["dead","hairless","sadistic","metal","wild","domesticated","abnormal",
           "medicated","cocky","massive","disrespectful","impressive","out of control",
           "internet worthy","hilarious","sexy","hot","very tactful","bearded","duck-like",
           "violent","slimy","insanely creepy","embarrassed to the bone","self-centered",
           "talking","naked","angry","shaky","deep","sick","zippy","sticky","fluffy",
           "frozen","unholy","painfully honest","filthy","fighting","bonkers","harsh",
           "frisky","greedy","crawly","insane","hideous","ungodly","abusive","drunken",
           "hateful","idiotic","twisted","useless","yapping","magical","indecent",
           "godawful","arrogant","confused","flirting","high-end","insecure","maniacal",
           "sickened","slippery","stubborn","tripping","vengeful","sinister","costumed",
           "cowardly","haunting","startled","alcoholic","demanding","shivering","offensive",
           "nighttime","startling","disgusting","slap happy","disturbing","adulterous",
           "blathering","flickering","rebellious","impertinent","bull headed","hyperactive",
           "infuriating","outnumbered","pea-brained","territorial","underhanded","zombie like",
           "mischievous","at-the-ready","free-loading","house-broken","up-to-no-good",
           "cruel-hearted","misunderstood","narrow-minded","self-absorbed","bat-shit-crazy",
           "fiercely-loyal","out-of-control","fear-inspiring","bat shit crazy","mentally impaired"];

110


function suffixgen() {
  suffix = ""
  sufnum = 0

  sufnum = Math.floor(Math.random() * 110)

  suffix = suf[sufnum]

  document.getElementById("suf").value = "the " + suffix;
}

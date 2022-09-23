
// set variables:
// r is element to edit property of
var r = document.querySelector(':root');
// colors is an array of color options
 var colors = ['#feecef',
              '#fceeea',
              '#f7f0e5',
              '#f1f2e4',
              '#e9f4e7',
              '#e4f5ec',
              '#e2f5f2',
              '#e4f3f8',
              '#e9f2fb',
              '#f1effc',
              '#f8edfa',
              '#fdecf5'];

var colors2 = ['#ffe5e9',
              '#fce7e0',
              '#fce7e0',
              '#f5e9da',
              '#ebedd9',
              '#e0efdc',
              '#d8f1e3',
              '#d4f1ed',
              '#d7eff5',
              '#e0ecfb',
              '#ebe9fc',
              '#f5e6f9',
              '#fde4f2'];

// define the random color function
function randomLumin() {

  // sets the --front variable to a random value from the array
  r.style.setProperty('--two', colors2[Math.floor(Math.random()*12)]);

}

// run the function - sets random color
randomLumin();

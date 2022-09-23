
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
              'fdecf5'];

// define the random color function
function randomLumin() {

  // sets the --front variable to a random value from the array
  r.style.setProperty('--front', colors[Math.floor(Math.random()*12)]);

}

// run the function - sets random color
randomLumin();

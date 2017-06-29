var powerPelletEating = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if(powerPelletEating == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEating = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long dat in the maze.');

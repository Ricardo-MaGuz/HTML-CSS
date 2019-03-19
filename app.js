// Rover Object Goes Here
// ======================
const rover={
  direction:"N",
  x:0,
  y:0,
  travelLog: []
}
const gridSize ={
  x: 10,
  y: 10
}
const grid = []
makeGrid(grid, gridSize)
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log("turnLeft was called!")
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
  console.log("turnRight was called!")
}

function moveForward(rover){
    let prevX = rover.x;
    let prevY = rover.y;
  switch (rover.direction) {
    case 'N':
      rover.y--;
      break;
    case 'S':
      rover.y++;
      break;
    case 'E':
      rover.x++;
      break;
    case 'W':
      rover.x--;
      break;
  }
  rover.travelLog.push([prevX, prevY]);
  console.log("EL rover está en: X:"+rover.x+"  Y:"+rover.y)
}

function moveBackward(rover, grid){
  var prevX = rover.x;
  var prevY = rover.y;

  switch (rover.direction) {
    case 'N':
      rover.y++;
      break;
    case 'S':
      rover.y--;
      break;
    case 'E':
      rover.x--;
      break;
    case 'W':
      rover.x++;
      break;
  }
  rover.travelLog.push([prevX, prevY]);
  console.log("EL rover está en: X:"+rover.x+"  Y:"+rover.y)
}

function makeGrid(grid, gridSize) {
  for (var i = 0; i < gridSize.x; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize.y; j++) {
      grid[i][j] = '';
    }
  }
}
function starRover(order, rover) {
  for (var i = 0; i < order.length; i++) {
    switch (order[i]) {
      case 'f':
        moveForward(rover, grid)
        break
      case 'b':
        moveBackward(rover, grid)
        break
      case 'r':
        turnRight(rover)
        break
      case 'l':
        turnLeft(rover)
        break
      default:
        console.log('¡La orden "' + order[i] + '" es inválida! ' +'Las órdenes válidos son: "f", "b", "r", or "l"')
        break;
    }
  }
let log = '';
rover.travelLog.forEach(function(position) {
  log += '[' + position[0] + ',' + position[1] + '] ';
});
console.log('Travel log: ' + log);

console.log('Posición actual: [' + rover.x + ',' + rover.y + ']');

console.table(grid);
}

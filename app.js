
// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  coordinates: {
    lat: 0,
    long: 0
  },
  travelLog: [ ]
}

// ======================
function turnLeft(rover){
  switch(rover.direction) {
    case 'N': {
      rover.direction = 'W';
       break ;
    }
    case 'S': {
      rover.direction = 'E';
       break ;
    }
    case 'E': {
      rover.direction = 'N';
       break ;
    }
    case 'W': {
      rover.direction = 'E'
       break ;
    }
  console.log("turnLeft was called!");
  
 }
}
function turnRight(rover){
  switch(rover.direction) {
    case 'N': {
      rover.direction = 'E';
      break ;
    }
    case 'S': {
      rover.direction = 'W';
       break ;
    }
    case 'E': {
      rover.direction = 'S';
       break ;
    }
    case 'W': {
      rover.direction = 'N'
       break ;
    }
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
   if (rover.direction === 'W'){
     rover.coordinates.lat = rover.coordinates.lat - 1;
       }
   if (rover.direction === 'N'){
     rover.coordinates.long = rover.coordinates.long + 1;
  }
  if (rover.direction === 'E'){
     rover.coordinates.lat = rover.coordinates.lat + 1;
  }
   if (rover.direction === 'S'){
     rover.coordinates.long = rover.coordinates.long - 1;
  }
  // const coordinates = Object.assign({}, rover.coordinates);
  const x = rover.coordinates.lat;
  const y = rover.coordinates.long;
  const obj = {
    x,
    y
  }
  rover.travelLog.push(obj);
  console.log("moveForward was called")
  console.log(rover.coordinates);

}

function move(commands) {
 for (var i = 0; i < commands.length; i++) {
    if (commands[i] === 'f') {
    moveForward(rover);
  } else if (commands[i] === 'r') {
    turnRight(rover);
  } else if (commands[i] === 'l') {
    turnLeft(rover);
  }
 }
}
console.log(rover);
move("rffrfflfrff");



console.log(rover.travelLog)

//Trial 1 - create a Manager array and return it



let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;

}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Trial 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation) {

  if (formation.length == 0) {
    return null;
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return play;

}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

/*
/*
/*
/*  @ The game starts
/*
*/

//Trick - 1 - Filter players that debuted in ___ year
//Uncomment this

function filterByDebut(year) {
  var arr = [];
  players.forEach(element => {
    if (element.debut == year) {
      arr.push(element);
    }
  });
  return arr;
}

//Trick2 - Filter players by the position
//Uncomment this

function filterByPosition(position) {
  var arr = [];
  players.forEach(element => {
    if (element.position == position) {
      arr.push(element);
    }
  });
  return arr;
}
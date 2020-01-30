//Trial 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
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

function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  } else {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    };
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Trial 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      filteredArray[count++] = players[i];
    }
  }
  return filteredArray;
}

//Trial 4 - Filter players that play at the position _______

function filterByPosition(position) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].position === position) {
      filteredArray[count++] = players[i];
    }
  }
  return filteredArray;
}

//Trial 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        filteredArray[count++] = players[i];
        break;
      }
    }
  }
  return filteredArray;
}

//Trial 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, timesWon) {
  let filteredArray = [];
  let count = 0,
    tempTimes = 0;
  for (let i = 0; i < players.length; i++) {
    tempTimes = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        if (++tempTimes >= timesWon) {
          filteredArray[count++] = players[i];
        }
      }
    }
  }
  return [...new Set(filteredArray)];
}

//Trial 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          filteredArray[count++] = players[i];
          break;
        }
      }
    }
  }
  return filteredArray;
}

//Trial 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (
      players[i].awards.length >= noOfAwards &&
      players[i].team == team &&
      players[i].age <= age
    ) {
      filteredArray[count++] = players[i];
    }
  }

  return filteredArray;
}

//Challenge 1 - Sort players in descending order of their age
//Challenge 1 - Sort players in descending order of their age
function sortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
  return players;
}

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filteredPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < filteredPlayers.length; i++) {
    for (let j = i + 1; j < filteredPlayers.length; j++) {
      if (filteredPlayers[i].awards.length < filteredPlayers[j].awards.length) {
        let temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}

//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByPlayerName(players) {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].name > players[j].name) {
        let temp = players[i].name;
        players[i].name = players[j].name;
        players[j].name = temp;
      }
    }
  }
  return players;
}

function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let filteredArray = [];
  let count = 0;
  let aCount = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].country === country) {
      aCount = 0;
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name === awardName) {
          ++aCount;
        }
      }

      if (aCount == noOfTimes) filteredArray[count++] = players[i];
    }
  }
  return sortByPlayerName(filteredArray);
}

/*Judgement 2 - Sort players that are older than _____ years in alphabetical order
                Sort the awards won by them in reverse chronological order*/
function sortAwardsByYear(awards) {
  for (let i = 0; i < awards.length; i++) {
    for (let j = i + 1; j < awards.length; j++) {
      if (awards[i].year < awards[j].year) {
        let temp = awards[i].name;
        awards[i].name = awards[j].name;
        awards[j].name = temp;
      }
    }
  }
  return awards;
}

function sortByNamexOlderThan(age) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].age >= age) {
      filteredArray[count] = players[i];
      filteredArray[count].awards = sortAwardsByYear(
        filteredArray[count].awards
      );
      count++;
    }
  }
  return sortByPlayerName(filteredArray);
}

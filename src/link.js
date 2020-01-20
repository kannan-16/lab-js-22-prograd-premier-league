const managerDetails = document.querySelector(".grid-container").children;
//checking trial 1
try {
  [...managerDetails].forEach(function (element, index) {
    element.querySelector(".insidetext").textContent = manager[index];
  });
} catch (e) {
  console.log(e);
}

//checking trial 2
const defenders = document.querySelector(".defence");
const midfielders = document.querySelector(".midfield");
const forwards = document.querySelector(".forward");

try {
  for (let i = 0; i < formationObject.defenders; i++) {
    defenders.innerHTML += `<img src="./assets/player.svg" alt="" class="defenders"></img>`;
  }
  for (let i = 0; i < formationObject.midfielders; i++) {
    midfielders.innerHTML += `<img src="./assets/player.svg" alt="" class="defenders"></img>`;
  }
  for (let i = 0; i < formationObject.forwards; i++) {
    forwards.innerHTML += `<img src="./assets/player.svg" alt="" class="defenders"></img>`;
  }
} catch (e) {
  console.log(e);
}

//populate all players
const playerContainer = document.querySelector(".squad");

function createCards(players) {
  players.forEach(player => {
    let awardsTpl = "";
    player["awards"].forEach(element => {
      awardsTpl += `<p class="minor-text">${element.name}</p>`;
    });
    let tpl =
      `<div class="footballer-card">
      <div class="photo"><img
              src="${player.url}"
          alt="photo" class="player-photo"></div>
      <div class="major-details">
          <div class="half">
              <span>${player.name}</span>
          </div>
          <div class="second-half">
              <p class="minor-title">TEAM</p>
              <p class="smalltext">${player.team}</p>
          </div>
      </div>
      <div class="minor-details">
          <div class="minor-half">
              <div class="minor-detail-container">
                  <p class="minor-title">AGE</p>
                  <p class="minor-text">${player.age}</p>
              </div>
              <div class="minor-detail-container">
                  <p class="minor-title">NATIONALITY</p>
                  <p class="minor-text">${player.country}</p>
              </div>
              <div class="minor-detail-container">
                  <p class="minor-title">PPL DEBUT</p>
                  <p class="minor-text">${player.debut}</p>
              </div>
              <div class="minor-detail-container">
                  <p class="minor-title">POSITION</p>
                  <p class="minor-text">${player.position}</p>
              </div>
          </div>
          <div class="minor-second-half">
              <p class="minor-title">AWARDS</p>` +
      awardsTpl +
      `</div> </div> </div>`;
    playerContainer.innerHTML += tpl;
  });
}

//populate filter elements
//all player positions
const positions = [...new Set(players.map(e => e.position))].sort();
positions.forEach(e => document.querySelector("#dropdown-position").innerHTML += "<p class=\"position\">" + e + "</p>");

//all debut years (sorted)
const debutYears = [...new Set(players.map(e => e.debut))].sort();
debutYears.forEach(e => document.querySelector("#dropdown-debut").innerHTML += "<p class=\"year\">" + e + "</p>");

//all awards won (sorted)
const awards = [...new Set(players.map(e => e.awards))];
//max no of awards won by any player
var maxAwardCount = 0;
const awardNames = [];
players.forEach(e => {
  maxAwardCount = (maxAwardCount < e.awards.length) ? e.awards.length : maxAwardCount;
  e.awards.forEach(f => (awardNames.indexOf(f.name) == -1) ? awardNames.push(f.name) : "")
});
awardNames.sort();
awardNames.forEach(e => document.querySelector("#dropdown-award").innerHTML += "<p class=\"award\">" + e + "</p>");

//all player countries
const countries = [...new Set(players.map(e => e.country))].sort();
countries.forEach(e => document.querySelector("#dropdown-country").innerHTML += "<p>" + e + "</p>");

//all player teams
const teams = [...new Set(players.map(e => e.team))].sort();
teams.forEach(e => document.querySelector("#dropdown-team").innerHTML += "<p>" + e + "</p>");

//max and min age among players (for age slider)
var minAge = 100;
var maxAge = 0;
players.forEach(e => {
  minAge = (minAge > e.age) ? e.age : minAge;
  maxAge = (maxAge < e.age) ? e.age : maxAge;
});

//checking trial 3
try {
  createCards(filterByDebut(year));
} catch (e) {
  console.log(e);
}

//checking trial 4
try {
  createCards(filterByPosition(position));
} catch (e) {
  console.log(e);
}

//checking trial 5
try {
  createCards(filterByAward(awardName));
} catch (e) {
  console.log(e);
}

//checking trial 6
try {
  createCards(filterByAwardxTimes(awardName, timesWon));
} catch (e) {
  console.log(e);
}

//checking trial 7
try {
  createCards(filterByAwardxCountry(awardName, country));
} catch (e) {
  console.log(e);
}

//checking trial 8
try {
  createCards(filterByNoOfAwardsxTeamxAge(noOfAwards, team, age));
} catch (e) {
  console.log(e);
}

//checking challenge 1
try {
  createCards(sortByAge());
} catch (e) {
  console.log(e);
}

//checking challenge 2
try {
  createCards(filterByTeamxSortByNoOfAwards(team));
} catch (e) {
  console.log(e);
}

//checking judgement 1
try {
  createCards(sortByNamexAwardxTimes(awardName, noOfTimes, country));
} catch (e) {
  console.log(e);
}

//checking judgement 2
try {
  createCards(sortByNamexOlderThan(age));
} catch (e) {
  console.log(e);
}

//filter events
//debut year click handler

var debutClick = function (e) {
  console.log(e.target.innerHTML + " clicked");
  createCards(filterByDebut(e.target.innerHTML));
}
let debutYearEls = document.querySelectorAll(".year");
debutYearEls.forEach(e => e.onclick = function (evt) {
  debutClick(evt);
});

//position click handler
var positionClick = function (e) {
  console.log(e.target.innerHTML + " clicked");
  createCards(filterByPosition(e.target.innerHTML));
}
let positionEls = document.querySelectorAll(".position");
positionEls.forEach(e => e.onclick = positionClick);

//award click handler
var awardClick = function (e) {
  console.log(e.target.innerHTML + " clicked");
  createCards(filterByAward(e.target.innerHTML));
}
let awardEls = document.querySelectorAll(".award");
awardEls.forEach(e => e.onclick = awardClick);
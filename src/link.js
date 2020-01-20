const managerDetails = document.querySelector(".grid-container").children;
//checking trial 1
try {
  [...managerDetails].forEach(function(element, index) {
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

//populare all players
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
createCards(players);
const debutYears = [...new Set(players.map(e => e.debut))];
console.log(debutYears);
const positions = [...new Set(players.map(e => e.position))];
console.log(positions);

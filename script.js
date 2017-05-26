// jshint esversion: 6
let teamArray = [];
let playerArray = [];

$(document).ready(function() {
  $.ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1i56pn2V7zMWfdJr8ZA-snJyDpbtEZRpt0Xdp3sOSt1Q/1/public/values?alt=json',
    dataType: 'jsonp',
    success: function(response) {
      let responses = response.feed.entry;
      let team = response.feed.entry[Math.floor(Math.random() * responses.length)];

      // Building an array of teams so it is easier to pick teams and remove
      // them from the array as they are picked.
      for (let i = 0; i < response.feed.entry.length; i++) {
        teamArray.push(response.feed.entry[i].gsx$teams.$t);
      }
      console.log(teamArray);
    }
  });
  $.ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1i56pn2V7zMWfdJr8ZA-snJyDpbtEZRpt0Xdp3sOSt1Q/2/public/values?alt=json',
    dataType: 'jsonp',
    success: function(response) {
      let playerNumber = Math.floor(Math.random() * response.feed.entry.length);

      // Building an array of players so it is easier to pick players and remove
      // them from the array as they are picked.
      for (let i = 0; i < response.feed.entry.length; i++) {
        playerArray.push(response.feed.entry[i].gsx$players.$t);
      }
      console.log(playerArray);
    }
  });

});

let assignTeams = setTimeout(function() {
  let assignments = [];
  arrayLength = playerArray.length;
  for (let j = 0; j < arrayLength; j += 2) {
    p1 = playerArray.splice(Math.floor(Math.random() * playerArray.length), 1);
    p2 = playerArray.splice(Math.floor(Math.random() * playerArray.length), 1);
    team1 = teamArray.splice(Math.floor(Math.random() * teamArray.length), 1);
    console.log("team" + j/2 + ": " + team1);
    let superTeam = {p1, p2, team1};
    assignments.push(superTeam);
    // assignments.push(superTeam);
    console.log("superTeam: " + superTeam.p1 + superTeam.p2 + superTeam.team1);
  }
  console.log(assignments);
  // console.log(assignments);
}, 2000);


// Now we can push the content of assignments objects to divs in the HTML dynamically and generate a view of the teams. Pretty neat.

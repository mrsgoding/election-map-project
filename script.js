var candidateData = function(name, color)

{
  var politician = {};
  politician.name = name; //set name property to the value of the name parameter
  politician.color = color; //set color property to the value of the color parameter
  politician.electionResults = null;
  politician.totalVotes = 0;
  //method for tallying votes, added to factory function
  politician.tallyUpTotalVotes = function(){
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  }
  return politician;

};

var horatio = candidateData("Horatio Seymour", [132, 17, 11]);
var ulysses = candidateData("Ulysses Grant", [245, 141, 136]);

//set state object from third party code


console.log("Horatio's party color is " + horatio.color);
console.log("Ulysses's party color is " + ulysses.color);


horatio.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4 , 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

ulysses.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1,
3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//Changed election results
horatio.electionResults[9] = 1;
horatio.electionResults[4] = 17;
horatio.electionResults[43] = 11;

ulysses.electionResults[9] = 28;
ulysses.electionResults[4] = 38;
ulysses.electionResults[43] = 27;

//function to assign the winner of each state
var setStateResults = function(state){
 theStates[state].winner = null;

 if (horatio.electionResults[state] > ulysses.electionResults[state]) {
   theStates[state].winner = horatio;
   }

 else if (horatio.electionResults[state] < ulysses.electionResults[state]) {
   theStates[state].winner = ulysses
 }


 //change color of each state based on the winner
 var stateWinner = theStates[state].winner

 if (stateWinner !== null) {
   theStates[state].rgbColor = stateWinner.color;

 }else
   {theStates[state].rgbColor = [11,32,57];}


//create variables for each position on the table
var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0].children[0];
var body = stateInfoTable.children[1];

//populating state name
var stateName = header.children[0];
stateName.innerText = theStates[state].nameFull;

//populating state abbreviation
var stateAbbr = header.children[1];
stateAbbr.innerText = theStates[state].nameAbbrev;

//populating horatio name in state table
var horatioStateTable = body.children[0].children[0];
horatioStateTable.innerText = horatio.name;

//populating horatio state results in state table
var horatioStateTableResults = body.children[0].children[1];
horatioStateTableResults.innerText = horatio.electionResults[state];

//populating ulysses name in state table
var ulyssesStateTable = body.children[1].children[0];
ulyssesStateTable.innerText = ulysses.name;

//populating ulysses state results in state table
var ulyssesStateTableResults = body.children[1].children[1];
ulyssesStateTableResults.innerText = ulysses.electionResults[state];

//populating winner name in state table
var winnerStateTable = body.children[2].children[1];
if (theStates[state].winner === null){
  winnerStateTable.innerText = "DRAW";
} else {
  winnerStateTable.innerText = theStates[state].winner.name;
}

};


horatio.tallyUpTotalVotes();
ulysses.tallyUpTotalVotes();

//create a variable called winner
var winner = "???";

if (horatio.totalVotes > ulysses.totalVotes) {
  winner = horatio.name;
}

else if (ulysses.totalVotes > horatio.totalVotes) {
  winner = ulysses.name;
}

else {
  winner = "Draw";
}

console.log("And the winner is..." + winner + "!!!");

var countryResults = document.getElementById("countryResults");
var row = countryResults.children[0].children[0];

row.children[0].innerText = horatio.name;
row.children[1].innerText = horatio.totalVotes;
row.children[2].innerText = ulysses.name;
row.children[3].innerText = ulysses.totalVotes;
row.children[5].innerText = winner;

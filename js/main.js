const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 54 },
    { firstName: "Sam", lastName: "Hilo", age: 50 },
    { firstName: "Kona", lastName: "Wolff", age: 24 },
  ],
  _games: [
    { opponent: "MU", teamPoints: 40, opponentPoints: 3 },
    { opponent: "Chelsea", teamPoints: 0, opponentPoints: 20 },
    { opponnt: "Greyhound", teamPoints: 10, opponentPoints: 10 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bad", "Bunny", 29);

console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team._games);

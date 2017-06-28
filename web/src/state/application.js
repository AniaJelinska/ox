import request from 'superagent';

function nextMove (lastmove) {
  if (lastmove === "") return "x";
  if (lastmove === "o") return "x";
  return "o";
}

function hax (value) {
  const cellNumber = Number(value);
  return isNaN(cellNumber) ? 0 : cellNumber;
}

function initialize ({ state }) {
  request
    .get('http://localhost:3001/getstate')
    .send()
    .then(response => {
      const result = JSON.parse(response.text);
      state.set('application.board', result.board);
      state.set('application.lastMove', result.lastMove === "" ? "x" : result.lastMove);
    });
}

function makeMove ({ props, state }) {
  debugger;
  const value = hax(props);
  const move = nextMove(state.get('application.lastMove'));
  request
    .get(`http://localhost:3001/makemove/${move}/${value}`)
    .send()
    .then(response => {
      const result = JSON.parse(response.text);
      state.set('application.board', result.board);
      state.set('application.lastMove', result.lastMove);
    });
}

export default {
  state: {
    board: ['', '', '', '', '', '', '', '', ''],
    lastMove: "x"
  },
  signals: {
    initialize: [initialize],
    makeMove: [makeMove]
  }
};

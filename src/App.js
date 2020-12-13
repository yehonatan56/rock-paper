import React from 'react';
import StartGame from './components/startgame';


function App() {
  var clicked = 0;
  const playersresult = {};

  function checkwin() {}

  function result(result) {
    if (clicked >= 2) { // not server
      checkwin();
      return;
    }
    playersresult.push(result);
    console.log(playersresult);
    clicked++;
  }
  return (
    <div className="bg-dark">
      <StartGame pushfun={result}></StartGame>
      {/* <Gamebutton>3</Gamebutton> */}
    </div>
  );
}

export default App;
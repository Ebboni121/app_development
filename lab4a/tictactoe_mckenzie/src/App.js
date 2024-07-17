import logo from './logo.svg';
import './App.css';

import { useState} from 'react';

function Square({value,onSquareClick}) {
  //use State
  const [value, setValue] = useState(null);
  
  
  // click function
  function handleClick() {
    setValue("X");
  }

  return (
  <button className="square" onclick={onSquareClick}>{value}</button>
  );
  }

function App() {
  //setState
  const [squares, setSquares] = useState(Array(9).fill(null));
  // function toupdate the squares array holding your App’s state:
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
  
       <div>
        <h1 className='title'>Tic Tac Toe by Ebboni M</h1>
        <div className='boardconatiner'>
        <div className='board-row'>
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className='board-row'>
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className='board-row'>
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
        </div>
       </div>
     
    
  );
}

export default App;

import {useState} from "react";

export default function LudoBoard(){
    let blueStyle = {backgroundColor:"blue", color:"black"};
    let greenStyle = {backgroundColor:"green", color:"black"};
    let yellowStyle = {backgroundColor:"yellow", color:"black"};
    let redStyle = {backgroundColor:"red", color:"black"};
   

    let [moves, setMoves] = useState({blue:0, green:0, yellow:0, red:0})

    // let updateBlue = ()=>{
    //     moves.blue +=1;
    //     console.log(`moves.blue = ${moves.blue}`);
    //     setMoves({...moves});
    // };

    let updateBlue = ()=>{
        console.log(`moves.blue = ${moves.blue}`);
        setMoves({...moves,blue: moves.blue+1});
    }
    
    let updateYellow = ()=>{
        moves.green += 1;
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves({...moves,yellow: moves.yellow+1});
    }
    let updateRed = ()=>{
        console.log(`moves.red = ${moves.red}`);
        setMoves({...moves,red: moves.red+1});
    }
    let updateGreen = ()=>{
        console.log(`moves.green = ${moves.green}`);
        setMoves({...moves,green: moves.green+1});
    }
    return(
        <div>
            <h1>Game Begins!</h1>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={blueStyle} onClick={updateBlue}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={greenStyle} onClick= {updateGreen}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={yellowStyle} onClick= {updateYellow}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={redStyle} onClick= {updateRed}>+1</button>
            </div>
        </div>
    );
}

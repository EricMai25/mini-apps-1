import React from 'react';
import Col from './components/Col.jsx'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            current : 'red',
            startBoard :   [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]
            ]

        }
    }
    nextPlay(row , col ){
        const color = this.state.current === 'red' ? 'yellow' : 'red'
        let board  = this.state.startBoard

        for(var i = 5; i >= 0; i--){
            // if(board[i][col] != 0){
            //     continue
            // }
            // else{
            if(board[i][col]===0){
                board[i][col] = color
                break
            }
            // }
        }
        this.setState({
            current : color,
            startBoard : board
        })
        console.log(this.state.startBoard)
    }
    winner(board){


    }
    render(){
        return(
            <div>
                <Col click={this.nextPlay.bind(this)} color={this.state.current} board={this.state.startBoard} />
            </div>

        )
    }
}

// click={() => this.nextPlay} automatically bind(this) need es6
export default App
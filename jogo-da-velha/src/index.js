import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//------------------------------------------------------------
//referente a cada celular do tabuleiro

function Square(props) {
    return(
        <button 
        className="square"
        onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

//------------------------------------------------------------
//refetrente ao tabuleiro com todas as celulas dentro

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null), // [null, null ... 9x ]
            xIsNext: true
        }
    }

    //atualiza o estado do componente 
    handleClick(i) {
        const squares = [... this.state.squares]

        //inicializa o primeiro jogado com 'x' e atualiza o estado
        squares[i] = this.state.xIsNext? 'X' : 'O'
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }

    //função chama o componete Square - linha 5
    renderSquare(i){
        return (
            <Square 
              value= {this.state.squares[i]}
              onClick= {()=> this.handleClick(i)}
            />
        )
    }

    render() {
        const status = 'Proximo Jogador: ' + (this.state.xIsNext? 'X' : 'O')

        return(
            <div>
                <div className="status">{status}</div>

                {/* linhas do tabuleiro */}
                <div className="board-row">
                    {/* chama a função da linha 21 */}
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        )
    }
}

//-----------------------------------------------------------------
//tabuleiro com as informções do jogo ao lado
class Game extends React.Component {
    render() {
        return (
            <div className="game">

                <div className="game-board">
                    {/* chama o componente da linha 19 */}
                    <Board/>
                </div>

                <div className="game-info">
                    <div>{/* status */} </div>
                    <ol>{/* a fazer */} </ol>
                </div>

            </div>
        )
    }
}

//-----------------------------------------------------------------
// enciando todos os componentes para a página principal
ReactDom.render(
    <Game/>, document.getElementById('root')
)
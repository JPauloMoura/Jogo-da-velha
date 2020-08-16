import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//------------------------------------------------------------
//referente a cada celular do tabuleiro

class Square extends React.Component {
    render(){
        return(
            <button className="square">
                {/* a fazer */}
            </button>
        )
    }
}

//------------------------------------------------------------
//refetrente ao tabuleiro com todas as celulas dentro

class Board extends React.Component {
    //função chama o componete Square - linha 5
    renderSquare(i){
        return <Square />
    }

    render() {
        const status = 'Proximo Jogador: X'

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
                    {this.renderSquare(2)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(7)}
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
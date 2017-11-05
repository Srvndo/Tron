class Game extends React.Component {
    constructor (props) {
        super(props);
        this.startGame = this.startGame.bind(this);
        this.startEdithor = this.startEdithor.bind(this);
    }

    startGame () {

    }

    startEdithor () {
        ReactDOM.render(
            <Editor />,
            document.getElementById('root')
        )
    }

    render  () {
        return(
            <div className="text-center">
                <label style={{fontSize: "50px"}}>Tron</label>
                <br />
                <br />
                <button className="btn btn-primary" onClick={this.startGame}>Start 1v1</button>
                <br />
                <br />
                <button className="btn btn-primary" onClick={this.startGame}>Start 1vAI</button>
                <br />
                <br />
                <button className="btn btn-secondary" onClick={this.startEdithor}>Make Map</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)
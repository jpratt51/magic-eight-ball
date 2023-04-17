import answers from "./answers.js";
import "./App.css";
import EightBall from "./EightBall";

function App() {
    return (
        <div className="App">
            <EightBall answers={answers} />
        </div>
    );
}

export default App;

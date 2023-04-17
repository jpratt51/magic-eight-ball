import "./EightBall.css";

import { useState } from "react";

const EightBall = ({ answers }) => {
    const randNum = () => Math.floor(Math.random() * answers.length);

    const getAnswer = () => {
        const newNum = randNum();
        setAnswer(answers[newNum].msg);
        setColor(answers[newNum].color);
    };

    const reset = () => {
        setAnswer();
        setColor();
    };

    const [answer, setAnswer] = useState(getAnswer.msg);
    const [color, setColor] = useState(getAnswer.color);

    return (
        <div className="EightBall">
            <div
                id="EightBall-text"
                className={!color ? "black" : color}
                onClick={getAnswer}
            >
                {!answer ? "Think of a Question" : answer}
            </div>
            {answer && <button onClick={reset}>Reset</button>}
        </div>
    );
};

export default EightBall;

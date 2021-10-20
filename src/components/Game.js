import React, { useState, useEffect } from "react";

function Game(props) {
    const TIME_PER_GAME = 5;

    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(TIME_PER_GAME);
    const [wordCount, setWordCount] = useState(0);
    const [isGameRunning, setIsGameRunning] = useState(false);

    function handleChange(e) {
        setText(e.target.value);
    }

    useEffect(
        function () {
            if (isGameRunning && timeRemaining > 0) {
                setTimeout(function () {
                    setTimeRemaining(function (time) {
                        return time - 1;
                    });
                }, 1000);
            } else if (timeRemaining === 0) {
                setWordCount(countWords(text));
            }
        },
        [timeRemaining, isGameRunning]
    );

    function countWords(text) {
        let count = text.split(/\s+/).filter(function (word) {
            return word.length;
        }).length;
        return count;
    }

    return (
        <>
            <textarea value={text} onChange={handleChange} />
            <p>Time remaining: {timeRemaining}</p>
            <button onClick={() => setIsGameRunning(true)}>Start</button>
            <p>Word Count: {wordCount} </p>
        </>
    );
}

export default Game;

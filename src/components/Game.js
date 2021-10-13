import React, { useState } from "react";

function Game(props) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function countWords(text) {
        let count = text.split(/\s+/).filter(function (word) {
            return !!word;
        }).length;
        return count;
    }

    return (
        <>
            <textarea value={text} onChange={handleChange} />
            <p>Time remaining: ???</p>
            <button onClick={() => countWords(text)}>Start</button>
            <p>Word Count: </p>
        </>
    );
}

export default Game;

import "./App.css";

import Game from "./components/Game";

function App() {
    return (
        <div className="container">
            <header>
                <h1>How fast do you type?</h1>
            </header>
            <main>
                <Game />
            </main>
        </div>
    );
}

export default App;

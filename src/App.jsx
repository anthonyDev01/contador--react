import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>{count}</h1>
            <div className="button-container">
                <button
                    onClick={() => setCount(count + 1)}
                    className="learn-more"
                >
                    {" "}
                    Adicionar
                </button>

                <button
                    onClick={() => {
                        count > 0 && setCount(count - 1);
                    }}
                    className="learn-more"
                >
                    {" "}
                    Diminuir
                </button>
            </div>
        </div>
    );
}

export default App;

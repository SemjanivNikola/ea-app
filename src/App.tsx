import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import "./App.css";

function App() {
    const [value, setValue] = useState("");
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result: string) => {
            setValue(result);
        }
    });

    function toggle() {
        listen({ continuous: true });
    }

    return (
        <div>
            <textarea value={value} onChange={(event) => setValue(event.target.value)} />
            <button onMouseDown={listen} onMouseUp={stop}>
                🎤
            </button>
            <button onClick={toggle}>🎤 toggle listening</button>
            {listening && <div>Go ahead I'm listening</div>}
        </div>
    );
}

export default App;

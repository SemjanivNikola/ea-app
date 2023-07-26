// import { useSpeechRecognition } from "react-speech-kit";
import "./App.css";
import CreateDocumentScreen from "./features/create-document/CreateDocumentScreen";

function App() {
    // const [value, setValue] = useState("");
    // const { listen, listening, stop } = useSpeechRecognition({
    //     onResult: (result: string) => {
    //         setValue(result);
    //     }
    // });

    // function toggle() {
    //     listen({ continuous: true });
    // }

    return <CreateDocumentScreen />;
}

export default App;

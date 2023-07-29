import DocumentForm from "../document/form/DocumentForm";
import { IDocumentForm } from "../document/form/DocumentFormProps";
import AudioVisualizer from "./AudioVisualizer";

const initialValues: IDocumentForm = {
    title: "",
    description: "",
    draft: ""
};

const CreateDocumentScreen = () => {
    return (
        <div>
            <DocumentForm initialValues={initialValues} />
            <AudioVisualizer />
        </div>
    );
};

export default CreateDocumentScreen;

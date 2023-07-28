import DocumentForm from "../document/form/DocumentForm";
import { IDocumentForm } from "../document/form/DocumentFormProps";

const initialValues: IDocumentForm = {
    title: "",
    description: null,
    draft: ""
};

const CreateDocumentScreen = () => {
    return (
        <div>
            <DocumentForm initialValues={initialValues} />
        </div>
    );
};

export default CreateDocumentScreen;

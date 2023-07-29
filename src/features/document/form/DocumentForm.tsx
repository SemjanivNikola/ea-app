import TextInput from "@/common/text-input/TextInput";
import { useForm } from "@/hooks/useForm";
import { IDocumentForm } from "./DocumentFormProps";
import TextAreaInput from "@/common/text-input/TextAreaInput";

const DocumentForm = ({ initialValues }: { initialValues: IDocumentForm }) => {
    const { register } = useForm<IDocumentForm>(initialValues);

    return (
        <div style={{ backgroundColor: "white", padding: 24, width: 500, height: 500 }}>
            <form action="document" method="post">
                <TextInput label="Title*" {...register("title")} />
                <TextInput label="Description" {...register("description")} />
                <TextAreaInput label="Draft" {...register("draft")} />
            </form>
        </div>
    );
};

export default DocumentForm;

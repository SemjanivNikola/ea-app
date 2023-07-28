import {
    DataObject,
    ErrorsObject,
    FormProps,
    Register,
    RemoveError,
    SetData,
    SetError,
    SubmitForm
} from "@/types/FormProps";

export function useForm<T extends Record<string, string | number | boolean>>(initialValues: T): FormProps<T> {
    const data: DataObject<T> = initialValues;
    const errors: ErrorsObject<T> = {} as ErrorsObject<T>;

    const setData: SetData<T, keyof T> = (name, value) => {
        data[name] = value;
    };

    const __setError: SetError<T, keyof T> = (name, value) => {
        errors[name] = value;
    };

    const __removeError: RemoveError<T, keyof T> = (name) => {
        delete errors[name];
    };

    const register: Register<T> = (name, type = "text") => {
        return {
            id: name,
            name: name,
            value: data[name],
            type: type,
            onChange: ({ target }) => {
                setData(target.name, target.value);
            },
            error: errors[name]
        };
    };

    const submitForm: SubmitForm = (e) => {
        e.preventDefault();
    };

    return {
        data,
        setData,
        errors,
        register,
        submitForm
    };
}

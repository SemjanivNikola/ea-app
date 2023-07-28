import { InputHTMLAttributes } from "react";

export type DataObject<T> = Record<keyof T, string | number | boolean | undefined>;
export type SetData<T, K extends keyof T> = (name: K, value: string | number | boolean) => void;

export type ErrorsObject<T> = Record<Partial<keyof T>, string>;
export type SetError<T, K extends keyof T> = (name: K, value: string) => void;
export type RemoveError<T, K extends keyof T> = (name: K) => void;

type RegisterObject<K> = {
    id: K;
    name: K;
    value: string | number | boolean | undefined;
    type: InputHTMLAttributes<HTMLInputElement>["type"];
    onChange: (e: { target: { name: string; value: number | string | boolean } }) => void;
    error: string | undefined;
};
export type Register<T> = (
    name: keyof T,
    type?: InputHTMLAttributes<HTMLInputElement>["type"]
) => RegisterObject<keyof T>;

export type SubmitForm = (e: FormDataEvent) => void;

type InputAttributes<F extends Record<string, string | number | boolean | undefined>> = {
    data: DataObject<F>;
    errors: ErrorsObject<F>;
    setData: SetData<F, keyof F>;
    register: Register<F>;
    submitForm: SubmitForm;
};
export type FormProps<F extends Record<string, string | number | boolean | undefined>> = InputAttributes<F>;

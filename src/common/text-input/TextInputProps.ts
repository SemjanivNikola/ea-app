import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

interface TextInputProps {
    type: InputHTMLAttributes<HTMLInputElement>["type"];
    name: string;
    autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    isFocused?: boolean;
    error?: string;
    label: string;
    value?: InputHTMLAttributes<HTMLInputElement>["value"];
    readOnly?: InputHTMLAttributes<HTMLInputElement>["readOnly"];
    required?: InputHTMLAttributes<HTMLInputElement>["required"];
    onChange: (e: any) => void;
}

export type TextAreaInputProps = {
    rows?: TextareaHTMLAttributes<HTMLTextAreaElement>["rows"];
} & TextInputProps;

export interface DatePickerProps {
    name: string;
    label: string;
    value?: string | number;
    min?: string;
    max?: string;
    onChange: (e: any) => void;
}

export type TooltipTextInputProps = TextInputProps & { children: ReactNode };

export default TextInputProps;

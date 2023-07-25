import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps {
    type: InputHTMLAttributes<HTMLInputElement>["type"];
    name: string;
    autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    isFocused?: boolean;
    error?: string;
    label: string;
    value?: string | number;
    readOnly?: InputHTMLAttributes<HTMLInputElement>["readOnly"];
    required?: InputHTMLAttributes<HTMLInputElement>["required"];
    onChange: (e: any) => void;
}

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

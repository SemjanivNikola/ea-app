import { forwardRef, useRef } from "react";
import style from "./text-input.module.css";
import { TextAreaInputProps } from "./TextInputProps";

const TextAreaInput = forwardRef<HTMLTextAreaElement | null, TextAreaInputProps>(function TextAreaInput(
    { label, isFocused = false, error, rows = 15, ...otherProps },
    ref
) {
    const inputRef = ref ? (ref as unknown as HTMLTextAreaElement) : null;
    const input = useRef<HTMLTextAreaElement>(inputRef);

    return (
        <div className="relative mb-s text-start">
            <div className="relative">
                <textarea rows={rows} autoFocus={isFocused} ref={input} {...otherProps} />
                <label
                    id={`${otherProps.name}-label`}
                    htmlFor={otherProps.name}
                    className={`${style.input_label} ${style.idle} absolute px-s`}
                    style={{ transform: "translateY(-50%)" }}
                >
                    {label}
                </label>
            </div>
            <p className={style.input_error}>{error}</p>
        </div>
    );
});

export default TextAreaInput;

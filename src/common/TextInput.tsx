import TextInputProps from "./TextInputProps";
import { forwardRef, useEffect, useRef } from "react";

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(function TextInput(
    { label, isFocused = false, error, value, ...otherProps },
    ref
) {
    const inputRef = ref ? (ref as unknown as HTMLInputElement) : null;
    const input = useRef<HTMLInputElement>(inputRef);

    useEffect(() => {
        if (isFocused && input !== null) {
            input.current?.focus();
        }

        // If input has default value
        if (value) {
            const el = document.getElementById(`${otherProps.name}-label`);

            el?.classList.remove("top-[50%]");
            el?.classList.add("text-xs", "top-[0]");
        }
    }, []);

    function isInputFocued() {
        const input = document.getElementById(`${otherProps.name}`);
        return input === document.activeElement;
    }

    function handleFocus() {
        const hasValue = !!value;

        if (hasValue) return;
        const el = document.getElementById(`${otherProps.name}-label`);

        el?.classList.remove("top-[50%]");
        el?.classList.add("text-xs", "top-[0]");
    }

    function handleBlure() {
        const hasValue = !!value;

        if (hasValue) return;
        const el = document.getElementById(`${otherProps.name}-label`);

        // Return if still got focused
        if (isInputFocued()) return;

        el?.classList.remove("text-xs", "top-[0]");
        el?.classList.add("top-[50%]");
    }

    return (
        <div className="relative mb-2 w-full text-start">
            <div className="relative">
                <label
                    id={`${otherProps.name}-label`}
                    htmlFor={otherProps.name}
                    className="absolute left-2 top-[50%] px-1 bg-white transition-all
                        duration-150"
                    style={{ transform: "translateY(-50%)" }}
                >
                    {label}
                </label>
                <input
                    value={value}
                    className="text-input w-full outline-none rounded"
                    onFocus={handleFocus}
                    onBlur={handleBlure}
                    ref={input}
                    {...otherProps}
                />
            </div>
            <p className="h-5 pt-1 text-xs font-medium text-red-500">{error}</p>
        </div>
    );
});

export default TextInput;

import { useState } from "react";

export function useFormInput (intitialValue) {
    const [value, setValue] = useState();

    function handleChange (e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange : handleChange,
    }
};
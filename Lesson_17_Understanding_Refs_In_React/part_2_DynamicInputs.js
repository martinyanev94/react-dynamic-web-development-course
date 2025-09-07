import React, { useRef, useState, useEffect } from 'react';

const DynamicInputs = () => {
    const [inputs, setInputs] = useState(['']);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[inputs.length - 1]) {
            inputRefs.current[inputs.length - 1].focus();
        }
    }, [inputs]);

    const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const addInput = () => {
        setInputs([...inputs, '']);
    };

    return (
        <div>
            {inputs.map((input, index) => (
                <input
                    key={index}
                    ref={el => (inputRefs.current[index] = el)}
                    value={input}
                    onChange={e => handleChange(index, e.target.value)}
                    placeholder={`Input ${index + 1}`}
                />
            ))}
            <button onClick={addInput}>Add Input</button>
        </div>
    );
};

export default DynamicInputs;

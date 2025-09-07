import React, { useEffect, useState, useRef } from 'react';

const Title = () => {
    const [text, setText] = useState("");
    const mountedRef = useRef(true);

    useEffect(() => {
        fetch("https://api.example.com/data")
            .then(res => res.json())
            .then(data => {
                if (mountedRef.current) {
                    setText(data.title);
                }
            });

        return () => {
            mountedRef.current = false; // Cleanup function sets flag to false
        };
    }, []);

    return <h1>{text}</h1>;
};

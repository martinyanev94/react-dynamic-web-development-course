import React, { useEffect, useState } from 'react';

const App = ({ showTitle }) => {
    return showTitle ? <Title /> : null;
};

const Title = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        fetch("https://api.example.com/data")
            .then(res => res.json())
            .then(data => setText(data.title));
    }, []);

    return <h1>{text}</h1>;
};

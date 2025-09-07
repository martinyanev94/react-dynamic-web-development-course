import React, { useRef } from 'react';

const HighlightBox = () => {
    const boxRef = useRef(null);

    const highlight = () => {
        const box = boxRef.current;
        box.style.backgroundColor = 'yellow';
        setTimeout(() => {
            box.style.backgroundColor = '';
        }, 500);
    };

    return (
        <div>
            <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }} onClick={highlight} />
            <p>Click the box to highlight it!</p>
        </div>
    );
};

export default HighlightBox;

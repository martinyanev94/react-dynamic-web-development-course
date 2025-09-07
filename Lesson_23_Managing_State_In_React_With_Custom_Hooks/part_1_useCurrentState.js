import { useState } from 'react';

function useCurrent(initialState) {
    const [obj, setObj] = useState({ state: initialState });
    const dispatch = newState => {
        if (obj.state !== newState) {
            obj.state = newState;
            setObj({ ...obj });
        }
    };

    const getState = () => obj.state;
    return [getState, dispatch];
}

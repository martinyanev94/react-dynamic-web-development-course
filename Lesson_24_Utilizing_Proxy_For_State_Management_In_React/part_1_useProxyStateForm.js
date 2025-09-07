import React, { useState, useEffect } from 'react';

const useProxyState = (initialState) => {
    const [state, setState] = useState(initialState);
  
    const proxy = new Proxy(state, {
        set(target, prop, value) {
            target[prop] = value;
            setState({ ...target });  // Trigger re-render by spreading the target
            return true;
        }
    });
  
    return proxy;
};

const FormComponent = () => {
    const formState = useProxyState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        formState[name] = value;  // Use Proxy to set state
    };

    return (
        <form>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Email"
            />
        </form>
    );
};

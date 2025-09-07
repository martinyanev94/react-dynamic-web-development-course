import { useEffect } from 'react';

function useClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // If the clicked target is outside of the ref element
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}

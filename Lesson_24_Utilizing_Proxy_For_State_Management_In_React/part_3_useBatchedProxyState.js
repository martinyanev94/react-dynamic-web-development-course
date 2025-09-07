const useBatchedProxyState = (initialState) => {
    const [state, setState] = useState(initialState);
    const [pendingUpdates, setPendingUpdates] = useState({});
  
    const applyChanges = () => {
        setState((prev) => ({ ...prev, ...pendingUpdates }));
        setPendingUpdates({});
    };
  
    useEffect(() => {
        if (Object.keys(pendingUpdates).length > 0) {
            const timer = setTimeout(applyChanges, 100); // Batch apply after 100ms
            return () => clearTimeout(timer);
        }
    }, [pendingUpdates]);
  
    const createProxy = (obj) => {
        return new Proxy(obj, {
            set(target, prop, value) {
                pendingUpdates[prop] = value; // Store the edit in pending updates
                return true;
            }
        });
    };
    
    return createProxy(state);
};

const EnhancedProfileComponent = () => {
    const profileState = useBatchedProxyState({ user: { name: '', email: '' } });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        let current = profileState;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value; // Assign value without triggering immediate updates
    };

    return (
        <form>
            <input
                type="text"
                name="user.name"
                value={profileState.user.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="user.email"
                value={profileState.user.email}
                onChange={handleChange}
                placeholder="Email"
            />
        </form>
    );
};

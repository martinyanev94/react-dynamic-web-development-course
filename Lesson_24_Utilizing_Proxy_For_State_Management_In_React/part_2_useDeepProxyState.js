const useDeepProxyState = (initialState) => {
    const [state, setState] = useState(initialState);
  
    const createProxy = (obj) => {
        return new Proxy(obj, {
            set(target, prop, value) {
                if (typeof value === 'object' && value !== null) {
                    target[prop] = createProxy(value);
                } else {
                    target[prop] = value;
                }
                setState({ ...target });  // Trigger re-render when state changes
                return true;
            }
        });
    };
  
    return createProxy(state);
};

const ProfileComponent = () => {
    const profileState = useDeepProxyState({ user: { name: '', email: '' } });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');  // Expecting name input like 'user.name'
      
        let current = profileState;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;  // Set the value using the deep path
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

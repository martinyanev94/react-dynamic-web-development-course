const UserForm = () => {
    const [getName, setName] = useCurrent('');
 
    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${getName()}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={getName()} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

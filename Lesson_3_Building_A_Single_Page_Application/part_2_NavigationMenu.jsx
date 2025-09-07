const Nav = ({ selected, onSelect }) => {
    const menus = [
        { key: 'home', label: 'Home' },
        { key: 'product', label: 'Product' }
    ];

    return (
        <nav>
            {menus.map(item => (
                <button
                    key={item.key}
                    onClick={() => onSelect(item.key)}
                    style={{ fontWeight: selected === item.key ? 'bold' : 'normal' }}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
};

export default Nav;

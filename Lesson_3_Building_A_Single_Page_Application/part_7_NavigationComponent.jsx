import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
        </nav>
    );
};

export default Nav;

const Routes = ({ selected }) => {
    return (
        <div>
            {selected === 'home' && <Home />}
            {selected === 'product' && <Product />}
        </div>
    );
};

export default Routes;

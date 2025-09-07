useEffect(() => {
    const handleScroll = () => {
        console.log('Scrolling...');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const filteredResults = useMemo(() => {
    if (!debouncedQuery) return [];
    return fruits.filter(fruit => fruit.includes(debouncedQuery));
}, [debouncedQuery]);

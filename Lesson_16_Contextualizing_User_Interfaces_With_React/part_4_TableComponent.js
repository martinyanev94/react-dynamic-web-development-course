const TableContext = React.createContext({
    rows: [],
    cols: [],
    row: {}
});
const Table = ({ cols, rows }) => {
    const value = { cols, rows };
    
    return (
        <TableContext.Provider value={value}>
            {rows.map(row => (
                <TableRow row={row} />
            ))}
        </TableContext.Provider>
    );
};

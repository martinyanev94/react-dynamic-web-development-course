const DeleteCell = () => {
    const { row, rows, setRows } = useContext(TableContext);

    const onClick = () => {
        const newRows = rows.filter(r => r.title !== row.title);
        setRows(newRows);
    };

    return (
        <div>
            <button onClick={onClick}>Remove</button>
        </div>
    );
};

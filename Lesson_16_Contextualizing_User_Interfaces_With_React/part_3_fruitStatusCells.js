const fruits = [
    { title: 'Apple', status: true },
    { title: 'Orange', },
    { title: 'Strawberry' },
    { title: 'Pineapple', status: true },
    { title: 'Watermelon' }
];
const DefaultCell = ({ value }) => {
    return <div>{value}</div>;
};
const StatusCell = ({ value }) => {
    return <div>{value ? 'Nice' : 'Ok'}</div>;
};

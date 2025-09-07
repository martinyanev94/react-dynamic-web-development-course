const UserProfileList = ({ users }) => {
    const renderedUsers = useMemo(() => {
        return users.map(user => (
            <UserProfile key={user.id} user={user} />
        ));
    }, [users]);

    return <div>{renderedUsers}</div>;
};

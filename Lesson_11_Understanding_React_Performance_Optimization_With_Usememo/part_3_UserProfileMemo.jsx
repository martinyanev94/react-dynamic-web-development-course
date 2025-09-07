const UserProfile = React.memo(({ user }) => {
    // complex rendering logic here
    return <div>{user.name}</div>;
});

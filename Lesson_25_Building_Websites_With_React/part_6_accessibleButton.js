const AccessibleButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} aria-label={children}>
      {children}
    </button>
  );
};

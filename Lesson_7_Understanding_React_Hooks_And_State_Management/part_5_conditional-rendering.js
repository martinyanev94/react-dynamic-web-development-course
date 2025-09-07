const ConditionalExample = ({ isVisible }) => {
  const [stateA] = useState('A');
  const [stateB] = useState('B');

  return (
    <div>
      {isVisible && <p>{stateA}</p>}
      <p>{stateB}</p>
    </div>
  );
}

import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

const StyledButton = () => {
  return <Button>Click Me!</Button>;
};
const dynamicColor = 'green';
const DynamicButton = styled.button`
  background-color: ${dynamicColor};
  color: white;
  padding: 10px;
`;

const ThemeContext = React.createContext({
    mode: 'light', // or 'dark'
});
const Button = () => {
    const theme = useContext(ThemeContext);
    return (
        <ButtonStyle mode={theme.mode}>
            Ok
        </ButtonStyle>
    );
};

const ButtonStyle = styled.button`
    color: ${({ mode }) => mode === 'light' ? 'black' : 'white'};
`;

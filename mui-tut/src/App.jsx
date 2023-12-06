import './App.css';
import Test from './Test';

function App() {

  const theme = useTheme();
  console.log(theme);

  return (
    <Box>
      <Typography color="primary">
        Hello World
      </Typography>
    </Box>
  );
}

export default App;

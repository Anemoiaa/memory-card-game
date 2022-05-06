import { useState } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton'
import GitHub from '@mui/icons-material/GitHub';
import GameBoard from './components/Game/GameBoard';
import SelectLevel from './components/UI/SelectLevel';
import RotateDialog from './components/RotateDialog';
import DivText from './components/DivText';
import './App.css';

const MainContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '10vh',
});



function App() {
  const [boardSize, setBoardSize] = useState(4);
  return (
    <>
      {boardSize > 4 && <RotateDialog />}
      <MainContainer>
        <SelectLevel onChange={setBoardSize} value={boardSize} />
        <GameBoard boardSize={boardSize} />
      </MainContainer>
      <DivText>
        HI! THIS IS MY EDUCATIONAL PROJECT WITH REACT AND MATERIAL UI. CHECK OUT MY GITHUB
      </DivText>
      <DivText>
        <Link href='http://github.com/anemoiaa'> 
            <IconButton>
              <GitHub sx={{fontSize:'1.538em'}} />
            </IconButton>
          </Link>
        </DivText>
    </>
    

  )
}

export default App;
import Button from '@mui/material/Button';
import PinAuth from './PinAuth';
import { Link, useNavigate } from 'react-router-dom';

function MainMenu() {
    const navigate = useNavigate();
    const redirect = () =>{
        navigate('/e-queue')
    }
  return (
    <div >
     <div><Button sx={{
        fontSize: '40px',
      }} className='btn' variant="contained">Касса</Button></div>
     <div><Button sx={{
        fontSize: '40px',
      }} className='btn' variant="contained">Карта</Button></div>
     <div><Button sx={{
        fontSize: '40px',
      }} className='btn' variant="contained">Кредит</Button></div>
     <div><Button LinkComponent={PinAuth} sx={{
        fontSize: '40px',
      }} className='btn' variant="contained" onClick={redirect}> Электронная очередь</Button></div>
    </div>
  );
}

export default MainMenu;

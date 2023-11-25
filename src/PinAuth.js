
import TextField from '@mui/material/TextField';
import { Input, InputLabel,Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function PinAuth() {
    const [pin, setPin] = useState('')
    const navigate = useNavigate();
    const redirect = () =>{
        navigate('/e-queue')
    }
   const getEnumber = () => {
     fetch(`https://localhost:7115/api/Queues/GetByPin?pin=${pin}&depId=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data != -1){
            localStorage.setItem('enumber', JSON.stringify(data));
            navigate('/print')
        }
    }
        )
    .catch(error => console.error(error));

   }
  return (
    <div className="PinAuth" >
        <Input value={pin}
        onChange={e => setPin(e.target.value)}
        sx={{
            fontSize: '50px',
            width: '600px',
            height: '150px',
          }} 
          placeholder='Введите свой пин'
          id="input-with-icon-adornment"
        />
        <div><Button LinkComponent={PinAuth} sx={{
        fontSize: '40px',
      }} className='btn' variant="contained" onClick={getEnumber}> Готово</Button></div>
    </div>
  );
}

export default PinAuth;

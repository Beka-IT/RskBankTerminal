
import TextField from '@mui/material/TextField';
import { Input, InputLabel,Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Print() {
  const enumber = localStorage.getItem('enumber')
  return (
    <div className="Print" >
        <div><Button sx={{
        fontSize: '40px',
      }} className='btn' variant="contained">Ваш номер: {enumber}</Button></div>
    </div>
  );
}

export default Print;

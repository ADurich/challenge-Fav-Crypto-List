import * as React from 'react';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {

   

  return (

      <div>   
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">Moneda eliminada</Alert>
          </Stack>
          <Link to='/FavCurrencies'>
            <Button variant="contained" sx={{mt:2}}>
                  Volver
            </Button>
          </Link>
      </div>
  );
}




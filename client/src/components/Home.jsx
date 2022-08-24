import React from "react";
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavCurrencies} from "../actions/index";
import Card from "./Card";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Home() {

   const dispatch = useDispatch();
   const navigate=useNavigate();
   const favCurrencies=useSelector((state)=> state.favCurrencies);

     useEffect(() => {
       dispatch(getFavCurrencies());
   }, [dispatch]);

   const handleAdd=(event)=>{
    event.preventDefault();
    navigate('/Currencies')
   }  

  return (

      <div>       
        <>
          {favCurrencies&&
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                  {favCurrencies.map((coin) => { 
                      return (
                        <Grid key={coin.id} item xs={12} sm={6}md={4} lg={3}>
                            <Card name={coin.name} image={coin.img} price={coin.price} id={coin.id} 
                            currenciestoconvert={coin.currenciestoconvert} amount={coin.amount}
                            ticker={coin.ticker} key={coin.id} />             
                        </Grid> 
                    ); 
                  })}
                </Grid>
              </Box>
              } 
        </>
        
            <div id="add">
              <Button variant="contained" color="success" onClick={handleAdd} sx={{mt:2}}>
                  Agregar
              </Button>
            </div>
        
          
      
      </div>
  );
}
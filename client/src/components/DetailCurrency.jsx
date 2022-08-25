import React, {useState, useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail,postFavCurrency } from "../actions/index";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DetailGames({match}){
const dispatch = useDispatch()

let {id}=useParams();
let navigate=useNavigate();
const [amount,setAmount]=useState("");
const cantidad=[1,2,3,4,5,6,7,8,9,10];
var currencies=[];


 useEffect(() => {
     dispatch(getDetail(id));
 },[dispatch]) //eslint-disable-line react-hooks/exhaustive-deps

const myCurrency = useSelector((state) => state.details);

if(myCurrency.length){
  for(const currency in myCurrency[0].prices){
    currencies.push(currency)
  }
}
const handleCheck = (event)=>{
  event.preventDefault();
  setAmount(parseInt(event.target.value))
}

const handleSubmit = (event) => {
      event.preventDefault();
      if(amount){
        const newCurrency={name:myCurrency[0].coin,price:myCurrency[0].prices,
          img:myCurrency[0].logo,ticker:myCurrency[0].ticker,amount:amount,currenciestoconvert:currencies,}
        console.log(newCurrency)
        dispatch(postFavCurrency(newCurrency));                     
        navigate('/FavCurrencies')
      }  else{
        alert('Colocar un valor')
      }                    
  };  

return (
    <div>
        {myCurrency.map((el) => { 
          return (
                <Card sx={{ mx: "auto",maxWidth:400,maxHeight:400}} key={el.ticker} >
                  <CardActionArea>
                    {el.logo!==""?
                    <CardMedia
                        component="img"
                        image={el.logo}
                        alt="image not found"
                        sx={{mx:"auto",height:400}}
                    />:
                    <CardMedia
                        component="img"
                        image="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"
                        alt="image not found"
                        sx={{mx:"auto",height:400}}
                    />}                   
                    <CardContent id="cardContent">
                      <Typography gutterBottom variant="h5" component="div">
                        {el.coin}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
         );
         })}  
            <Box sx={{ minWidth: 120}}>
              <FormControl sx={{ width: 120 }}>
                <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={amount}
                  label="Cantidad"
                  onChange={handleCheck}
                >
                  {cantidad.map((el)=>(
                    <MenuItem key={el} value={el}>{el}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" onClick={handleSubmit}>Agregar a Favoritos</Button>
    </div>
)}

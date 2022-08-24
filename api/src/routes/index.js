const { Router } = require('express');
const axios= require('axios');
const {Currency}=require('../db');
const router = Router();
const fetch= require('node-fetch');
const { API_KEY } = process.env;
require('dotenv').config();

var currenciesList;

const infoFromApi=async()=>{
    const query = new URLSearchParams({prices: '1'}).toString();

    const tickers = ['btc','eth','bch','ltc','xmr','trx','trc20/doge','trc20/tusd',
    'trc20/usdc','trc20/usdt','trc20/wbtc','bep20/dai','bep20/neko','bep20/shib','bep20/uni',];
    var resp;
    var data=[];

    for(let i=0;i<tickers.length;i++){
      resp=await fetch(
        `https://api.cryptapi.io/${tickers[i]}/info/?${query}`,
        {method: 'GET'}
      )
      data.push(JSON.parse(await resp.text()))
    }
      
      return data;
  };


router.get('/currencies',async(req,res)=>{
  currenciesList=await infoFromApi();
  let currencyName=req.query.name;
  let filterCurrencies

  filterCurrencies= currencyName && currenciesList.filter(el=>el.coin.toLowerCase().includes(currencyName.toLowerCase()))
  
  filterCurrencies?
  res.status(200).send(filterCurrencies):
  res.status(200).send(currenciesList);
  
})
//---
router.get('/currency/:id',async(req,res)=>{
    const ticker=req.params.id;
    var currencyTicker;

    if(currenciesList!==""){
        currencyTicker=await currenciesList.filter(el=>el.ticker==ticker);
    }
    currencyTicker.length?
    res.status(200).send(currencyTicker):
    res.status(404).send('No existe esta moneda');
  
})
//---

const favCurrenciesFromDb=async()=>{
  return await Currency.findAll();
}

const getAllCurrencies=async()=>{
  const dbCurrencies=await favCurrenciesFromDb();
  return dbCurrencies;
}

router.get('/favCurrencies',async(req,res)=>{
  let currenciesList=await getAllCurrencies();
  res.status(200).send(currenciesList);
  
})

router.post('/favCurrencies',async(req,res)=>{
  try{
    let {
    name,
    price,
    img,
    ticker,
    amount,
    currenciestoconvert,
  }=req.body

  let insertedCurrency=await Currency.create({
    name,
    price,
    img,
    ticker,
    amount,
    currenciestoconvert,
  })
  
  res.send('Moneda agregada');
  }catch(error){
    res.send(error);
  }
  
})

router.delete('/deleteFavCurrencies/:id',async(req,res)=>{
  const idCurrency=req.params.id;

  let deletedCurrency= await Currency.destroy({where: {id:idCurrency}})

  res.status(200).send('Moneda eliminada');
  
})


module.exports = router;
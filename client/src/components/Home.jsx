import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies,getSelectedPageNumber,getSearchedCurrencies} from "../actions/index";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {

   const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getCurrencies());
   }, [dispatch]);

//-------------------------------------------------------------
     const allCurrencies=useSelector((state)=> state.allCurrencies); 
     var searchedCurrencies=useSelector((state)=> state.searchedCurrencies);
     var searchName=useSelector((state)=> state.searchName);

     const [currentPage,setCurrentPage]= useState(1);
     const [currenciesPerPage]= useState(9);
     var indexOfLastCurrency; 
     if(searchedCurrencies){ 
          if(searchName){
            indexOfLastCurrency = 1 * currenciesPerPage; 
          }else{
            indexOfLastCurrency = currentPage * currenciesPerPage;
          }     
     }

     if(!searchedCurrencies){
        indexOfLastCurrency = currentPage * currenciesPerPage;

     } 

     const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage; 
     const currentCurrencies = allCurrencies.slice(indexOfFirstCurrency,indexOfLastCurrency)

      
//-------------------------------------------------------------


  const paginado = (page) => {

    if(searchedCurrencies){
      dispatch(getSearchedCurrencies(false));
    }
    setCurrentPage(page);
    dispatch(getSelectedPageNumber(page));
  }; 


  return (

      <div>   
      {/*---------------SEARCHBAR-------------------------------------*/} 
          <SearchBar />    
      {/*---------------PAGINADO-------------------------------------*/}    
          <Paginado 
            currenciesPerPage={currenciesPerPage}
            allCurrencies={allCurrencies.length} 
            paginado={paginado}
          /> 

      {/*----------------CARDS-----------------------------------*/}
        <>{currentCurrencies?
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                  {currentCurrencies.map((coin) => { 
                      return (
                        <Grid key={coin.ticker} item xs={12} sm={6}md={4} lg={3}>
                          <Link to={"/DetailCurrency/" + coin.ticker}>
                            <Card name={coin.coin} image={coin.logo} price={coin.prices.USD} key={coin.ticker} />             
                          </Link>
                        </Grid> 
                    ); 
                  })}
                </Grid>
              </Box>:
              <div className="center">
                 <div className="ring"></div>
                 <span className="loading">loading...</span>
              </div>
            } 
        </>     
      </div>
  );
}




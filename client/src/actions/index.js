import axios from "axios";

export function getFavCurrencies() {
  return async function (dispatch) {
    var jsonCurrencies = await axios("/favCurrencies", { 
    });
    return dispatch({ type: "GET_FAV_CURRENCIES", payload: jsonCurrencies.data });
  };
}

export function postFavCurrency(newCurrency){
  return async function(dispatch){

    const create=await axios.post("/favCurrencies",newCurrency);
    return dispatch({type:"POST_CURRENCY",payload:create.data})
   
  }
}
export function getCurrencies() {
  return async function (dispatch) {
    var json = await axios("/currencies", { 
    });
    return dispatch({ type: "GET_CURRENCIES", payload: json.data });
  };
}

export function getDetail(id){
  return async function(dispatch){
    try{
      var jsonId=await axios.get('/currency/'+id);
      return dispatch({type:"GET_DETAILS",payload:jsonId.data})

    }catch(error){
    console.log(error)
  }
  }
}

export function deleteFavCurrency(idCurrency){
  return async function(dispatch){
    try{
      const deleteCurrency=await axios.delete('/deleteFavCurrencies/'+idCurrency);
    return dispatch({type:"DELETE_CURRENCY",payload:deleteCurrency.data})
    }catch(error){
      console.log(error)
    }   
  }
}

export function getCurrenciesNames(searchName){
  return async function(dispatch){
    try{
      var currencyName=await axios.get('/currencies?name='+searchName);
      return dispatch({type:"GET_SEARCH_NAME",payload:[currencyName.data,searchName]})

    }catch(error){
    console.log(error)
  }
  }
}

export function getSelectedPageNumber(selectedPageNumber) {     
   return async function(dispatch){

    return dispatch({type:"GET_SELECTED_PAGE_NUMBER",payload:selectedPageNumber});
  };
}

export function getSearchedCurrencies(searchedCurrencies) {     
   return async function(dispatch){

    return dispatch({type:"GET_SEARCHED_CURRENCIES",payload:searchedCurrencies});
  };
}

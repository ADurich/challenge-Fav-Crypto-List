
const initialState = {
    favCurrencies: "",
    allCurrencies: "",
    details:[],
    deletedCurrency:false,
    selectedPageNumber:1,
    searchedCurrencies:false,
    searchName:"",

};


function rootReducer(state = initialState, action) {

    switch(action.type){

        case "GET_FAV_CURRENCIES":

            return{
                ...state,
                favCurrencies:action.payload,
            } 
        case "POST_CURRENCY":
            return{
                  ...state,                                  
            }       

    	case "GET_CURRENCIES":

    		return{
    			...state,
    			allCurrencies:action.payload,

    		}

       case "GET_DETAILS":
                return{
                    ...state,
                    details:action.payload,

                } 
        case "DELETE_CURRENCY":
            return{
                  ...state, 
                  deletedCurrency:true,                                 
            }                  
        case "GET_SEARCH_NAME":

            return{
                ...state,
                allCurrencies:action.payload[0],
                searchName:action.payload[1]
            }
        case 'GET_SELECTED_PAGE_NUMBER':
            return{
                ...state, 
                selectedPageNumber:action.payload, 
            }
        case 'GET_SEARCHED_CURRENCIES':
            return{
                ...state, 
                searchedCurrencies:action.payload, 
            }             
                
    	default:
    		return state;
        }
}

export default rootReducer;
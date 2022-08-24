import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { deleteFavCurrency} from "../actions/index";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';

export default function Card({ name, image, price, id, currenciestoconvert, amount,ticker}) {

  const dispatch = useDispatch();
  let navigate=useNavigate();
  var [convertedPrice,setConvertedPrice]=useState(false);
  var finalPrice=parseFloat(price.USD)*amount;

  const handleDelete = (event) => {
      event.preventDefault();
      let idCurrency= id;
      dispatch(deleteFavCurrency(idCurrency));                     
      navigate('/Delete');                      
  };

const handleCheck=(event)=>{
  let currency=event.target.value
  for (const property in price) {
    if(property===currency){
      setConvertedPrice( parseFloat(price[property])*amount)
    }
  }
}

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">      
      {image?
      <div className="overflow">
        <img src={image} alt="img not found" width="200px" height="200px" className="card-img-top" />
      </div>:
      <div className="overflow">
        <img src="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg" alt="img not found" width="200px" height="200px" className="card-img-top" />
      </div>}
      <div className="card-body text-light">
        <h3 className="card-title">{name}</h3>
      </div>
      {currenciestoconvert&&
        <div className="card-body text-light">
        <select onChange={handleCheck}>
          {
            currenciestoconvert.map(currencies=>(
                <option key={currencies}>{currencies}</option>
              ))
          }
        </select>
      </div>
      }
      {currenciestoconvert&&
      <div className="card-body text-light">
          <h5 className="card-title">{amount} unidades</h5>
      </div>}
      {currenciestoconvert?
        <div className="card-body text-light">
          <h4 className="card-title">{!convertedPrice? finalPrice : convertedPrice}</h4>
        </div>:
        <div className="card-body text-light">
          <h4 className="card-title">USD {price}</h4>
        </div>

      }
      {id&&
       <div>
        <Button variant="contained" color="error" onClick={handleDelete} sx={{mt:2}}>
              Eliminar
        </Button>
      </div>

      }
    </div>
  );
}

<img src="" alt="img not found" width="200px" height="250px" />

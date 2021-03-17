import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

const CharacterItem = ({item}) => {
  const [count,setCount]=useState(0);
  const Add=()=>{
    setCount(count+1)
  }

    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.picture} alt='' />
            </div>
            <div className='card-back'>
              <h1>{item.name}</h1>
              <ul>
            
                <li>
                 {item.product_name}
                </li>              
               <li>
                {item.price}
                </li>
               <li>
                <Button variant="outlined" color="primary" href="#outlined-buttons" onClick={Add} > Panier</Button>
                </li>
                <li>
                Quantité réserve:    {count} <br/>Prix: {parseFloat(item.price)* count}$
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
export default CharacterItem

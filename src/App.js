import React, {useState , useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import  CharacterGrid from './components/characters/CharacterGrid'  ;
import './App.css';

const App= () => {
  const [items, setItems]= useState([]);
  const [isLoading, setIsLoading]=useState(true)

  useEffect(()=> { 
    const fetchItems = async () => {
      const result = await axios(`https://api.mocki.io/v1/af37df01`)

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false)
    }
    fetchItems()
  }, [])
  return (
    <div>
    <Header/>
      
      <div className="container">

       <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </div>

  );
}

export default App;

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar'
import ProductCard from './Components/ProductCard'

function App() {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [ loading, setLoading] = useState(false);

  const fetchFood = async () => {
    const APP_ID = " 19fa347c"
    const APP_KEY = "09f99db971a809051e35d00f616f4d4e	"
    try{
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await res.json();
      setAllFood(data)
      console.log(data);
    }catch ( error ) {
      console.log(error)
    }
  }
  return (
    <div >
      <Navbar/>
      {/* <Searchbar search={search} setSearch={setSearch} fetchFood={fetchFood}/>
      <ProductCard allfood={allFood} loading={loading}/> */}

      <button onClick={fetchFood}>Click</button>
      </div>
  )
}
export default App;








import React, { useEffect } from 'react'
import '../styles/CategoryPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {

const navigate = useNavigate()


  const {id} = useParams();

  const [items, setItems] = React.useState([])

  useEffect(() => {
    fetchItems(id)
  }, [window.location.href])

  const fetchItems = async (idd) => {
    await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idd}`)
      .then(response => {
        setItems(response.data.meals)
        console.log(response.data.meals)
      })
      .catch(error => console.error(error)); 
    
  }


  return (
    <div className='category-page'>

        <div className="categorypage-head">
            <h2>Category: <i>{id}</i></h2> 
            <div className='categorypage-head-options' >
              <p>Other popular categories:</p>
              <span>
                <button onClick={()=>{ navigate(`/category/Chicken`); fetchItems('Chicken')} } >Chicken</button>
                <button onClick={()=> {navigate(`/category/Vegetarian`); fetchItems('Vegetarian')}}>Vegetarian</button>
                <button onClick={()=> {navigate(`/category/Starter`); fetchItems('Starter')}}>Starter"</button>
                <button onClick={()=> {navigate(`/category/Seafood`); fetchItems('Seafood')}}>Seafood</button>
                <button onClick={()=> {navigate(`/category/Dessert`); fetchItems('Dessert')}}>Dessert</button>
              </span>
            </div>
        </div>

        <div className="categorypage-body">

            {items ?
            
                <div className="food-items">

                    {items.map((item) => (
                    
                        <div className="food-item" onClick={()=> navigate(`/recipie/${item.idMeal}`)}>
                            <img src={item.strMealThumb} alt="food-item" />
                            <h4>{item.strMeal}</h4>
                        </div>
                    ))}
                    
                </div>
        
            :"Loading..."}
            

        </div>

    </div>
  )
}

export default Category
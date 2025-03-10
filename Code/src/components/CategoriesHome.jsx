import React, { useEffect } from 'react'
import '../styles/CategoriesHome.css'
import heroImg1 from '../images/hero-img1.png'
import heroImg2 from '../images/hero-img2.png'
import heroImg3 from '../images/hero-img3.png'
import heroImg4 from '../images/hero-img4.png'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CategoriesHome = () => {

  const navigate = useNavigate()

  
  const [items, setItems] = React.useState([])
  
  const [categories, setCategories] = React.useState([])
  
  useEffect(() => {
    fetchCategories()
    fetchItems()
  }, [])

  const fetchCategories = async () => {
    await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories)
        console.log(response.data.categories)
      })
      .catch(error => console.error(error)); 
    
  }

  const fetchItems = async () => {
    await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
      .then(response => {
        setItems(response.data.meals)
        console.log(response.data.meals)
      })
      .catch(error => console.error(error)); 
    
  }

  return (
    <div className='home-categories-container' id='popular'>

      <div className="popular-categories-body">
        <h3>Most Popular Categories</h3>
        <p>Be sure not to miss out the categories of these most popular categories. Enjoy trying them out!</p>

        {categories.length > 0 ? 
        
      
        <>
          <div className="popular-categories">

              {categories.map((category, index)=>{
                return (
                  index < 9 && 
                  <div className="popular-category" key={index} onClick={()=>navigate(`/category/${category.strCategory}`)} >
                    <img src={category.strCategoryThumb} alt="" />
                    <span>
                      <h4>{category.strCategory}</h4>
                      <p>View All Recipies</p>
                    </span>
                  </div>
                )
              }

              )}

              
          </div>
        </>
        
        :"Loading"}


      </div>


      <div className="popular-dishes-body" id='recipies'>
        <h3>Trending Dishes</h3>

        {items.length > 0 ? 
            <div className="popular-dishes">

                <span className='dishes-small'>

                <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[6].idMeal}`)}>
                    <img src={items[6].strMealThumb} alt="" />
                      <p>{items[6].strMeal}</p>
                </div>
                <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[7].idMeal}`)}>
                    <img src={items[7].strMealThumb} alt="" />
                      <p>{items[7].strMeal}</p>
                </div>
                <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[8].idMeal}`)}>
                    <img src={items[8].strMealThumb} alt="" />
                      <p>{items[8].strMeal}</p>
                </div>

                </span>
                <span className='dishes-big'>

                    <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[0].idMeal}`)} >
                        <img src={items[0].strMealThumb} alt="" />
                          <p>{items[0].strMeal}</p>
                    </div>
                    <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[5].idMeal}`)}>
                        <img src={items[5].strMealThumb} alt="" />
                          <p>{items[5].strMeal}</p>
                    </div>

                </span>
                <span className='dishes-small'>

                    <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[2].idMeal}`)}>
                        <img src={items[2].strMealThumb} alt="" />
                          <p>{items[2].strMeal}</p>
                    </div>
                    <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[3].idMeal}`)}>
                        <img src={items[3].strMealThumb} alt="" />
                          <p>{items[3].strMeal}</p>
                    </div>
                    <div className="popular-dish" onClick={()=> navigate(`/recipie/${items[4].idMeal}`)}>
                        <img src={items[4].strMealThumb} alt="" />
                          <p>{items[4].strMeal}</p>
                    </div>
                    
                </span>

                
            </div>
        
        :""}

{/* 
        <button >View more</button> */}
      </div>




    </div>
  )
}

export default CategoriesHome
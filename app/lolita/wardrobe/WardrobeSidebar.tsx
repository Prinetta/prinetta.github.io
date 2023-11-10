import { Dispatch, SetStateAction, useEffect } from 'react'
import { Clothing, ClothingCategory } from '../types'
import styles from './styles.module.css'

export default function WardrobeSidebar({ clothes, setCurrentCategory, setIsFiltered }: {
  clothes: Clothing[], 
  setCurrentCategory: Dispatch<SetStateAction<Clothing[]>>,
  setIsFiltered: Dispatch<SetStateAction<boolean>>
}){
  
  return <Sidebar/>

  function Sidebar(){
    const categories = Object.keys(ClothingCategory).filter(key => !isNaN(Number(ClothingCategory[key as keyof typeof ClothingCategory])))

    return <div className='sidebar w-1/3 flex flex-col'>
      {categories.map(category => {return <CategoryButton category={ClothingCategory[category as keyof typeof ClothingCategory]}/>})}
    </div>
  }

  function updateCategory(category: ClothingCategory) {
    setCurrentCategory(clothes.filter((item: Clothing) => item.category === ClothingCategory[category]))  
    setIsFiltered(false)
  }

  function CategoryButton({category} : { category: ClothingCategory }){
    let categoryName = ClothingCategory[category] + 's'
    switch(category){
      case ClothingCategory.Wristcuffs:
      case ClothingCategory.Legwear:
      case ClothingCategory.Shoes:
      case ClothingCategory.Outerwear:
        categoryName = ClothingCategory[category]     
        break;  
      case ClothingCategory.Accessory:
        categoryName = "Accessories"
    }
    return <button onClick={() => updateCategory(category)} className={styles["category-button"]}>{categoryName}</button>
  }
}
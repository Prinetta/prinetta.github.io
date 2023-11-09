import { Dispatch, SetStateAction, useEffect } from 'react'
import { Clothing, ClothingCategory } from '../types'
import styles from './styles.module.css'
import { getAllClothingItems, getClothingItemsByCategory } from '../../../database/database'
import { useRouter } from "next/navigation";

export default function WardrobeSidebar({ clothes, setClothes }: {clothes: Clothing[], setClothes: Dispatch<SetStateAction<Clothing[]>>}){
  
  return <Sidebar/>

  function Sidebar(){
    const categories = Object.keys(ClothingCategory).filter(key => !isNaN(Number(ClothingCategory[key as keyof typeof ClothingCategory])))

    return <div className='sidebar w-1/3 flex flex-col'>
      {categories.map(category => {return <CategoryButton category={ClothingCategory[category as keyof typeof ClothingCategory]}/>})}
    </div>
  }

  function setCurrentClothes(category: ClothingCategory) {
    getClothingItemsByCategory(category).then(
      clothingItems => {
          if(clothingItems != null){            
            setClothes(clothingItems)
          } else {
          }
        }
      )
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
    return <button onClick={() => setCurrentClothes(category)} className={styles["category-button"]}>{categoryName}</button>
  }
}
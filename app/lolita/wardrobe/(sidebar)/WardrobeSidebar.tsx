import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Clothing, ClothingCategory } from '../../types'
import styles from './styles.module.css'
import FullWidthImage from '../../../components/FullWidthImage';
import { useClothingContext } from '../../ClothingContext';

export default function WardrobeSidebar({ setIsFiltered }: {
  setIsFiltered: Dispatch<SetStateAction<boolean>>
}){
  const {clothes, setCategoryClothes} = useClothingContext()
  const [activeCategory, setActiveCategory] = useState<ClothingCategory>(0);  

  useEffect(() => {
    console.log(activeCategory)
  }, [activeCategory])

  return <Sidebar/>

  function Sidebar(){
    const categories = Object.keys(ClothingCategory).filter(key => !isNaN(Number(ClothingCategory[key as keyof typeof ClothingCategory])))

    return <div className={`${styles["sidebar"]} flex flex-col flex-none`}>
      {categories.map(category => {
        return <CategoryButton category={ClothingCategory[category as keyof typeof ClothingCategory]} updateCategory={updateCategory} activeCategory={activeCategory}/>
      })}
    </div>
  }

  function updateCategory(category: ClothingCategory) {
    console.log("category: " + category)
    setActiveCategory(category)
    setCategoryClothes(clothes.filter((item: Clothing) => item.category === ClothingCategory[category]))      
    setIsFiltered(false)
  }
}

function CategoryButton({category, activeCategory, updateCategory} : { category: ClothingCategory,  activeCategory: ClothingCategory, updateCategory: (category: ClothingCategory) => void}){  
  return <div className={styles.category}><button onClick={() => updateCategory(category)} className={category === activeCategory ? 
    [styles["category-button"], styles["selected-category"]].join(" ") : 
    styles["category-button"]}>
      <FullWidthImage src={`/images/layout/icons/lolita/category-${category}.png`} style={styles["category-image"]} height='8em'/>
    </button></div>
}
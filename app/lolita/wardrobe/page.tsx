"use client"

import Link from 'next/link';
import ClothingGrid from './WardrobeOverview';
import styles from '../styles.module.css'
import wardrobeStyles from './styles.module.css'
import { Corinthia, Rouge_Script } from 'next/font/google'
import localFont from 'next/font/local'
import WardrobeSidebar from './WardrobeSidebar';
import { useEffect, useState } from 'react';
import { Clothing, ClothingCategory } from '../types';
import { getAllClothingItems } from '../../../database/database';
import FilterBar from './FilterBar';
 
const titleFont = Rouge_Script({
  weight: ['400'],
  subsets: ['latin'],
})

const myFont = localFont({ 
  src: [{
    path: './josephsophia.otf',
    weight: '200',
    style: 'normal'
  }]
})


export default function WardrobePage() {
  
  const [fetchedClothes, setClothes] = useState<Clothing[]>([]);  
  const [currentCategoryClothes, setCurrentCategory] = useState<Clothing[]>([]);
  const [displayedClothes, setDisplayedClothes] = useState<Clothing[]>([]);
  
  const [isFiltered, setIsFiltered] = useState<boolean>(false);  

  useEffect(() => { 
    if(!fetchedClothes || fetchedClothes.length == 0){
      getAllClothingItems().then(
        clothes => {
          if(clothes != null){          
            setClothes(clothes)
            setDisplayedClothes(clothes.filter((item: Clothing) => item.category === ClothingCategory[ClothingCategory.JSK]))
          }
        }
      )
    }
  }, [])
  
  return <div className="bg">
    <div className='picture-frame'>
      <div className="main white-lace-border">
        <h1 className={[styles.header, titleFont.className].join(" ")}>My Lolita Wardrobe</h1>
        {/* <h1 className={[styles.header, myFont.className].join(" ")}>My Lolita Wardrobe</h1> */}
        <p className={wardrobeStyles.description}>
          hello ! this section is dedicated to my ever growing lolita wardrobe. i am still unsure how to organize things, so for now, everything is sorted by clothing category.
          there is a switch in the corner that lets you toggle between my sweet and gothic wardrobe ! if you just want to see all, then check the dedicated checkbox right below!
        </p>

        <FilterBar 
          displayedClothes={displayedClothes} 
          currentCategoryClothes={currentCategoryClothes} 
          setDisplayedClothes={setDisplayedClothes} 
          isFiltered={isFiltered} 
          setIsFiltered={setIsFiltered}/>

        <WardrobeOverview/>

        <br/><br/><br/>
        <a href="coords">pictures</a>
        <a href="wishlist">wish list</a>
        <a href="dressup">lolita dress up :3</a>
        <br/><br/>
        <Link href="/">home</Link>
      </div>
    </div>
  </div>

  function WardrobeOverview(){
    return <div className='flex flex-row'>
    <WardrobeSidebar 
      clothes={fetchedClothes} 
      setCurrentCategory={setCurrentCategory}
      setIsFiltered={setIsFiltered}/>
    <ClothingGrid displayedClothes={displayedClothes}/>      
  </div>
  }
}
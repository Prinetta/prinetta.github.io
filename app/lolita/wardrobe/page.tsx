"use client"

import Link from 'next/link';
import ClothingGrid from './ClothingGrid';
import styles from '../styles.module.css'
import wardrobeStyles from './styles.module.css'
import { Corinthia, Rouge_Script } from 'next/font/google'
import localFont from 'next/font/local'
import WardrobeSidebar from './(sidebar)/WardrobeSidebar';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Clothing, ClothingCategory, Clothing_Tag } from '../types';
import { getAllClothingItems } from '../../../database/database';
import FilterBar from './(filter)/Filter';
 
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
  const [currentCategoryClothes, setCategoryClothes] = useState<Clothing[]>([]);
  const [displayedClothes, setDisplayedClothes] = useState<Clothing[]>([]);
  
  const [isFiltered, setIsFiltered] = useState<boolean>(false);  

  useEffect(() => { 
    if(!fetchedClothes || fetchedClothes.length == 0){
      getAllClothingItems().then(
        clothes => {
          if(clothes){          
            setClothes(clothes)
            const defaultFilter = clothes.filter((item: Clothing) => item.category === ClothingCategory[ClothingCategory.JSK])
            setCategoryClothes(defaultFilter)
            setDisplayedClothes(defaultFilter)
          }
        }
      )
    }
  }, [])
  
  return <div className="bg">
    <div className={wardrobeStyles["character-left"]}></div>
    <div className={wardrobeStyles["character-right"]}></div>
    <div className='picture-frame'>
      <div className="main white-lace-border">
        <h1 className={[styles.header, titleFont.className].join(" ")}>My Lolita Wardrobe</h1>
        {/* <h1 className={[styles.header, myFont.className].join(" ")}>My Lolita Wardrobe</h1> */}
        <p className={wardrobeStyles.description}>
          hello ! this section is dedicated to my ever growing lolita wardrobe. i am still unsure how to organize things, so for now, everything is sorted by clothing category.
          there is a switch in the corner that lets you toggle between my sweet and gothic wardrobe ! if you just want to see all, then check the dedicated checkbox right below!
        </p>

        <FilterBar 
          currentCategoryClothes={currentCategoryClothes} 
          setDisplayedClothes={setDisplayedClothes} 
          isFiltered={isFiltered} 
          setIsFiltered={setIsFiltered}/>

        <WardrobeOverview 
          fetchedClothes={fetchedClothes} 
          setCategoryClothes={setCategoryClothes} 
          setIsFiltered={setIsFiltered} 
          displayedClothes={displayedClothes}/>        

        <br/><br/><br/>
        <a href="coords">pictures</a>
        <a href="wishlist">wish list</a>
        <a href="dressup">lolita dress up :3</a>
        <br/><br/>
        <Link href="/">home</Link>
      </div>
    </div>
  </div>
}

function WardrobeOverview({ fetchedClothes, setCategoryClothes, setIsFiltered, displayedClothes }: {
  fetchedClothes: Clothing[], 
  setCategoryClothes: Dispatch<SetStateAction<Clothing[]>>,
  setIsFiltered: Dispatch<SetStateAction<boolean>>,
  displayedClothes: Clothing[]
}){
  return <div className='flex flex-row'>
    <WardrobeSidebar 
        clothes={fetchedClothes} 
        setCategoryClothes={setCategoryClothes}
        setIsFiltered={setIsFiltered}/>
    <ClothingGrid displayedClothes={displayedClothes}/>      
  </div>
}
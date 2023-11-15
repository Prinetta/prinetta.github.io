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
import ClothingContext, { useClothingContext } from '../ClothingContext';
import FullWidthImage from '../../components/FullWidthImage';
 
const titleFont = Rouge_Script({
  weight: ['400'],
  subsets: ['latin'],
})

const myFont = localFont({ 
  src: [{
    path: '../../../public/fonts/josephsophia.otf',
    weight: '200',
    style: 'normal'
  }]
})

export default function WardrobePage() {
  const [isFiltered, setIsFiltered] = useState<boolean>(true);  
  
  return <div className="bg">
    <FullWidthImage src="/images/layout/objects/heart-wings-glow.png" style={wardrobeStyles["bg-heart"]} height='6em'/>
    <FullWidthImage src="/images/layout/objects/cross-white.png" style={wardrobeStyles["bg-cross"]} height='11em'/>
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

        <ClothingContext>
          <FilterBar isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
          <WardrobeOverview setIsFiltered={setIsFiltered} />  
        </ClothingContext>      

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

function WardrobeOverview({setIsFiltered}: {setIsFiltered: Dispatch<SetStateAction<boolean>>}){
  return <div className='flex flex-row'>
    <WardrobeSidebar setIsFiltered={setIsFiltered}/>
    <ClothingGrid/>      
  </div>
}
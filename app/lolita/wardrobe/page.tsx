"use client"

import Link from 'next/link';
import WardrobeOverview from './WardrobeOverview';
import styles from '../styles.module.css'
import wardrobeStyles from './styles.module.css'
import { Corinthia, Rouge_Script } from 'next/font/google'
import localFont from 'next/font/local'
import WardrobeSidebar from './WardrobeSidebar';
import { useState } from 'react';
import { Clothing } from '../types';
 
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
  const [clothes, setClothes] = useState<Clothing[]>([]);
  
  return <div className="bg">
    <div className='picture-frame'>
      <div className="main white-lace-border">
        <h1 className={[styles.header, titleFont.className].join(" ")}>My Lolita Wardrobe</h1>
        {/* <h1 className={[styles.header, myFont.className].join(" ")}>My Lolita Wardrobe</h1> */}
        <p className={wardrobeStyles.description}>
          hello ! this section is dedicated to my ever growing lolita wardrobe. i am still unsure how to organize things, so for now, everything is sorted by clothing category.
          there is a switch in the corner that lets you toggle between my sweet and gothic wardrobe ! if you just want to see all, then check the dedicated checkbox right below!
        </p>

        <div className={wardrobeStyles.filter}>&nbsp;</div>

        <div className='flex flex-row'>
          <WardrobeSidebar  clothes={clothes} setClothes={setClothes}/>
          <WardrobeOverview clothes={clothes} setClothes={setClothes}/>      
        </div>

                
        <br />
        <h1 className="category">OP</h1>
        <h1 className="title">Skirt</h1>
        <h1 className="title">Blouse</h1>
        <h1 className="title">Cutsews</h1>
        <h1 className="title">Layers</h1>
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
"use client"

import Image from 'next/image'
import Link from 'next/link';
import styles from './styles.module.css'
import { useEffect } from 'react';
import WardrobeOverview from './WardrobeOverview';

export default function WardrobePage() {


  return <div className="bg">
    <div className="main">
      <h1>my lolita wardrobe ^__^ </h1>
      hello ! this section is dedicated to my ever growing lolita wardrobe. i am still unsure how to organize things, so for now, everything is sorted by clothing category.<br/>
      there is a switch in the corner that lets you toggle between my sweet and gothic wardrobe ! if you just want to see all, then check the dedicated checkbox right here ˏˋ°•*⁀➷

      <br/>[note: maybe split heart for both sub styles, u can somehow combine the heart ? O__O]

      <WardrobeOverview/>              
      <br />
      <h1 className="title">OP</h1>
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
}
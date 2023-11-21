'use client'

import Link from 'next/link'
import FullWidthImage from '../../../components/FullWidthImage'
import ItemDetails from './ItemDetails'
import styles from './styles.module.css'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import ClothingContextProvider, { useClothingContext } from '../../ClothingContext'
import { getImagePath } from '../helperFunctions'
import { ClothingCategory } from '../../types'

export default function PageOverview(){
  const idParam = useSearchParams().get('id')
  const id = +(idParam ? idParam : -1)

  return <ClothingContextProvider>
    <FullWidthImage src="/images/layout/objects/cross.png" style={styles["cross"]} height={'200px'}/>
    <div className={styles["first-row-container"]}>
      <div className={styles["scroll-box"]}>
        <ItemDetails id={id}/>
      </div>
      <div className='flex flex-col'>
        <div className={styles["picture-frame"]}>
          <div className={styles["frame-background"]}/>
            <ItemImage id={id}/>
        </div>
        <Link href={"/lolita/wardrobe"}><FullWidthImage src='/images/layout/frame/back-to-overview.png' style={styles["back-button"]} height='em'/></Link>
      </div>

    </div>
  </ClothingContextProvider>
}

function ItemImage({id} : {id: number}){
  const category = useClothingContext().clothes.find(item => item.id == id)?.category
  return <FullWidthImage src={getImagePath(ClothingCategory[category as keyof typeof ClothingCategory], id)} style={styles["item-image"]} height={'300px'}/>
}
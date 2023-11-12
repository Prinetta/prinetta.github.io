import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getAllClothingItems } from "../../../database/database";
import { Clothing, ClothingCategory } from "../types";
import Image from 'next/image'
import styles from './styles.module.css'
import { Corinthia, Labrada } from "next/font/google";
import FullWidthImage from "../../components/FullWidthImage";

const brandFont = Corinthia({
  weight: ['700'],
  subsets: ['latin'],
})

const brandFont2 = Labrada({
  weight: ['500'],
  style: ['italic'],
  subsets: ['latin'],
})

export default function ClothingGrid({ displayedClothes }: {
  displayedClothes: Clothing[]
}){  
  
  if(displayedClothes && displayedClothes[0] != undefined){
    return <Grid/>; 
  } else {
    return <h1>no clothes here</h1>
  }

  function Grid(){
    if(displayedClothes){
      return <div>
        <div className={`${styles["clothing-grid"]} flex-none grid grid-cols-3 gap-3`}>
          {displayedClothes.map((item) => {
            return ClothingInfo(item)
          })} 
        </div>
      </div>
    }
  }
  
  function ClothingInfo(item: Clothing){
    if(item.status === "Owned" || item.status === "Ordered"){
      return <div className="picture-frame-black clothing-card">
          {/* <div className={styles["brand-bg"]}>
            <p className={[styles["clothing-brand"], brandFont2.className].join(" ")}>{getBrandName(item.brand)}</p>
          </div> */}
          <ItemImage 
            category={ClothingCategory[item.category as keyof typeof ClothingCategory]} 
            id={item.id}
            />        
          <p className={[styles["clothing-brand"], brandFont2.className].join(" ")}>{getBrandName(item.brand)}</p>
          <h2 className={styles["clothing-name"]}>{item.name}</h2>        
          <div className={styles.colorway}>{item.colorway}</div>
        </div>   
    }
  }

  function getBrandName(brand: string){
    switch(brand){
      case "Baby":
        return "Baby, the Stars Shine Bright"
      case "AatP":
        return "Alice and the Pirates"
      case "Metamorphose":
        return "Metamorphose Temps de Fille"
      case "Moitie":
        return "Moi-même-Moitié"
      case "HNaoto":
        return "H.NAOTO"
      case "JetJ":
        return "Juliette et Justine"
      default:
        return brand
    }
  }

  interface ItemImageProps {
    category: ClothingCategory,
    id: number
  }

  function ItemImage({ category, id }: ItemImageProps){
    let folder = getCategoryName(category)
    switch(category){
      case ClothingCategory.JSK:
      case ClothingCategory.OP:
        folder = "dresses"
        break
      case ClothingCategory.Bolero:
      case ClothingCategory.Cardigan:
        folder = "layers"
        break
    }
    const path = `/images/lolita/${folder}/${id}.png`

    return <FullWidthImage src={path} style={styles["clothing-image"]} height={'300px'}/>
  }
}

function getCategoryName(category: ClothingCategory): string{
  switch(category){
    case ClothingCategory.Wristcuffs:
    case ClothingCategory.Legwear:
    case ClothingCategory.Shoes:
    case ClothingCategory.Outerwear:
      return ClothingCategory[category]     
    case ClothingCategory.Accessory:
      return "Accessories"
    default:
      return ClothingCategory[category] + 's'
  }
}


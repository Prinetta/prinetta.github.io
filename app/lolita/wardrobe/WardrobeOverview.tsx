import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getAllClothingItems } from "../../../database/database";
import { Clothing, ClothingCategory } from "../types";
import Image from 'next/image'
import styles from './styles.module.css'
import { Corinthia, Labrada } from "next/font/google";

const brandFont = Corinthia({
  weight: ['700'],
  subsets: ['latin'],
})

const brandFont2 = Labrada({
  weight: ['500'],
  style: ['italic'],
  subsets: ['latin'],
})

export default function WardrobeOverview({ clothes, setClothes }: {clothes: Clothing[], setClothes: Dispatch<SetStateAction<Clothing[]>>}){
  useEffect(() => { 
    getAllClothingItems().then(
    clothingItems => {
        if(clothingItems != null){          
          setClothes(clothingItems)
        }
      }
    )
  }, [])
  
  if(clothes != undefined && clothes[0] != undefined){
    return <ClothingGrid category={ClothingCategory[clothes[0].category as keyof typeof ClothingCategory]}/>;
  } else {
    return <h1>no clothes here</h1>
  }

  function ClothingGrid({category} : {category: ClothingCategory}){
    if(clothes != undefined){
      console.log(clothes)
      console.log(ClothingCategory[category])
      let clothingByCategory = clothes.filter(item => item.category === ClothingCategory[category])
      return <div>
        <h1>{ClothingCategory[category]}</h1>
        <div className="clothing-grid grid grid-cols-3 gap-3">
          {clothingByCategory.map((item) => {
            return ClothingInfo(item)
          })} 
        </div>
      </div>
    }
  }
  
  function ClothingInfo(item: Clothing){
    if(item.status === "Owned"){
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
    } else {
      return <h1>lolita at heart</h1>
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

  type ItemImageProps = {
    category: ClothingCategory,
    id: number
  }

  function ItemImage({ category, id }: ItemImageProps){
    let folder = ClothingCategory[category]
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

    return <Image
      src={path}
      width={0}
      height={0}
      sizes="100vw"
      alt=""
      style={{ width: 'auto', height: '300px' }}
      className={styles["clothing-image"]}
    />
  }
}



import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { getAllClothingItems } from "../../../database/database";
import { Clothing, ClothingCategory } from "../types";
import Image from 'next/image'
import styles from './styles.module.css'
import { Labrada } from "next/font/google";
import FullWidthImage from "../../components/FullWidthImage";
import Link from "next/link";
import React from "react";
import { useClothingContext } from "../ClothingContext";
import { getBrandName, getCategoryName, getImagePath } from "./helperFunctions";

const brandFont = Labrada({
  weight: ['500'],
  style: ['italic'],
  subsets: ['latin'],
})

export default function ClothingGrid(){  
  const {displayedClothes} = useClothingContext()
  
  if(displayedClothes && displayedClothes[0] != undefined){
    return <Grid/>; 
  } else {
    return <h1>no clothes here</h1>
  }

  function Grid(){
    if(displayedClothes){
      const elements = []      
      const crosses = displayedClothes.length / 3 * 2
      let crossCount = 0
      for (let index = 0; index < displayedClothes.length + crosses; index++) {
        if(index % 5 === 1 || index % 5 === 3){
          elements.push(<div className="flex flex-col" style={{marginLeft: "0.3em"}}>
            <FullWidthImage src="/images/layout/objects/cross.png" style="cross" height={"5em"}/>
            <div style={{height:"2em", width:"100%", clear:"both"}}/> {/* cross shouldn't be dead center*/}
          </div>)
          crossCount++
        } else {
          const item = displayedClothes[index - crossCount];
          elements.push(<Link href={`/lolita/wardrobe/details?id=${item.id}`} key={index}>
            {ClothingInfo(item)}
          </Link>)
        }        
      }
      return <div className={styles["grid-container"]}>
        <div className={`${styles["clothing-grid"]}`}>
          {elements.map((element, index) => {
            return element
          })} 
        </div>
      </div>
    }
  }
  

  function ClothingInfo(item: Clothing){
    if(item.status === "Owned" || item.status === "Ordered"){
      return <div className={`heart-border ${styles["clothing-card"]}`}>
        <ItemImage 
          category={ClothingCategory[item.category as keyof typeof ClothingCategory]} 
          id={item.id}
          />        
        <p className={[styles["clothing-brand"], brandFont.className].join(" ")}>{getBrandName(item.brand)}</p>
          {item.name.length < 29 ? (
            <h2 className={styles["clothing-name"]}>{item.name}</h2>      
          ) : (
            <h2 className={styles["clothing-name-small"]} style={{ fontSize: (19.5-item.name.length/29*2.75)+"px" }}>{item.name}</h2>      
          )          
        }
      </div>   
    }
  }

  interface ItemImageProps {
    category: ClothingCategory,
    id: number
  }

  function ItemImage({ category, id }: ItemImageProps){
    return <FullWidthImage src={getImagePath(category, id)} style={styles["clothing-image"]} height={'13em'}/>
  }
}


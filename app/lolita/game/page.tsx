"use client"

import { Dispatch, SetStateAction, useState } from "react";
import FullWidthImage from "../../components/FullWidthImage";
import WardrobeSidebar from "../wardrobe/(sidebar)/WardrobeSidebar";
import styles from "./styles.module.css";
import ClothingContext from "../ClothingContext";
import FilterBar from "../wardrobe/(filter)/Filter";
import { WardrobeOverview } from "../wardrobe/page";
import { Clothing, ClothingCategory } from "../types";
import ClothingSelect from "./ClothingSelect";
import { getImagePath } from "../wardrobe/helperFunctions";

export interface ISelectedClothing {
  [index: string]: Clothing | Clothing[] | undefined,
  mainpiece?: Clothing,
  top?: Clothing, /* either blouse or cutsew */
  layer?: Clothing, /* either bolero or cardigan */
  wig?: Clothing,
  kc?: Clothing,
  wristCuffs?: Clothing,
  legwear?: Clothing,
  shoes?: Clothing,
  bag?: Clothing,
  accessories?: Clothing[],
  outerwear?: Clothing
}

export default function DressUpPage(){
  /* default layer order (top to bottom priority):
    accessories (not added - shoulsn't change layer), bag, kc, outerwear, bolero / cardigan, jsk, op, skirt, blouse / cutsew, wrist cuffs, shoes, legwear, wig
  */
  const [layerOrder, setLayerOrder] = useState<number[]>([])
  const [selectedClothing, setSelectedClothing] = useState<ISelectedClothing>({})
  
  return <div>
    <h1>dress up game!</h1><br/>
    <h3>with my clothes ^__^</h3><br/>

    <div className={`${styles.game} flex flex-row`}>
      <CharacterView selectedClothing={selectedClothing} setSelectedClothing={setSelectedClothing}/>
      <ClothingSelect layerOrder={layerOrder} setLayerOrder={setLayerOrder} selectedClothing={selectedClothing} setSelectedClothing={setSelectedClothing}/>
    </div>
  </div>
}

function SelectedImages({selectedClothing} : {selectedClothing: ISelectedClothing}){
  const displayedImages: JSX.Element[] = []
  const categoryToSize = new Map<ClothingCategory, string>([
    [ClothingCategory.JSK, "14em"],
    [ClothingCategory.OP, "14em"],
    [ClothingCategory.Blouse, "8em"],
  ])

  Object.values(selectedClothing).forEach(item => {
    if((item as Clothing).brand !== undefined){
      const selection = (item as Clothing)
      const category = ClothingCategory[selection.category as keyof typeof ClothingCategory]
      displayedImages.push(<FullWidthImage src={getImagePath(category, selection.id)}
        style={`${styles["selected-clothing"]} ${styles[selection.category.toLowerCase()]}`}
        height={categoryToSize.get(category)}
        />)
    }
  })

  if(displayedImages.length > 0){
    return displayedImages
  } else {
    return <></>
  }
} 

function CharacterView({selectedClothing, setSelectedClothing} : 
  { selectedClothing: ISelectedClothing, 
    setSelectedClothing: Dispatch<SetStateAction<ISelectedClothing>>}){

  return <div className={styles["character-screen"]}>    
    <div><SelectedImages selectedClothing={selectedClothing}/></div>
    <FullWidthImage src="/images/lolita/.game/character.png" style={styles.character} height="30em"/>
  </div>
}


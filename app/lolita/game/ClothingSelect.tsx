import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FullWidthImage from "../../components/FullWidthImage";
import WardrobeSidebar from "../wardrobe/(sidebar)/WardrobeSidebar";
import styles from "./styles.module.css";
import ClothingContext, { useClothingContext } from "../ClothingContext";
import FilterBar from "../wardrobe/(filter)/Filter";
import { WardrobeOverview } from "../wardrobe/page";
import { Clothing, ClothingCategory } from "../types";
import wardrobeStyles from '../wardrobe/styles.module.css'
import Link from "next/link";
import { Labrada } from "next/font/google";
import { getBrandName, getImagePath } from "../wardrobe/helperFunctions";
import { ISelectedClothing } from "./page";

const brandFont = Labrada({
  weight: ['500'],
  style: ['italic'],
  subsets: ['latin'],
})

export default function ClothingSelect({layerOrder, setLayerOrder, selectedClothing, setSelectedClothing} : 
  { layerOrder: number[],
    setLayerOrder: Dispatch<SetStateAction<number[]>>, 
    selectedClothing: ISelectedClothing, 
    setSelectedClothing: Dispatch<SetStateAction<ISelectedClothing>>}){

  const [isFiltered, setIsFiltered] = useState<boolean>(true);  

  useEffect(() => { 
    console.log(selectedClothing)
  }, [selectedClothing])

  return <ClothingContext>
    <div>
      <FilterBar isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
      <div className='flex flex-row'>
        <ClothingSelectGrid/>      
        <WardrobeSidebar setIsFiltered={setIsFiltered}/>
      </div>
    </div>
  </ClothingContext>     

  function ClothingSelectGrid(){
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
              <FullWidthImage src="/images/layout/objects/cross.png" style="cross" height={"3em"}/>
              <div style={{height:"2em", width:"100%", clear:"both"}}/> {/* cross shouldn't be dead center*/}
            </div>)
            crossCount++
          } else {
            const item = displayedClothes[index - crossCount];
            elements.push(<button onClick={() => updateSelection(item, selectedClothing, setSelectedClothing)}>{ClothingInfo(item)}</button>)
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
    return <FullWidthImage src={getImagePath(category, id)} style={styles["clothing-image"]} height={'2em'}/>
  }
}

function updateSelection(item: Clothing, 
    selectedClothing: ISelectedClothing, 
    setSelectedClothing: Dispatch<SetStateAction<ISelectedClothing>>) {
  const type = ClothingCategory[item.category as keyof typeof ClothingCategory]

  switch(type){
    case ClothingCategory.OP:      
    case ClothingCategory.JSK:
    case ClothingCategory.Skirt:
      setSelectedClothing({...selectedClothing, mainpiece: item})
      break;
    case ClothingCategory.Bolero:
    case ClothingCategory.Cardigan:
      setSelectedClothing({...selectedClothing, layer: item})
      break;
    case ClothingCategory.Cutsew:
    case ClothingCategory.Blouse:
      setSelectedClothing({...selectedClothing, top: item})
      break;
    default:
      const clothingCopy = {  ...selectedClothing }
      clothingCopy[item.category.toLowerCase() as keyof ISelectedClothing] = item
      setSelectedClothing(clothingCopy)
  }
}

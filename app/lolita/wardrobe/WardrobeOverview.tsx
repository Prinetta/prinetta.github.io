import { useEffect, useState } from "react";
import { getAllClothingItems } from "../../../database/database";
import { Clothing, ClothingCategory } from "../types";
import Image from 'next/image'

export default function WardrobeOverview(){
  const [clothes, setClothes] = useState<Clothing[]>();

  useEffect(() => { getAllClothingItems().then(
    clothingItems => {
        if(clothingItems != null){
          setClothes(clothingItems)
        } else {
          /* show empty wardrobe page */
        }
      }
    )
  }, [])

  return <WardrobeCategory category={ClothingCategory.JSK}/>;

  function WardrobeCategory({category} : {category: ClothingCategory}){
    if(clothes != undefined){
      let clothingByCategory = clothes.filter(item => item.category === ClothingCategory[category])
      return <div>
        <h1>{ClothingCategory[category]}</h1>
        {clothingByCategory.map((item) => {
          return ClothingInfo(item)
        })} 
      </div>
    }
  }
  
  function ClothingInfo(item: Clothing){
    if(item.status === "Owned"){
      return <div>
        <div className="flex justify-center space-x-10">
          <ItemImage 
            category={ClothingCategory[item.category as keyof typeof ClothingCategory]} 
            id={item.id}
            />
          <h2>{item.name}</h2>
          {item.brand}<br/>
          {item.colorway}<br/>
          {item.note}<br/>
          {item.lolibrary_link}<br/>    
        </div>   
      </div>
    } else {
      return <h1>lolita at heart</h1>
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
    />
  }
}



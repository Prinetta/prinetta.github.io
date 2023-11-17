import localFont from "next/font/local"
import { useClothingContext } from "../../ClothingContext"
import styles from "./styles.module.css"
import { Clothing, ClothingCategory } from "../../types"
import FullWidthImage from "../../../components/FullWidthImage"
import { isRomanNumeral } from "../helperFunctions"

const titleFont = localFont({ 
  src: [{
    path: '../../../../public/fonts/Bailenson.otf',
    weight: '400',
    style: 'normal'
  }]
})

export default function ItemDetails({id} : {id: number}){
  const {clothes} = useClothingContext()
  const item = clothes.find( item => item.id === id)
  
  if(!item){    
    return <>loading... {"<3"}</>
  }

  return <div className={styles["item-details"]}>    
    <FormattedTitle item={item}/>
    <FullWidthImage src="/images/layout/frame/text-underline2.png" style={styles["underline-image"]} height="3em"/>
    <div className="grid grid-cols-2 gap-3">
      <div className={styles["item-property-bold"]}>brand:</div><div className={styles["item-property"]}>{item.brand}</div>
      <div className={styles["item-property-bold"]}>colorway:</div><div className={styles["item-property"]}>{item.colorway}</div>
      <div className={styles["item-property-bold"]}>year:</div><div className={styles["item-property"]}>2024</div> {/* maybe use lookup from lolibrary idk yet, maybe i'll just add it manually.*/}
      <div className={styles["item-property-bold"]}>lolibrary:</div><div className={styles["item-property"]}>
        {item.lolibrary_link && <a href={item.lolibrary_link} className={styles["lolibrary-link"]}>♱ Link ♱</a>}</div>
    </div>
    <div className={`${styles["item-property"]} ${styles.note}`}>{item.note}</div>

  </div>
}

function FormattedTitle({item} : {item: Clothing}){
  let itemTitle = item.name
  let itemAbbreviation = ""

  if(item.name.includes("JSK")){ /* saves JSK/OP abbreviations separately for formatting reasons */
    itemTitle = item.name.replace("JSK", "")
    itemAbbreviation = "JSK"
  } else if (item.name.includes("OP")){
    itemTitle = item.name.replace("OP", "")
    itemAbbreviation = "OP"
  }

  const formattedName: any[] = []

  Array.from(itemTitle).map((char, index) => {
    (char >= '0' && char <= '9') || isRomanNumeral(char, index, itemTitle) || !char.match(/[a-z]/i) ?       
      formattedName.push(<span className={styles["title-numerical"]}>{char}</span>) :     
      formattedName.push(<span className={styles.title}>{char}</span>)
  })

  return <h1>{formattedName}<span className={styles["title-numerical"]}> {itemAbbreviation}</span></h1>
}
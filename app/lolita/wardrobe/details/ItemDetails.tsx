import { LinkProps } from "next/link"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useEffect } from "react"
import { Clothing } from "../../types"

import { useSearchParams } from 'next/navigation'
import localFont from "next/font/local"
import { useClothingContext } from "../../ClothingContext"
import styles from "./styles.module.css"

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
  return <>
    <h1 className={styles.title}>{item.name}</h1>
    <p className={styles["item-property"]}>brand:</p><p>{item.brand}</p>
    <p className={styles["item-property"]}>colorway:</p><p>{item.colorway}</p>
    <p className={styles["item-property"]}>year:</p><p>{item.lolibrary_link}</p> {/* maybe use lookup from lolibrary idk yet, maybe i'll just add it manually.*/}
    <p className={styles["item-property"]}>lolibrary:</p><p>{item.lolibrary_link}</p>
  </>
}
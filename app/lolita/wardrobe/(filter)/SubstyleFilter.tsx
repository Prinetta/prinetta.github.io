import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Clothing, Clothing_Tag, Tag } from '../../types'
import { getAllClothingItems, getAllTags, getAllTagsOfType } from '../../../../database/database'
import styles from './styles.module.css'

export default function SubstyleFilter({text, substyle, applySubstyleFilter} : 
  {text: string, substyle: number | undefined, applySubstyleFilter: (substyle: number | undefined) => void}){

  const [isSelected, setIsSelected] = useState<boolean>(false)

  return <button className={isSelected ? [styles["filter-button"], styles["selected-button"]].join(" ") : styles["filter-button"]} onClick={() => onClick()}>{text}</button>

  function onClick(){
    setIsSelected(!isSelected)
    console.log(substyle + " is " + isSelected)  
    applySubstyleFilter(substyle)
  }
}
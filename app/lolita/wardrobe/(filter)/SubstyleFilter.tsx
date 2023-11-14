import { useState } from 'react'
import styles from './styles.module.css'

export default function SubstyleFilter({text, substyle, applySubstyleFilter} : 
  {text: string, substyle: number | undefined, applySubstyleFilter: (substyle: number | undefined) => void}){

  const [isSelected, setIsSelected] = useState<boolean>(false)

  return <button className={isSelected ? [styles["filter-button"], styles["selected-button"]].join(" ") : styles["filter-button"]} onClick={() => onClick()}>{text}</button>

  function onClick(){
    setIsSelected(!isSelected)
    applySubstyleFilter(substyle)
  }
}
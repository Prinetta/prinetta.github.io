import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Clothing, ClothingSubstyle } from '../types'
import styles from './styles.module.css'

export default function FilterBar({ currentCategoryClothes, setDisplayedClothes, isFiltered, setIsFiltered }: {
  displayedClothes: Clothing[], 
  currentCategoryClothes: Clothing[],
  setDisplayedClothes: Dispatch<SetStateAction<Clothing[]>>,
  isFiltered: boolean,
  setIsFiltered: Dispatch<SetStateAction<boolean>>
}){  

  const [substyleFilter, setSubstyleFilter] = useState<ClothingSubstyle[]>()
  const [brandFilter, setBrandFilter] = useState<string[]>([])

  useEffect(() => {
    if(!isFiltered){    
      updateFilters()
      setIsFiltered(true)
    }
  }, [isFiltered])  

  useEffect(() => {
    updateFilters()
  }, [substyleFilter, brandFilter])  

  return <div className={`${styles.filter} space-x-4`}>
    <FilterButton text="sweet ♡"/>
    <FilterButton text="gothic ♱"/>
  </div>

  function FilterButton({ text } : {text: string}){
    return <button onClick={applyFilter}>{text}</button>
  }

  function applyFilter(){
    if(brandFilter == undefined){
      return
    }
    if(brandFilter.length > 0){ // replace this with substyle filter
      setBrandFilter([])
    } else {
      setBrandFilter(["Angelic Pretty", "Baby", "CC Cat"])
    }
  }

  function updateFilters(){
    if(currentCategoryClothes != undefined){
      console.log("are not undefined")
      console.log(currentCategoryClothes)
      let filteredClothes = currentCategoryClothes
      // if(substyleFilter != undefined && substyleFilter.length > 0){
      //   filteredClothes = filteredClothes.filter(item => item.brand) // deal with tag db stuff later
      // }
      if(brandFilter != undefined && brandFilter.length > 0){
        filteredClothes = filteredClothes.filter(item => brandFilter.includes(item.brand))
      }
      console.log(filteredClothes)
      setDisplayedClothes(filteredClothes)
    }
  }
  
}
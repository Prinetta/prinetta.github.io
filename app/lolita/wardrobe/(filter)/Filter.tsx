import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Clothing, Clothing_Tag, Tag } from '../../types'
import styles from './styles.module.css'
import { getAllClothingItems, getAllTags, getAllTagsOfType } from '../../../../database/database'
import SubstyleFilter from './SubstyleFilter'

export default function FilterBar({ currentCategoryClothes, setDisplayedClothes, isFiltered, setIsFiltered }: {
  currentCategoryClothes: Clothing[],
  setDisplayedClothes: Dispatch<SetStateAction<Clothing[]>>,
  isFiltered: boolean,
  setIsFiltered: Dispatch<SetStateAction<boolean>>,
}){  

  const [selectedSubstyles, setSubstyleFilter] = useState<number[]>([])
  const [brandFilter, setBrandFilter] = useState<string[]>([])

  const [tags, setTags] = useState<Tag[]>([]);  
  const [clothesStyleTags, setClothesStyleTags] = useState<Clothing_Tag[]>([]);  

  useEffect(() => { 
    getAllTags().then(tag => {
      if(tag){
        setTags(tag)
      }
    })
    getAllTagsOfType("Style").then(tag => { 
      if(tag){
        setClothesStyleTags(tag)
      } 
    })
  }, [])

  useEffect(() => {
    if(!isFiltered){    
      updateFilters()
      setIsFiltered(true)
    }
  }, [isFiltered])  

  useEffect(() => {
    updateFilters()
  }, [selectedSubstyles, brandFilter])  

  return <div className={`${styles["top-bar"]} space-x-4`}>
    <SubstyleFilter text="sweet ♡" substyle={getTagId('Sweet')} applySubstyleFilter={applySubstyleFilter}/>
    <SubstyleFilter text="gothic ♱" substyle={getTagId('Gothic')} applySubstyleFilter={applySubstyleFilter}/>
  </div>

  function applySubstyleFilter(substyle: number | undefined){
    console.log("applying the filter ?")
    if(selectedSubstyles && substyle){
      if(selectedSubstyles.includes(substyle)){
        setSubstyleFilter(selectedSubstyles.filter(style => substyle !== style)) // removes from filter
      } else {
        setSubstyleFilter([...selectedSubstyles, substyle]) // adds to filter
      }
    }    
  }

  function getTagId(tagName: string){
    const tag: Tag | undefined = tags.find(tag => tag.name === tagName)
    return tag?.id
  }

  function updateFilters(){
    if(currentCategoryClothes){
      let filteredClothes = currentCategoryClothes

      if(selectedSubstyles && selectedSubstyles.length > 0){
        let allClothesWithCorrectStyle = clothesStyleTags.filter(clothingTag => selectedSubstyles.includes(clothingTag.tag_id))
        filteredClothes = filteredClothes.filter(clothing => allClothesWithCorrectStyle.some(clothingTag => clothingTag.clothing_id == clothing.id))
      }

      if(brandFilter && brandFilter.length > 0){
        filteredClothes = filteredClothes.filter(item => brandFilter.includes(item.brand))
      }

      setDisplayedClothes(filteredClothes)    
    }
  }
}
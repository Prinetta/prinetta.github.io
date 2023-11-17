import { ClothingCategory } from "../types"

export function getBrandName(brand: string){
  switch(brand){
    case "Baby":
      return "Baby, the Stars Shine Bright"
    case "AatP":
      return "Alice and the Pirates"
    case "Metamorphose":
      return "Metamorphose Temps de Fille"
    case "Moitie":
      return "Moi-même-Moitié"
    case "HNaoto":
      return "H.NAOTO"
    case "JetJ":
      return "Juliette et Justine"
    default:
      return brand
  }
}

export function getCategoryName(category: ClothingCategory): string{
  switch(category){
    case ClothingCategory.Wristcuffs:
    case ClothingCategory.Legwear:
    case ClothingCategory.Shoes:
    case ClothingCategory.Outerwear:
      return ClothingCategory[category]     
    case ClothingCategory.Accessory:
      return "Accessories"
    default:
      return ClothingCategory[category] + 's'
  }
}

export function getImagePath(category: ClothingCategory, id: number): string{
  let folder = getCategoryName(category).toLowerCase()
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

  return `/images/lolita/${folder}/${id}.png`
}

export function isRomanNumeral(char: string, index: number, title: string): boolean{
  return char == 'I' && (index + 1 >= title.length || title.charAt(index+1) == "I" || !title.charAt(index+1).match(/[a-z]/i))
}
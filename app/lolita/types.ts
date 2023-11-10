export interface Clothing {
  brand: string
  colorway: string | null
  id: number
  image: string | null
  lolibrary_link: string | null
  name: string
  note: string | null
  status: string
  category: string
}

export enum ClothingCategory {
  JSK,
  OP,
  Skirt,
  Blouse,
  Cutsew,
  Bolero,
  Cardigan,
  Wig,
  KC,
  Wristcuffs,
  Legwear,
  Shoes,
  Bag,
  Accessory,
  Outerwear
}

export enum ClothingSubstyle {
  Sweet,
  Gothic,
  Oldschool,
  OTT,
  None
}

export enum Color {
  Pink,
  Sax,
  Lavender,
  Mint,
  White,
  Black
}
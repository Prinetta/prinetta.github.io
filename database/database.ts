import { createBrowserClient } from '@supabase/ssr'
import { Database, Tables, DbResult } from './supabase';
import { Clothing, ClothingCategory, Clothing_Tag, Tag } from '../app/lolita/types';
import { revalidatePath } from 'next/cache'


const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const CLOTHING_TABLE = "Clothing"

export async function getAllClothingItems() : Promise<Clothing[] | null> {
  const query = supabase.from(CLOTHING_TABLE).select();
  const clothingItems: Clothing[] | null  = (await query).data

  //revalidatePath('/lolita/wardrobe')

  return clothingItems
}

export async function getAllTagsOfType(type: string) : Promise<Clothing_Tag[] | undefined> {
  const tags: Tag[] | null  = (await supabase.from("Tag").select().eq("type", type)).data // all substyle tags (sweet, gothic, old school etc.)
  const clothingTags: Clothing_Tag[] | undefined = 
    (await supabase.from("Clothing_Tag").select()).data?.filter(clothingTag => tags?.some(tag => tag.id === clothingTag.tag_id))
    
  //revalidatePath('/lolita/wardrobe')

  return clothingTags
}

export async function getAllTags() : Promise<Tag[] | null> {
  const query = supabase.from("Tag").select();
  const tags: Tag[] | null  = (await query).data 

  //revalidatePath('/lolita/wardrobe')

  return tags
}

export async function getClothingItemsByCategory(category: ClothingCategory) : Promise<Clothing[] | null> {
  const query = supabase.from(CLOTHING_TABLE).select().eq('category', ClothingCategory[category]);
  const clothingItems: Clothing[] | null  = (await query).data

  //revalidatePath('/lolita/wardrobe')

  return clothingItems
}

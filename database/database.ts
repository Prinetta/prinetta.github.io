"use server";

import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useState } from 'react';
import { Database, Tables, DbResult } from './supabase';
import type { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types';
import { Clothing, ClothingCategory } from '../app/lolita/types';

const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const CLOTHING_TABLE = "Clothing"

export async function getAllClothingItems() : Promise<Clothing[] | null> {
  const query = supabase.from(CLOTHING_TABLE).select();
  const clothingItems: Clothing[] | null  = (await query).data

  return clothingItems
}


export async function getClothingItemsByCategory(category: ClothingCategory) : Promise<Clothing[] | null> {
  const query = supabase.from(CLOTHING_TABLE).select().eq('category', category);
  const clothingItems: Clothing[] | null  = (await query).data

  return clothingItems
}

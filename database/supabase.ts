import { PostgrestError } from '@supabase/supabase-js'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Clothing: {
        Row: {
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
        Insert: {
          brand: string
          colorway?: string | null
          id?: number
          image?: string | null
          lolibrary_link?: string | null
          name: string
          note?: string | null
          status: string
          category: string
        }
        Update: {
          brand?: string
          colorway?: string | null
          id?: number
          image?: string | null
          lolibrary_link?: string | null
          name?: string
          note?: string | null
          status?: string
          category?: string
        }
        Relationships: []
      }
      Clothing_Tag: {
        Row: {
          clothing_id: number
          tag_id: number
        }
        Insert: {
          clothing_id: number
          tag_id: number
        }
        Update: {
          clothing_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Clothing_Tag_clothing_id_fkey"
            columns: ["clothing_id"]
            isOneToOne: false
            referencedRelation: "Clothing"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Clothing_Tag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "Tag"
            referencedColumns: ["id"]
          }
        ]
      }
      Tag: {
        Row: {
          id: number
          Name: string
          Type: string
        }
        Insert: {
          id?: number
          Name: string
          Type: string
        }
        Update: {
          id?: number
          Name?: string
          Type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never
export type DbResultErr = PostgrestError

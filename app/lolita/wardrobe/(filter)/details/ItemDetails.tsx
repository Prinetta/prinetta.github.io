import { LinkProps } from "next/link"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useEffect } from "react"
import { Clothing } from "../../../types"

import { useSearchParams } from 'next/navigation'

export default function ItemDetails(){
  const searchParams = useSearchParams()
  console.log(searchParams.get('id')) // Logs "search"
  return <div className=""></div>
}
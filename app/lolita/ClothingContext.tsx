import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { Clothing, ClothingCategory } from "./types"
import { getAllClothingItems } from "../../database/database";


interface IClothingContext {
  clothes: Clothing[],
  setClothes: Dispatch<SetStateAction<Clothing[]>>
  currentCategoryClothes: Clothing[],
  setCategoryClothes: Dispatch<SetStateAction<Clothing[]>>,
  displayedClothes: Clothing[],
  setDisplayedClothes: Dispatch<SetStateAction<Clothing[]>>
}

const ClothingContext = createContext<IClothingContext>({
  clothes: [],
  setClothes: () => {},
  currentCategoryClothes: [],
  setCategoryClothes: () => {},
  displayedClothes: [],
  setDisplayedClothes: () => {}
})

export default function ClothingContextProvider(props: any) {
  const [fetchedClothes, setFetchedClothes] = useState<Clothing[]>([]);  
  const [currentCategoryClothes, setCategoryClothes] = useState<Clothing[]>([]);
  const [displayedClothes, setDisplayedClothes] = useState<Clothing[]>([]);

  useEffect(() => { 
    if(!fetchedClothes || fetchedClothes.length == 0){
      getAllClothingItems().then(
        clothes => {
          if(clothes){          
            setFetchedClothes(clothes)
            const defaultFilter = clothes.filter((item: Clothing) => item.category === ClothingCategory[ClothingCategory.JSK])
            setCategoryClothes(defaultFilter)
            setDisplayedClothes(defaultFilter)
          }
        }
      )
    }
  }, [])

  return (
    <ClothingContext.Provider
      value={{
        clothes: fetchedClothes,
        setClothes: setFetchedClothes,
        currentCategoryClothes: currentCategoryClothes,
        setCategoryClothes: setCategoryClothes,
        displayedClothes: displayedClothes,
        setDisplayedClothes: setDisplayedClothes
      }}
    >
      {props.children}
    </ClothingContext.Provider>
  );
};

export function useClothingContext(){
  const context = useContext(ClothingContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
import React, { useState } from "react";
import { CategoryAdd } from './components/CategoryAdd';
import { Gif } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [sectionState, setCategoriesState] = useState([
    "Dragon Ball"
  ]);


  return (
    <div>
      <h2>Gif Expert App</h2>
      <CategoryAdd setCategories={setCategoriesState} />
      <hr />
      <ol>
        {
        sectionState.map((category) => (
          <Gif 
            category={category}
            key={category}/>
        ))
        }
      </ol>
    </div>
  );
};

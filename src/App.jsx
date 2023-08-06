import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './components/RecipePage';
import { data } from './utils/data';



export const App = () => {
  // Your state code here
  const [ single, setSingle ] = useState(null)


  const props = (recipeLabel) => {
    setSingle(recipeLabel);
  };

  const handleRemoveSelection = () => {
    setSingle(null);
  };

  return (
    <>
    {single ? (<RecipePage hits={data.hits.find((hit) => hit.recipe.label === single).recipe} onClick={handleRemoveSelection}/>) :
    (<RecipeListPage props={props}/>)}
    </>
  )
};
import { useLocation } from 'react-router-dom'

import './Search.css'
import { useFetch } from '../../components/hooks/useFetch'
import RecipeList from '../../components/RecipeList/RecipeList'

const Search = () => {

   const queryString = useLocation().search
   const queryParams = new URLSearchParams(queryString)
   const query = queryParams.get('q')

   const url = 'http://localhost:3000/recipes?q=' + query

   const { data, isPending, error } = useFetch(url)

   return (
      <div>
         <h2 className='page-title'>Recipes including "{ query }"</h2>
         { error && <p className='error'>{ error }</p> }
         { isPending && <p className='loading'>Loading...</p> }
         { data && <RecipeList recipes={data} /> }
      </div>
   )
}

export default Search
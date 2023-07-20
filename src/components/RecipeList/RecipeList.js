import './RecipeList.css'
import { Link } from 'react-router-dom'
import Trashcan from '../../assets/trashcan.svg'
import { projectFirestore } from '../../firebase/config'
import { useTheme } from '../hooks/useTheme'

const RecipeList = ({ recipes }) => {

   const {mode} = useTheme()

   if (recipes.length === 0) {
      return <div className='error'>No Recipes to load...</div>
   }

   const handleClick = id => {
      projectFirestore.collection('recipes').doc(id).delete()
   }

   return (
      <div className='recipe-list'>
         { recipes?.map(recipe => (
            <div key={ recipe.id } className={`card ${mode}`}>
               <h3>{ recipe.title }</h3>
               <p>{ recipe.cookingTime }</p>
               <div>{recipe.method.substring(0, 100)}...</div>
               <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
               <img src={Trashcan} className='delete' onClick={() => handleClick(recipe.id)} alt='delete'/>
            </div>
         )) }
      </div>
   )
}

export default RecipeList
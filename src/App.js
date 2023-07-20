import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import Create from './views/Create/Create'
import Search from './views/Search/Search'
import Recipes from './views/Recipe/Recipe'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'
import { useTheme } from './components/hooks/useTheme'


function App() {

   const { mode } = useTheme()

   return (
      <div className={ `App ${ mode }` }>
         <BrowserRouter>
            <Navbar />
            <ThemeSelector />
            <Switch>
               <Route path='/' exact component={ Home } />
               <Route path='/create' component={ Create } />
               <Route path='/search' component={ Search } />
               <Route path='/recipes/:id' component={ Recipes } />
            </Switch>
         </BrowserRouter>
      </div>
   )
}

export default App

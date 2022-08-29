import { Routes, Route } from 'react-router-dom'
import { Home, Shop, Navigation, Authentication } from './routes'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={< Home />} />
        <Route path='shop' element={ <Shop /> } />
        <Route path='sign-in' element={ <Authentication /> } />
      </Route>
    </Routes>  
  )
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Title from './pages/Title/Title'
import Form from './pages/Form/Form'
import About from './pages/About/About'
import RecipePage from './pages/RecipePage/RecipePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Title />} />
        <Route path='/form' element={<Form />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<RecipePage />} />
      </Routes>
    </Router>
  )
}

export default App

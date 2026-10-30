//Importing the styles, gallery
import './App.css'
import Gallery from './claytonElements/Gallery'
import ShowDetail from './claytonElements/ShowDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//App Function displaying all the pages of Gallery and ShowDetail
function App() {
  return (
    <BrowserRouter>
    
    {/*Two Routes, the empty one for the gallery page, and the one with the show's id for more information*/}
      <Routes>

        {/*Calls the gallery element*/}
        <Route path="/" element={<Gallery />} />

        {/*Calls the ShowDetail element*/}
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

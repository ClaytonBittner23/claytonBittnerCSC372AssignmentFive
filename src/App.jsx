
import './App.css'

import Gallery from './claytonElements/Gallery'
import ShowDetail from './claytonElements/ShowDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//App controls which page the user sees
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

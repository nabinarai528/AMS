import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Help from './pages/Help/Help'
import Content from './pages/Content/Content'
import Contact from './pages/Contact/Contact'
import SignIn from './pages/SignIn/SignIn'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/home" element={<Home/>}/>
      <Route path ="/aboutUs" element={<AboutUs/>}/>
      <Route path ="/help" element={<Help/>}/>
      <Route path ="/content" element={<Content/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/signIn" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

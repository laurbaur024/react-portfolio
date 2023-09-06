import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./components/Navbar"
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './components/404'
// import Resume from './components/Resume'



export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path='/' element={<AboutMe/>} />
            <Route path='/about' element={<AboutMe/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            {/* <Route path='/resume' element={<Resume/>} /> */}

            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./components/Navbar"
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';




export default function App() {
  
  return (
    <>
    <Navigation></Navigation>
    <AboutMe></AboutMe>
    <Portfolio></Portfolio>
    <Footer></Footer>
    </>
  )
}


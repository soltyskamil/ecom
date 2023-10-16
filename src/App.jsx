import './App.css'
import Header from './components/Header'
import Page from './components/Page'
import { BrowserRouter as Router } from 'react-router-dom'
import Uppernav from './components/Uppernav'
function App() {
  return (
    <Router>
     <Uppernav />
     <Header />
     <Page />
    </Router>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Pocetna from './pages/Pocetna'
import NatjecanjaPregled from './pages/natjecanja/NatjecanjaPregled'
import NatjecanjaPromjena from './pages/natjecanja/NatjecanjaPromjeni'
import NatjecanjaDodaj from './pages/natjecanja/NatjecanjaDodaj'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import NavBarEdunova from './components/NavBarEdunova'

function App() {
  
  return (
    <Container>
      <NavBarEdunova />


      <Container className="app">
        <Routes>
          <Route path={RouteNames.HOME} element={<Pocetna/>} />

          <Route path={RouteNames.NATJECANJE_PREGLED} element={<NatjecanjaPregled />} />
          <Route path={RouteNames.NATJECANJE_DODAJ} element={<NatjecanjaDodaj />} />
          <Route path={RouteNames.NATJECANJE_PROMJENA} element={<NatjecanjaPromjena />} />

        </Routes>
      </Container>
    </Container>
  )
}

export default App

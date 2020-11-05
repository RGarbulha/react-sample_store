
import Container from 'react-bootstrap/Container'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Showcase from './components/Showcase/Showcase'
import Checkout from './components/Checkout/Checkout'

import './styles/store.css'

function Home() {
  return (
      <Container>
        <div className="store">
        <SideNav/>
        <Showcase/>
        </div>
      </Container>
  );
}
function App() {
  return (
    <div className="App">
     
    <Header/>
     
<Switch>
    <Route exact path='/' render={() => (
        <Home />
    )}/>
    <Route exact path='/checkout' render={() => (
        <Checkout  />
    )}/>
</Switch>
    </div>
  );
}

export default App;

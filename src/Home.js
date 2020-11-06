import { useState, useEffect } from 'react'

import SideNav from './components/SideNav/SideNav'
import Showcase from './components/Showcase/Showcase'

import Container from 'react-bootstrap/Container'

import data from './data.json';

import './styles/store.css'

const Home = (props) => {

    const [state, setState] = useState({
        cart: [],
        products: [],
        menuState: props.menuState
    })

    useEffect(() => {
        return () => {
            props.cart.closeMenu()
        }
    }, [])

    //product import here
    useEffect(() => {
        setState({ ...state, products: data })
    }, [])

    //filters here

    return (
        <Container>
            <div className="store">
                <SideNav />
                <Showcase addToCart={props.cart.addToCart} products={state.products} />
            </div>
        </Container>
    );
}

export default Home
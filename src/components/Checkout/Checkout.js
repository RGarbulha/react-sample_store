import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

export default function Checkout(props) {

    useEffect(() => {
        return () => {
            props.cart.closeMenu()
        }
    }, [])
    return (
        <Container>
            Checkout
        </Container>
    )
}

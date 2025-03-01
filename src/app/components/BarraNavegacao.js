'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/filmes">The MovieDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* dropdown */}
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/filmes">Filmes Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/top">Melhores Avaliados</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/cartaz">Em Cartaz</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/lancamento">Lançamentos</NavDropdown.Item>
                        </NavDropdown>

                        {/* Séries */}
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/series">Séries Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/series/top-rated">Melhores Avaliadas</NavDropdown.Item>
                            <NavDropdown.Item href="/series/airing-today">Na TV</NavDropdown.Item>
                            <NavDropdown.Item href="/series/on-the-air">Exibidas Hoje</NavDropdown.Item>
                        </NavDropdown>

                        {/* link */}
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
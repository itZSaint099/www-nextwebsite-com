import { ReactNode } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link href="/" className="navbar-brand">Website</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/library" className="nav-link">Library</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}

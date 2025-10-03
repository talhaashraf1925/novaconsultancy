import { Navbar, Nav, Container, Image } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="main">
      <Navbar expand="lg" className="navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <Image
              src="/images/logo.png"
              style={{ width: "110px", height: "100px" }}
              alt="Logo"
            />
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="main-navbar">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          {/* Collapsible Links */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="m-auto d-flex gap-5">
              <Link href="/" className="fw-bold nav-link text-red-500">
                Home
              </Link>
              <Link href="/about" className="fw-bold nav-link">
                About
              </Link>
              <Link href="/services" className="fw-bold nav-link">
                Services
              </Link>
              <Link href="/package" className="fw-bold nav-link">
                Package
              </Link>
              <Link href="/projects" className="fw-bold nav-link">
                Projects
              </Link>
              <Link href="/team" className="fw-bold nav-link">
                Team
              </Link>
              <Link href="/blog" className="fw-bold nav-link">
                Blog
              </Link>
              <Link href="/contact" className="fw-bold nav-link">
                Contact
              </Link>
            </Nav>
            <div>
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

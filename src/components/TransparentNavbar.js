import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../styles/components/TransparentNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiBuymeacoffee } from "react-icons/si";
import { AiOutlineShareAlt, AiOutlineFullscreen } from "react-icons/ai";
import { GiMusicalNotes } from "react-icons/gi"
import { useFullScreenHandle } from "react-full-screen";

const TransparentNavbar = () => {
  const handle = useFullScreenHandle();

  return (
      <Navbar bg="transparent" variant="dark" className="navbar">

        <Container className="mt-3">
          <Navbar.Brand href="#home">Study.Lofi</Navbar.Brand>
          <Nav className="me-auto center-navbar">
          <Nav.Link href="#features">
              <GiMusicalNotes />
            </Nav.Link>
            <Nav.Link href="#features" onClick={handle.enter}>
              <AiOutlineFullscreen />
            </Nav.Link>
            <Nav.Link href="#home">
              <SiBuymeacoffee />
            </Nav.Link>
            <Nav.Link href="#features">
              <AiOutlineShareAlt />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default TransparentNavbar;

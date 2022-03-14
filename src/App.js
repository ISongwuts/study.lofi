import Chillsday from "./source/backgrounds/chills-day.gif";
import "./App.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./styles/components/TransparentNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TransparentNavbar from "./components/TransparentNavbar";
import { FullScreen } from "react-full-screen";
import { SiBuymeacoffee } from "react-icons/si";
import { AiOutlineShareAlt, AiOutlineFullscreen } from "react-icons/ai";
import { GiMusicalNotes } from "react-icons/gi";
import { useFullScreenHandle } from "react-full-screen";
import { FiMinimize2 } from "react-icons/fi";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AOT from "./audio/aot.ogg";

function App() {
  const handle = useFullScreenHandle();
  const [isToggle, setToggle] = useState(false);

  const onToggled = () => {
    isToggle ? handle.exit() : handle.enter();
    setToggle(!isToggle);
  };
  return (
    <FullScreen handle={handle}>
      <div className="wrap-background">
        <Navbar bg="transparent" variant="dark" className="navbar">
          <Container className="mt-3">
            <Navbar.Brand href="#home">Study.Lofi</Navbar.Brand>
            <Nav className="me-auto center-navbar">
              <AudioPlayer autoPlay src={AOT} volume={0.5}/>
              <Nav.Link href="#features">
                <GiMusicalNotes />
              </Nav.Link>
              <Nav.Link href="#features" onClick={onToggled}>
                {isToggle ? <FiMinimize2 /> : <AiOutlineFullscreen />}
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

        <img src={Chillsday} className="background" alt="bg" />
      </div>
    </FullScreen>
  );
}

export default App;

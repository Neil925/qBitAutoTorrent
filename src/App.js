import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>qBitAutoTorrent Main Page</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/login">login</Link> |{" "}
          <Link to="/auto">Auto Torrent</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;

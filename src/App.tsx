import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Scrollbars style={{ height: "100vh" }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          {[...Array(20)]
            .map((_, i) => i)
            .map((v) => (
              <p key={v}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In qui
                recusandae iste fugiat, dolore alias, consequuntur ut ipsa vero
                similique aut ratione esse molestiae ab quibusdam sed eos minus
                cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolor nesciunt repudiandae, quis quibusdam sit, libero rerum
                esse modi voluptates nemo culpa doloremque facere accusantium
                deleniti veritatis in repellat laboriosam. Odit? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            ))}
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </Scrollbars>
  );
}

export default App;
